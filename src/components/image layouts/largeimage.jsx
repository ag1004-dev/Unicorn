const LargeImage = ({ type, src }) => {
  return <img src={src} alt='large image' className={`${type}`} />;
};

export default LargeImage;
