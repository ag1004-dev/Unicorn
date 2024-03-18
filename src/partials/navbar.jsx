import { Link } from 'react-router-dom';
import Icons from '../components/image layouts/icons';
import Buttons from '../components/ui/buttons';
import Daytime from '../assets/images/daytime.png';

import Logo from '../assets/images/logo.png';
import FadeMenu from './DropDownMenu';

const Navbar = () => {
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

        <Buttons type='outlined' name='Connect' />

        <FadeMenu />
      </div>
    </header>
  );
};

export default Navbar;
