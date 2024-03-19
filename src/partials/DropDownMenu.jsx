import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import Line1 from '../assets/images/line1.png';
import Line2 from '../assets/images/line2.png';
import Line3 from '../assets/images/line3.png';
import { useNavigate } from 'react-router-dom';
export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const navigate = useNavigate(); 
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickOpen = () => {
    navigate('/airdrop');
    setAnchorEl(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <span>
          <img src={Line1} alt='line' className='w-[30px]' />
          <img src={Line2} alt='line' className='w-[30px]' />
          <img src={Line3} alt='line' className='w-[30px]' />
        </span>
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>MarketPlace</MenuItem>
        <MenuItem onClick={handleClickOpen}>IMU Point Earn System</MenuItem>
      </Menu>
    </div>
  );
}