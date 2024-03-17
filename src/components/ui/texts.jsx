export const Heading1 = ({ text, special }) => {
  return (
    <h1 className={`text-[65px] leading-[50px] text-[#9f9f9f] ${special}`}>
      {text}
    </h1>
  );
};

export const Heading2 = ({ text, special }) => {
  return (
    <h2 className={`text-[60px] leading-[50px] text-[#9f9f9f] ${special}`}>
      {text}
    </h2>
  );
};

export const Heading3 = ({ text }) => {
  return <h3 className='text-[12px] leading-[10px] font-bold'>{text}</h3>;
};

export const Paragraph = ({ type, text, special }) => {
  return <p className={`${type} ${special}`}>{text}</p>;
};
