import Arrow from '../../assets/images/arrow.png';

const DropDown = ({ num, data }) => {
  return (
    <div className='w-[650px] flex gap-x-[50px] gap-y-[25px] justify-between flex-wrap'>
      {Array(num)
        .fill(0)
        .map((_, i) => (
          <div
            className='w-[300px] h-[30px] flex items-center justify-between px-[4px] border-2 border-[#ee00f3] rounded-lg'
            key={i}
          >
            {data}
            <img src={Arrow} alt='Dropdown Arrow' className='w-[8px] h-[8px]' />
          </div>
        ))}
    </div>
  );
};

export default DropDown;
