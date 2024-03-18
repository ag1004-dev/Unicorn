import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Navbar from '../../partials/navbar';
import {
  Heading1,
  Heading2,
  Heading3,
  Paragraph,
} from '../../components/ui/texts';
import Buttons from '../../components/ui/buttons';

import Divider from '../../assets/images/divider.png';
import Screenshot from '../../assets/images/screenshot.png';

import LargeImage from '../../components/image layouts/largeimage';
import Socials from '../../components/ui/socials';
import Horse from '../../assets/images/horse.png';
import RobortLeft from '../../assets/images/robort-left.png';
import Logo from '../../assets/images/logo.png';
import Lightsaber from '../../assets/images/lightsaber.png';

import {
  description,
  userPosts,
  businessDetails,
  cartegoryDetails,
} from '../../data/data';
import Icons from '../../components/image layouts/icons';
import CycleGrid from '../../components/ui/CycleGrid';
import SquareGrid from '../../components/ui/SquareGrid';

import Chart from '../../assets/images/chart.png';
import Line_C from '../../assets/images/line_cartegoryc.png';
import Line_A from '../../assets/images/line_cartegorya.png';
import TextA from '../../assets/images/text_cartegorya.png';
import TextB from '../../assets/images/text_cartegoryb.png';
import TextC from '../../assets/images/text_cartegoryc.png';

