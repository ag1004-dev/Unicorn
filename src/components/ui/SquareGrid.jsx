import { Paragraph, Heading3 } from './texts';
import Squareblank from '../../assets/images/squareblank.png';
import Dp from '../../assets/images/dp.png';
import Verified from '../../assets/images/verified.png';

const SquareGrid = ({ num, data }) => {
  return (
    <div className='w-full flex flex-wrap justify-between gap-y-4 my-6'>
      {Array(num)
        .fill(0)
        .map((_, i) => (
          <div key={i} className='w-[200px]'>
            <img
              src={Squareblank}
              alt='circle blank'
              className='mb-[10px] mx-auto'
            />

            <div className='flex'>
              <img
                src={Dp}
                alt='display picture'
                className='w-[50px] h-[50px] rounded-full  mr-[10px]'
              />

              <span>
                <span className='flex mb-[5px] w-[180px]'>
                  <Heading3 text={data.heading3} />

                  <img
                    src={Verified}
                    alt='verified'
                    className='w-[12px] h-[12px]'
                  />
                </span>

                <Paragraph type='three' text={data.paragraph} />
              </span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SquareGrid;
