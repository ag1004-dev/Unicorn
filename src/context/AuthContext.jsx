// ** React Imports
import { createContext, useEffect, useState } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Axios Import
import axios from 'axios'
import {connect} from 'socket.io-client'

// ** JWT Decode
import * as jwtDecode from 'jwt-decode'

// ** Utils
import api from '../utils/api.jsx'

// ** Defaults
const defaultProvider = {
  user: null,
  loading: true,
  emailLoading:false,
  signingInWithEmail: '',
  setSigningInWithEmail: () => String,
  showLoginOptionModal:false,
  setShowLoginOptionModal: () => Boolean,
  rememberMe: false,
  setRememberMe: () => Boolean,
  showPasswordInput: false,
  setShowpasswordInput: () => Boolean,
  loginError: false,
  setUser: () => null,
  setLoading: () => Boolean,
  isInitialized: false,
  showTwoStepModal: false,
  setShowTwoStepModal: ()=> Boolean,
  loginByEmail: () => Promise.resolve(),
  loginByGoogle: () => Promise.resolve(),
  loginByDiscord: () => Promise.resolve(),
  loginByFacebook: () => Promise.resolve(),
  loginByAmazon: () => Promise.resolve(),
  loginByTwitter: () => Promise.resolve(),
  loginByWallet: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  updateUser: () => Promise.resolve(),
  refreshUser: () => Promise.resolve(),
  verifyTwostep: () => Promise.resolve(),
  resendTwostepCode: () => Promise.resolve(),
  cancelAuth: () => Promise.resolve(),
  setIsInitialized: () => Boolean
}
const AuthContext = createContext(defaultProvider)