import CircleBlank from '../../assets/images/circleblank.png';
import CirclePurple from '../../assets/images/circlepurple.png';
import SquareGrid2 from '../../components/ui/SquareGrid2';
import DropDown from '../../components/ui/dropdown';
import Footer from '../../partials/footer';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <div className='fill-window'>
        <section>
          <Navbar />
        </section>

        <section className='h-screen w-full flex hero'>
          <div className='w-[50%] flex flex-col justify-around'>
            <span className='flex flex-col items-start justify-between h-[60%]'>
              <Heading1 text='Next Generation' className='mt-[30px]' />

              <ul className='list-disc'>
                <li>
                  <Paragraph type='one' text='Unicorn mart inc' />
                </li>

                <li>
                  <Paragraph
                    type='one'
                    text='(UMI) is a comprehensive E-commerce platform, catering to your every need with an extensive range of products and services'
                  />
                </li>
              </ul>

              <Buttons type='full' name='Action Button' />
            </span>
            <div className='flex justify-between w-[70%]'>
              <span className='flex justify-around items-center flex-col'>
                <h2 className='text-[26px] leading-[25px] font-[500]'>300M+</h2>

                <p className='text-[12px] leading-4 text-[#9f9f9f]'>
                  Labelled addresses
                </p>
              </span>

              <img src={Divider} alt='divider' className='h-[50px]' />

              <span className='flex justify-around items-center flex-col'>
                <h2 className='text-[26px] leading-[25px] font-[500]'>300M+</h2>

                <p className='text-[12px] leading-4 text-[#9f9f9f]'>
                  Labelled addresses
                </p>
              </span>
              <img src={Divider} alt='divider' className='h-[50px]' />
              <span className='flex justify-around items-center flex-col'>
                <h2 className='text-[26px] leading-[25px] font-[500]'>300M+</h2>

                <p className='text-[12px] leading-4 text-[#9f9f9f]'>
                  Labelled addresses
                </p>
              </span>
            </div>
          </div>

          <div className='flex flex-col items-end w-1/2'>
            <LargeImage type='rectangle' src={Screenshot} />

            <div>
              <Socials />
            </div>
          </div>
        </section>

        <section className='h-screen w-full flex'>
          <div className='w-1/2 relative flex items-center justify-center'>
            <span className='absolute top-2 left-5'>
              <Buttons type='outlined' name='About us' />
            </span>
            <LargeImage type='square' src={Horse} />
          </div>

          <div className='w-1/2 relative'>
            <div className='h-[80%] w-[85%] my-auto flex flex-col justify-between items-start'>
              <Heading2 text='Unicorn Mart Inc.' />
              <Paragraph type='two' text={description} />
              <Buttons type='full' name='More About Us' />

              <span className='absolute bottom-2 right-5'>
                <Icons width='hundred' src={RobortLeft} />
              </span>
            </div>
          </div>
        </section>

        <section className='h-screen w-full'>
          <div>
            <Heading2 text='Our Speciality' />
            <img
              src={Lightsaber}
              alt='jedi'
              className='w-[400px] h-auto my-6'
            />
          </div>

          <CycleGrid num={10} data={userPosts} />

          <span className='ml-[50px] my-6'>
            <Buttons type='full' name='More...' />
          </span>
        </section>

        <section className='h-screen w-full relative'>
          <span className='absolute top-[100px] left-[105px]'>
            <Icons width='fifty' src={RobortLeft} />
          </span>

          <span className='absolute top-[130px] left-[50px]'>
            <Icons width='fifty' src={Logo} />
          </span>

          <div className='w-full flex flex-row-reverse'>
            <span>
              <Heading2 text='Popular Products' />
              <img
                src={Lightsaber}
                alt='jedi'
                className='w-[435px] h-auto my-6'
              />
            </span>
          </div>

          <SquareGrid num={10} data={businessDetails} />

          <span className='ml-[90%] my-6'>
            <Buttons type='full' name='View All' />
          </span>
        </section>

        <section className='h-screen w-full relative'>
          <span className='absolute top-[100px] left-[88%]'>
            <Icons width='fifty' src={RobortLeft} />
          </span>

          <span className='absolute top-[130px] left-[92%]'>
            <Icons width='fifty' src={Logo} />
          </span>

          <div className='w-full flex'>
            <span>
              <Heading2 text='Popular Products' />
              <img
                src={Lightsaber}
                alt='jedi'
                className='w-[435px] h-auto my-6'
              />
            </span>
          </div>

          <SquareGrid num={10} data={cartegoryDetails} />
        </section>

        <section className='min-h-[110vh] w-full flex relative'>
          <div className='w-1/2 relative'>
            <span className='absolute top-[-30px] scale-75'>
              <Heading2 text='TOKENOMICS' />
              <img
                src={Lightsaber}
                alt='jedi'
                className='w-[435px] h-auto my-6'
              />
            </span>

            <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 !w-[400px] !h-[400px]'>
              <LargeImage type='square' src={Chart} />
            </span>

            <span>
              <img
                src={Line_C}
                alt='line'
                className='w-[200px] absolute top-[510px] right-[34px]'
              />
              <img
                src={TextC}
                alt='text C'
                className='w-[100px] absolute top-[530px] right-[54px]'
              />

              <img
                src={Line_A}
                alt='line'
                className='w-[200px] absolute top-[225px] right-[-98px]'
              />
              <img
                src={TextB}
                alt='text B'
                className='w-[100px] absolute top-[180px] right-[-60px]'
              />

              <img
                src={Line_A}
                alt='line'
                className='w-[200px] absolute top-[225px] left-[-98px]'
              />
              <img
                src={TextA}
                alt='text A'
                className='w-[100px] absolute top-[185px] left-[-58px]'
              />
            </span>
          </div>

          <div className='w-1/2 relative flex items-center justify-center'>
            <span className='absolute top-2 right-5'>
              <Icons width='fifty' src={RobortLeft} />
            </span>
            <LargeImage type='square' src={Horse} />
          </div>

          <span className='absolute left-[17.5%] bottom-0 w-[330px] flex items-center justify-between'>
            <Buttons type='full' name='Smart Contract' />
            <Buttons type='outlined' name='Whitepaper' />
          </span>
        </section>

        <section className='h-screen w-full flex flex-col items-center justify-between'>
          <div>
            <Heading2 text='Our Roadmap' />
            <img
              src={Lightsaber}
              alt='jedi'
              className='w-[400px] h-auto my-6'
            />
          </div>

          <div className='w-[80%] text-center specialp'>
            <Paragraph type='two' text={description} />
          </div>

          <div className='flex items-center justify-between gap-x-6'>
            <Icons width='fifty' src={CirclePurple} />

            <Icons width='fifty' src={CircleBlank} />
            <Icons width='fifty' src={CircleBlank} />
            <Icons width='fifty' src={CircleBlank} />
            <Icons width='fifty' src={CircleBlank} />
            <Icons width='fifty' src={CircleBlank} />
          </div>
        </section>

        <section className='h-screen w-full flex relative'>
          <div className='w-1/2'>
            <div>
              <Heading2 text='Unimart Ecosystem' />
              <img
                src={Lightsaber}
                alt='jedi'
                className='w-[400px] h-auto my-6'
              />
            </div>

            <div className='w-full specialp bordered'>
              <Paragraph type='two' text={description} />
            </div>
          </div>

          <div className='w-1/2 pl-[150px] pt-[35px]'>
            <SquareGrid2 num={2} data={businessDetails} />
          </div>

          <span className='absolute bottom-0 right-[30px]'>
            <Icons width='fifty' src={Logo} />
          </span>
        </section>

        <section className='h-screen w-full flex items-start'>
          <div className='w-[40%] scale-110'>
            <div className='w-[400px] flex gap-y-[40px] flex-col'>
              <Heading3 text='Welcome to SOLSEA' />

              <span className='flex flex-col gap-y-[15px]'>
                <Heading3 text='Getting Started' />
                <Link>
                  <Paragraph text='How to spot a fake NFT' />
                </Link>
                <Link>
                  <Paragraph text='Privacy Policy' />
                </Link>
                <Link>
                  <Paragraph text='Terms and conditions' />
                </Link>
                <Heading3 text='FAQ' />
                <Link>
                  <Paragraph text='General' />
                </Link>
                <Link>
                  <Paragraph text='Features' />
                </Link>
                <Link>
                  <Paragraph text='Email Varification' />
                </Link>
                <Link>
                  <Paragraph text='NFTs: None Fungible Tokens' />
                </Link>
                <Link>
                  <Paragraph text='Unlockable content' />
                </Link>
                <Link>
                  <Paragraph text='Collections: create and edit' />
                </Link>
                <Link>
                  <Paragraph text='Collections Varification' />
                </Link>
                <Link>
                  <Paragraph text='Pre-Market' />
                </Link>
                <Link>
                  <Paragraph
                    text='Creator Economics (Project Tokens)'
                  />
                </Link>
                <Link>
                  <Paragraph text='Creator Dashboard'/>
                </Link>
              </span>
            </div>
          </div>

          <div className='w-[60%] scale-110'>
            <div>
              <Heading2 text='FAQ' />
              <img
                src={Lightsaber}
                alt='jedi'
                className='w-[400px] h-auto my-6'
              />
            </div>

            <Paragraph
              type='two'
              text='FAQs are continually updated. If you have a question that isnt listed here, write to us on our official discord channel: https:discord.gg/DXYtfjyAPE'
            />

            <div className='my-[30px]'>
              <DropDown num={14} data='General' />
            </div>
          </div>
        </section>

        <section className='footer__section'>
          <Footer />
        </section>
      </div>
    </>
  );
};

export default Home;
