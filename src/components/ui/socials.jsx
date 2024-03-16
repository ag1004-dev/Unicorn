import Icons from '../image layouts/icons';
import Twitter from '../../assets/images/twitter.png';
import Telegram from '../../assets/images/telegram.png';
import Youtube from '../../assets/images/youtube.png';
import Discord from '../../assets/images/discord.png';
import appstore from '../../assets/images/appstore.png';
import playstore from '../../assets/images/playstore.png';
import Logo from '../../assets/images/logo.png';

const Socials = () => {
  return (
    <div className='flex items-center justify-between w-[600px] mt-[75px]'>
      <span className='flex items-center justify-between w-[250px]'>
        <Icons width='fifty' src={Twitter} />
        <Icons width='fifty' src={Telegram} />
        <Icons width='fifty' src={Youtube} />
        <Icons width='fifty' src={Discord} />
      </span>

      <span className='flex items-center justify-between w-[230px]'>
        <Icons width='hundred' src={appstore} />
        <Icons width='hundred' src={playstore} />
      </span>

      <span className='flex items-center justify-between w-[50px]'>
        <Icons width='fifty' src={Logo} />
      </span>
    </div>
  );
};

export default Socials;