const AuthProvider = ({ children }) => {
  // ** States
  const [state, setState] = useState({})
  const [user, setUser] = useState(defaultProvider.user)
  const [loading, setLoading] = useState(defaultProvider.loading)
  const [isInitialized, setIsInitialized] = useState(defaultProvider.isInitialized)
  const [web3auth, setWeb3auth] = useState(null)
  const [provider, setProvider] = useState(null)
  const [publicAddress, setPublicAddress] = useState()
  const [showTwoStepModal, setShowTwoStepModal] = useState()
  const [resendToken, setResendToken] = useState()
  const [last4, setLast4] = useState()
  const [showLoginOptionModal, setShowLoginOptionModal] = useState(defaultProvider.showLoginOptionModal)
  const [loginError, setLoginError] = useState(defaultProvider.loginError)
  const [emailLoading, setEmailLoading] = useState(false)
  const [signingInWithEmail, setSigningInWithEmail] = useState('')
  const [rememberMe, setRememberMe] = useState(defaultProvider.rememberMe)
  const [showPasswordInput, setShowpasswordInput] = useState(defaultProvider.showPasswordInput)

  // ** Hooks
  const router = useRouter()
  useEffect(() => {
    const initAuth = async () => {
      setIsInitialized(true)
      const ls = window.localStorage.getItem(`${process.env.NEXT_PUBLIC_LS_KEY}`)
      const auth = ls && JSON.parse(ls)
      setState({ auth })

      try {
        if (auth) {
          fetchUser(auth)
        } else {
          setLoading(false)
        }
      } catch (error) {
        console.error(error)
      }
    }

    initAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchUser = async auth => {
    setLoading(true)
    const { accessToken } = auth
    const { id, publicAddress } = jwtDecode(accessToken)

    try {
      const user = await api.getUser()
      setLoading(false)
      // console.log('fetchUser', user)
      if (user) {
        setUser({ ...user, id, role: 'admin', username: user.displayname||'Anonymous', name: user.fullname||'Anonymous', phone: user.contact||''})
        localStorage.setItem(
          'userData',
          JSON.stringify({ ...user, id, role: 'admin', username: user.displayname||'Anonymous', name: user.fullname||'Anonymous', phone: user.contact||''})
        )
        localStorage.setItem('isCustomer', 'true');
      } else {
        handleLogout()
      }
    } catch {
      setLoading(false)
        handleLogout()
    }

    // api.getUser()
    //   .then(user => {
    //     setLoading(false)
    //     console.log('fetchUser', user)
    //     if (user) {
    //       setUser({ ...user, id, role: 'admin', username: user.username||'Anonymous' })
    //       localStorage.setItem(
    //         'userData',
    //         JSON.stringify({ ...user, id, role: 'admin', username: user.username||'Anonymous' })
    //       )
    //     } else {
    //       handleLogout()
    //     }
    //   })
    //   .catch(() => {
    //     setLoading(false)
    //     handleLogout()
    //   })
  }

  const handleAuthResponse = async (res) => {
    // console.log('handleAuthResponse', res)
    if(res) {
      let {accessToken, resendToken, last4} = res
      if(accessToken === 'two-step-required') {
        setResendToken(resendToken)
        setLast4(last4||1234)
        setLoading(false)
        setShowTwoStepModal(true)
      } else {
        const auth = res
        localStorage.setItem(`${process.env.NEXT_PUBLIC_LS_KEY}`, JSON.stringify(auth));
        setState({ auth });
        await fetchUser(auth)

        const returnUrl = router.query.returnUrl
        const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'
        router.replace(redirectURL)
      }
    }
  }

  const handleCancelAuth = async ()=> {
    setLoading(false)
    setShowTwoStepModal(false)
  }

  const handleVerifyTwostep = async (code) => {
    // console.log('verifyTwostep', code)

    setLoading(true)
    let res = await api.verifyTwoStepCode(code, resendToken)
    if(res) {
      let {accessToken, verification} = res
      // console.log('accessToken, verification', accessToken, verification)
      if(verification === 'failure') {
        setLoading(false)

        return false
      } else {
        setShowTwoStepModal(false)
        const auth = res
        localStorage.setItem(`${process.env.NEXT_PUBLIC_LS_KEY}`, JSON.stringify(auth));
        setState({ auth });
        await fetchUser(auth)

        const returnUrl = router.query.returnUrl
        const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'
        router.replace(redirectURL)
      }
    }
  }

  const handleResendTwostepCode = async () => {
    // console.log('resendTwostepCode')

    setLoading(true)
    let res = await api.resendTwoStepCode(resendToken)
    if(res) {
      let {accessToken, resendToken} = res
      // console.log('accessToken, resendToken', accessToken, resendToken)
      if(resendToken) {
        setResendToken(resendToken)
        setLoading(false)
      } else {
        // console.log('failed')
        setLoading(false)
      }
    }
  }

  // Remember email in local storage when remember me option is selected
  const rememberEmail = (email) => {
    if (rememberMe) {
      localStorage.setItem('user-email', email)
    } else {
      localStorage.removeItem('user-email')
    }
  }

  const connectSocketForEmailLogin = (ret, email) => {
    setSigningInWithEmail(email)
    setLoading(false); //To show waiting screen on login page

    const socket = connect(process.env.NEXT_PUBLIC_BACKEND_URL)
    
    socket.emit('subscribe', ret.token)

    socket.on(ret.token, async (data) => {
      // console.log("socket data", data);
      socket.close()

      setSigningInWithEmail('')
      rememberEmail(email)
      handleAuthResponse(data)
    });
  }

  const handleLoginByEmail = async (email, password, withEmailLogin) => {
    if(password){
      setEmailLoading(true)

      let ret = await api.auth({
        "authType": "email",
        "authData": {
          "email":email,
          "password": password}
      })
      if(ret){        
        if(ret.result == "failure"){
          setEmailLoading(false)
          setLoginError(true)

          return false
        } else {
          if(ret.accessToken){
            setEmailLoading(false)
            setLoginError(false)
            rememberEmail(email)
            handleAuthResponse(ret)
          } else {
            setLoading(false)

            return false
          }
        }        
      }
    } else {
      setEmailLoading(true)

      if(withEmailLogin) {
        setLoading(true)

        let ret = await api.auth({
          "authType": "email",
          "authData": {
              "email": email,
          }
        })
        if(ret.token){
          setEmailLoading(false)
          // console.log('auth result', ret)
    
          connectSocketForEmailLogin(ret, email)
        } else {
          setLoading(false)

          return false
        }
      } else {
        let ret = await api.checkPasswordFromEmail({          
          "email": email,
        })      
        if(ret.has_password == false) {
            setLoading(true)

            let ret = await api.auth({
            "authType": "email",
            "authData": {
                "email": email,
            }
          })
          if(ret.token){
            setEmailLoading(false)
            // console.log('auth result', ret)
      
            connectSocketForEmailLogin(ret, email)
          } else {
            setLoading(false)

            return false
          }
        } else{
          setEmailLoading(false)
          setLoading(false)
          // setShowLoginOptionModal(true)
          setShowpasswordInput(true)
          
          return false
        }
      }
    }
  }

  const handleLoginByGoogle = async (tokenResponse) => {
    setLoading(true)

    const userInfo = await axios
        .get('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        })
        .then(res => res.data);

    // console.log(userInfo);

    let ret = await api.auth({
      "authType": "google",
      "authData": userInfo
    })

    handleAuthResponse(ret)
  }

  const handleLoginByDiscord = async (tokenResponse) => {
    setLoading(true)

    const userInfo = await axios
        .get('https://discord.com/api/users/@me', {
          headers: { Authorization: `${tokenResponse.tokenType} ${tokenResponse.accessToken}` },
        })
        .then(res => res.data);

    // console.log(userInfo);

    let ret = await api.auth({
      "authType": "discord",
      "authData": userInfo
    })

    handleAuthResponse(ret)
  }

  const handleLoginByTwitter = async (resp) => {
    setLoading(true)

    const userInfo = resp

    // console.log(userInfo);

    let ret = await api.auth({
      "authType": "twitter",
      "authData": {
        image: userInfo.profile_image_url,
        name: userInfo.name,
        username: userInfo.screen_name,
      }
    })

    handleAuthResponse(ret)
  }

  const handleLoginByFacebook = async (resp) => {
    setLoading(true)

    const userInfo = resp

    // console.log(userInfo);

    let ret = await api.auth({
      "authType": "facebook",
      "authData": userInfo
    })

    handleAuthResponse(ret)
  }

  const handleLoginByAmazon = async (resp) => {
    setLoading(true)

    const userInfo = resp

    // console.log(userInfo);

    let ret = await api.auth({
      "authType": "amazon",
      "authData": userInfo
    })

    handleAuthResponse(ret)
  }

  const handleLoginByWallet = async (wallet, address) => {
    setLoading(true)

    let ret = await api.auth({
      "authType": "wallet",
      "authData": {
        chainId: wallet.chainId,
        address
      }
    })

    handleAuthResponse(ret)
  }

  const handleLogout = async () => {
    localStorage.removeItem('userData')
    setUser(null)
    localStorage.removeItem(`${process.env.NEXT_PUBLIC_LS_KEY}`)
    setState({ auth: undefined })
    setLoading(false)
    setIsInitialized(false)

    router.push('/login')
  }

  const updateUser = async (userData) => {
    api.updateUser(userData)
    .then(response => {
      // console.log('response', response)
      if(response) {
        setUser({...user, ...userData, username: userData.displayname, name: userData.fullname, phone: userData.contact})
      }
    })
  }

  const refreshUser = async () => {
    const auth = JSON.parse(localStorage.getItem(`${process.env.NEXT_PUBLIC_LS_KEY}`));
    const { accessToken } = auth
    const { id, publicAddress } = jwtDecode(accessToken)

    api.getUser().then(user => {
        if (user) {
          // console.log(user)
          setUser({ ...user, id, role: 'admin', username: user.fullname||'Anonymous', name: user.fullname||'Anonymous' })
          localStorage.setItem(
            'userData',
            JSON.stringify({ ...user, id, role: 'admin', username: user.fullname||'Anonymous', name: user.fullname||'Anonymous' })
          )
        } else {
          handleLogout()
        }
      })
      .catch(() => {
        handleLogout()
      })
  }

  const values = {
    user,
    loading,
    emailLoading,
    last4,
    signingInWithEmail,
    setSigningInWithEmail,
    showLoginOptionModal,
    setShowLoginOptionModal,
    rememberMe,
    setRememberMe,
    showPasswordInput,
    setShowpasswordInput,
    loginError,
    showTwoStepModal,
    setShowTwoStepModal,
    setUser,
    setLoading,
    isInitialized,
    setIsInitialized,
    loginByEmail: handleLoginByEmail,
    loginByGoogle: handleLoginByGoogle,
    loginByDiscord: handleLoginByDiscord,
    loginByTwitter: handleLoginByTwitter,
    loginByFacebook: handleLoginByFacebook,
    loginByAmazon: handleLoginByAmazon,
    loginByWallet: handleLoginByWallet,
    verifyTwostep: handleVerifyTwostep,
    resendTwostepCode: handleResendTwostepCode,
    cancelAuth: handleCancelAuth,
    logout: handleLogout,
    updateUser,
    refreshUser,
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
