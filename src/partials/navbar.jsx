import { Link, useNavigate } from 'react-router-dom';
import Icons from '../components/image layouts/icons';
import Buttons from '../components/ui/buttons';
import Daytime from '../assets/images/daytime.png';

import Logo from '../assets/images/logo.png';
import FadeMenu from './DropDownMenu';
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

const Navbar = () => {
  const { connection } = useConnection();
  const { publicKey, connected } = useWallet();
  const navigate = useNavigate()

  return (
    <header className='flex items-center justify-between'>
      <div className='flex items-center justify-between'>
        <Icons width='hundred' src={Logo} />

        <div className='ml-[50px]'>
          <Link to=''>Art</Link>
          <Link to=''>Photographic</Link>
          <Link to=''>CGI</Link>
          <Link to=''>Gaming</Link>
          <Link to=''>Utility</Link>
          <Link to=''>Virtual</Link>
        </div>
      </div>

      <div className='min-w-[250px] flex items-center justify-between'>

        <WalletMultiButton className="wallet-button" />

        <FadeMenu />
      </div>
    </header>
  );
};

export default Navbar;
