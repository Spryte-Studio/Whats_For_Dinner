import React from 'react';
import Fridge from './fridgePantry/Fridge.jsx';
import Pantry from './fridgePantry/Pantry.jsx'

var Storage = () => {
  return (
    <div id='Storage'>
      <Fridge />
      <Pantry />
    </div>
  );
};

export default Storage;