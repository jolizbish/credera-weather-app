import React from 'react';
import './Toggle.css';

const Toggle = ({ handleToggle }) => {
        return (
          <div className="toggle">
              <label className="switch">
                  <input type="checkbox" onClick={handleToggle}/>
                  <span className="slider round">C° F°</span>
              </label>
          </div>
        );
}

export default Toggle;