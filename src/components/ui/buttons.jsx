import { useNavigate } from 'react-router-dom';

const Buttons = ({ type, name }) => {
  const navigate = useNavigate();

  return (
    <button className={`${type}`}>
      {name}
    </button>
  );
};

export default Buttons;
