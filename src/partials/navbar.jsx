import { Link } from 'react-router-dom';
import Icons from '../components/image layouts/icons';
import Buttons from '../components/ui/buttons';
import Daytime from '../assets/images/daytime.png';
import Line1 from '../assets/images/line1.png';
import Line2 from '../assets/images/line2.png';
import Line3 from '../assets/images/line3.png';
import Logo from '../assets/images/logo.png';

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
        <span className='flex items-center'>
          <img src={Daytime} alt='' className='w-[20px] h-[20px] mr-[10px]' />
          Day
        </span>

        <Buttons type='outlined' name='Connect' />
        <span>
          <img src={Line1} alt='line' className='w-[30px]' />
          <img src={Line2} alt='line' className='w-[30px]' />
          <img src={Line3} alt='line' className='w-[30px]' />
        </span>
      </div>
    </header>
  );
};

export default Navbar;
