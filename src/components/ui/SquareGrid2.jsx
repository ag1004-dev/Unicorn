import { Paragraph, Heading3 } from './texts';
import Squareblank from '../../assets/images/squareblank.png';
import Verified from '../../assets/images/verified.png';

const SquareGrid2 = ({ num, data }) => {
  return (
    <div className='w-full flex flex-col flex-wrap justify-between gap-y-4 my-6'>
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

export default SquareGrid2;
