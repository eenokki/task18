import React from 'react';
import ThemeContext from './ThemeContext';


function HeaderButton() {
  return (
    <div>
      
      <button style={useContext(ThemeContext)}>Press me</button>
      
    </div>
  );
}

export default HeaderButton;
