import { Link } from 'react-router-dom';
import Icons from '../components/image layouts/icons';
import Logo from '../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className='flex  h-[30%] w-full '>
      <div className='w-[40%] flex-col gap-y-[20px] flex'>
        <h3 className='font-bold text-[22px]'>
          Farmart - Your Online Food and Grocery
        </h3>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolor
          corrupti error molestiae similique porro dolorum non facere
          consequuntur quia, iste debitis dignissimos illo fuga aliquid voluptas
          velit eligendi quibusdam.
        </p>

        <p>
          Hotline 24/7: <br />
          (+965) 7492-4277
        </p>

        <p>
          959 Homestead Street Eastlake NYC <br />
          Support@farmart.com Mon - Fri: 07AM - 06PM
        </p>
      </div>

      <div className='w-[60%]'>
        <div className='flex h-[70%]'>
          <span className='w-[23%] flex flex-col gap-y-[10px]'>
            <h3 className='font-bold text-[22px]'>Useful Links</h3>
            <Link>Terms of use</Link>
            <Link>Terms and conditions</Link>
            <Link>Refund policy</Link>
            <Link>FAQs</Link>
            <Link>404 page</Link>
          </span>
          <span className='w-[23%] flex flex-col gap-y-[10px]'>
            <h3 className='font-bold text-[22px]'>Help Center</h3>
            <Link>About us</Link>
            <Link>Affiliates</Link>
            <Link>Career</Link>
            <Link>Contact</Link>
          </span>
          <span className='w-[23%] flex flex-col gap-y-[10px]'>
            <h3 className='font-bold text-[22px]'>Business</h3>
            <Link>Our blog</Link>
            <Link>Cart</Link>
            <Link>My account</Link>
            <Link>Shop</Link>
          </span>
          <span className='w-[30%] flex flex-col gap-y-[10px]'>
            <h3 className='font-bold text-[22px]'>Newsletter </h3>
            <p>
              Register now to get updates on promotion and coupons. Do not worry
              we do not span
            </p>
          </span>
        </div>
        <div className='flex items-end justify-between'>
          <div className='w-[300px] h-[30px] flex items-center justify-between px-[4px] border-2 border-[#ee00f3] rounded-lg'>
            your email
          </div>
          <Icons width='hundred' src={Logo} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
