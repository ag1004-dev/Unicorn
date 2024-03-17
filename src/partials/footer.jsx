import { Link } from 'react-router-dom';
import Icons from '../components/image layouts/icons';
import Logo from '../assets/images/logo.png';
import Buttons from '../components/ui/buttons';

const Footer = () => {
  return (
    <footer className='flex w-full h-[350px]'>
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
          Support@farmart.com <br />
          Mon - Fri: 07AM - 06PM
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

        <div className='flex items-end justify-between mt-[30px]'>
          <form className='w-[300px] h-[30px] flex items-center justify-between px-[4px] border-2 border-[#ee00f3] rounded-lg'>
            <input
              type='text'
              placeholder='your email'
              className='bg-transparent text-white w-[175px]'
            />

            <button
              type='submit'
              className='text-[16px] border-2 border-[#ee00f3] rounded-lg border-y-0 border-r-0 border-collapse h-[30px]'
            >
              Subscribe
            </button>
          </form>

          <Icons width='hundred' src={Logo} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
