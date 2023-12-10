import React from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = (props) => {
  const { setDarkMode } = props;

  const toggleMode = () => {
    setDarkMode((prev) => !prev);
    toast.info('Mode toggled successfully!', {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

  return (
    <div className='header'>
      <h1>NOTENEBULA</h1>
      <button className='toggle' onClick={toggleMode}>Toggle mode</button>
    </div>
  )
}

export default Header;
