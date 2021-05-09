import React, {useState} from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';


import './toggle-button.component.scss';

export default () => {
    const [isDarkMode, setIsDarkMode] = useState(() => false);
    return (
      <DarkModeToggle
        onChange={setIsDarkMode}
        checked={isDarkMode}
        size={80}
      />
    );
  };
  



// const ToggleButton = ({ children, isGoogleSignIn,...otherProps }) => (
//   <button className={`${isGoogleSignIn? 'google-sign-in': ''} custom-button`} {...otherProps}>
//     {children}
//   </button>
// );

// export default ToggleButton;
