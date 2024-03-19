import * as React from "react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Icons from "../../components/image layouts/icons";
import Logo from "../../assets/images/logo.png";
import { Heading1, Paragraph } from "../../components/ui/texts";
import Buttons from "../../components/ui/buttons";
import { Google } from "mdi-material-ui";
import Twitter from 'mdi-material-ui/Twitter';
import TwitterLogin from "react-twitter-auth";
//import {Facebook} from 'mdi-material-ui';
//import Discord from 'mdi-material-ui/Discord'
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import Line2 from "../../assets/images/Line 2.png";
import TwitterColored from "../../assets/images/twittercolored.png";
import DiscordColored from "../../assets/images/discordcolored.png";
import TelegramColored from "../../assets/images/telegramcolored.png";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import appstore from "../../assets/images/appstore.png";
import playstore from "../../assets/images/playstore.png";
import RobortLeft from "../../assets/images/robort-left.png";
import Vector1 from "../../assets/images/Vector 1.png";
import Box from '@mui/material/Box'
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from "react-router";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const AirDrop = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  

  const [isSignUp, setIsSignUp] = useState(false)
  const discordLogin = ()=>{
    const redirectUri = `${window.location.origin}/discordcallback`
    const dPopup = window.open(`https://discord.com/api/oauth2/authorize?client_id=1054765409657688114&redirect_uri=${redirectUri}&response_type=token&scope=identify`, 'discordLogin', 'height=700,width=500')
    window.addEventListener('message', handleMessage, false)
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const auth = useAuth()
  useEffect(()=>{
    if (localStorage.getItem('isCustomer') === 'true') {
      setIsSignUp(false)
    } else {
      setIsSignUp(true)
    }
    // Display saved email when selected remember me from the previous session
    if (localStorage.getItem('user-email')) {
      setEmail(localStorage.getItem('user-email'))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <React.StrictMode>
      <Helmet>
        <title>Airdop</title>
      </Helmet>

      <div className="fill-window airdrop">
        <div className="mx-[90px] mt-6">
          <Icons width="hundred" src={Logo} />
        </div>

        <section>
          <div className="w-[650px] flex">
            <div className="w-[450px] flex flex-col justify-between gap-y-[30px] items-start relative p-[20px]">
              <img
                src={Vector1}
                alt="vector image"
                className="w-[500px] h-auto top-0 left-0 absolute"
              />
              <Heading1 text="Unicorn Mart Inc." special="special" />
              <Paragraph
                type="one"
                text={
                  "(UMI) is a cutting-edge e-commerce platform revolutionizing online shopping with its innovative is integration of blockchain technology. At the heart of UMIs ecosystem is the UMI token, a digital currency that serves as a secure and efficient method of payment within the platform. Customers can seamlessly navigate through a diverse range of products, from electronics to fashion, and experience a swift and decentralized payment process by utilizing UMI tokens. This not only ensures a frictionless shopping experience but also enhances security and transparency, as blockchain technology provides an immutable ledger for all transactions. Customers can seamlessly navigate through a diverse range of products."
                }
                special="special"
              />
              <Button
                variant="primary"
                onClick={handleClickOpen}
                style={{ color: "pink" }}
              >
                Connect
              </Button>
              <div className="w-[450px] flex justify-between items-center">
                <span className="flex items-center justify-between w-[230px]">
                  <Icons width="hundred" src={appstore} />
                  <Icons width="hundred" src={playstore} />
                </span>

                <Icons width="hundred" src={RobortLeft} />
              </div>
            </div>

            <div className="w-[200px] h-[500px] flex items-center justify-around flex-col">
              <img src={Line2} alt="Line2" className="h-[125px] mb-[-2px]" />

              <div className="!w-[90px] !h-[90px] flex items-center justify-center">
              <button onClick={() => navigate("/")}>
                  <Icons className="bg-white rounded-full w-[60px] h-[60px] flex items-center justify-center" width="50px" src={TwitterColored}/>
                  </button>
              </div>

              <div className="!w-[90px] !h-[90px] flex items-center justify-center scale-[1.2]">
                  <button onClick={() => navigate("/")}>
                  <Icons className="bg-white rounded-full w-[60px] h-[60px] flex items-center justify-center" width="50px" src={DiscordColored}/>
                  </button>
              </div>

              <div className="!w-[90px] !h-[90px] flex items-center justify-center">
              <button onClick={() => navigate("/")}>
                  <Icons className="bg-white rounded-full w-[60px] h-[60px] flex items-center justify-center" width="50px" src={TelegramColored}/>
                  </button>
              </div>

              <img
                src={Line2}
                alt="Line2"
                className="h-[125px] mt-[-2px] rotate-180"
              />
            </div>
          </div>
        </section>
      </div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Sign in
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Button style={{width:"100%"}} onClick={discordLogin} variant="contained">{isSignUp ? "Sign up with Twitter" :"Sign in with Twitter"} </Button>
          <Button style={{width:"100%", marginTop:"20px"}}  onClick={discordLogin} color="secondary"  variant="contained">{isSignUp ? "Sign up with Discord" :"Sign in with Discord"}</Button>
          <Button style={{width:"100%", marginTop:"20px", marginBottom:"20px"}} variant="contained">{isSignUp ? "Sign up with Telegram" :"Sign in with Discord"}</Button>
        </DialogContent>
      </BootstrapDialog>
    </React.StrictMode>
  );
};

export default AirDrop;
