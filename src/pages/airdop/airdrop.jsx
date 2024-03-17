import { Helmet } from 'react-helmet';
import Icons from '../../components/image layouts/icons';
import Logo from '../../assets/images/logo.png';
import { Heading1, Paragraph } from '../../components/ui/texts';
import Buttons from '../../components/ui/buttons';

import Line2 from '../../assets/images/Line 2.png';
import TwitterColored from '../../assets/images/twittercolored.png';
import DiscordColored from '../../assets/images/discordcolored.png';
import TelegramColored from '../../assets/images/telegramcolored.png';

import appstore from '../../assets/images/appstore.png';
import playstore from '../../assets/images/playstore.png';
import RobortLeft from '../../assets/images/robort-left.png';
import Vector1 from '../../assets/images/Vector 1.png';

const AirDrop = () => {
  return (
    <>
      <Helmet>
        <title>Airdop</title>
      </Helmet>

      <div className='fill-window airdrop'>
        <div className='mx-[90px] mt-6'>
          <Icons width='hundred' src={Logo} />
        </div>

        <section>
          <div className='w-[650px] flex'>
            <div className='w-[450px] flex flex-col justify-between gap-y-[30px] items-start relative p-[20px]'>
              <img
                src={Vector1}
                alt='vector image'
                className='w-[500px] h-auto top-0 left-0 absolute'
              />
              <Heading1 text='Unicorn Mart Inc.' special='special' />
              <Paragraph
                type='one'
                text={
                  '(UMI) is a cutting-edge e-commerce platform revolutionizing online shopping with its innovative is integration of blockchain technology. At the heart of UMIs ecosystem is the UMI token, a digital currency that serves as a secure and efficient method of payment within the platform. Customers can seamlessly navigate through a diverse range of products, from electronics to fashion, and experience a swift and decentralized payment process by utilizing UMI tokens. This not only ensures a frictionless shopping experience but also enhances security and transparency, as blockchain technology provides an immutable ledger for all transactions. Customers can seamlessly navigate through a diverse range of products.'
                }
                special='special'
              />
              <Buttons type='full' name='Connect' />

              <div className='w-[450px] flex justify-between items-center'>
                <span className='flex items-center justify-between w-[230px]'>
                  <Icons width='hundred' src={appstore} />
                  <Icons width='hundred' src={playstore} />
                </span>

                <Icons width='hundred' src={RobortLeft} />
              </div>
            </div>

            <div className='w-[200px] h-[500px] flex items-center justify-around flex-col'>
              <img src={Line2} alt='Line2' className='h-[125px] mb-[-2px]' />

              <div className='!w-[90px] !h-[90px] flex items-center justify-center'>
                <div className='bg-white rounded-full w-[60px] h-[60px] flex items-center justify-center'>
                  <Icons width='50' src={TwitterColored} />
                </div>
              </div>

              <div className='!w-[90px] !h-[90px] flex items-center justify-center scale-[1.2]'>
                <div className='bg-white rounded-full w-[60px] h-[60px] flex items-center justify-center'>
                  <Icons width='50' src={DiscordColored} />
                </div>
              </div>

              <div className='!w-[90px] !h-[90px] flex items-center justify-center'>
                <div className='bg-white rounded-full w-[60px] h-[60px] flex items-center justify-center'>
                  <Icons width='50' src={TelegramColored} />
                </div>
              </div>

              <img
                src={Line2}
                alt='Line2'
                className='h-[125px] mt-[-2px] rotate-180'
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AirDrop;
