import React, { useState, useEffect, useRef } from 'react';
import '../style/dropdown.css';
const Dropdown = ({ options, label, selection, onSelectionChange }) => {
  const [visible, setVisible] = useState(false);
  const refForm = useRef();
  const renderedOptions = options.map((opt) => {
    return (
      <div key={opt.value} onClick={() => onSelectionChange(opt)} className='item'>
        {opt.label}
      </div>
    );
  });
  // close dropdown when click outsite it
  useEffect(() => {
    const onBodyEvent = (e) => {
      if (!refForm.current.contains(e.target)) {
        setVisible(false);
      }
    };
    document.body.addEventListener('click', onBodyEvent);
    return () => {
      document.body.removeEventListener('click', onBodyEvent);
    };
  }, []);

  return (
    <div id='dropdown'>
      <div ref={refForm} className='ui form   '>
        <div className='field'>
          <label htmlFor='' className='label'>
            {label}
          </label>
          {visible}
          <div
            onClick={() => setVisible(!visible)}
            className={`ui input-search selection dropdown ${visible && 'visible active'}`}
          >
            <i className='dropdown icon'></i>
            <div className='text'>{selection.label}</div>
            <div className={`menu ${visible && 'visible transition'}`}>{renderedOptions}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Text = ({ selection }) => {
  return (
    <h4 style={{ color: selection.value, boxShadow: `-3px 3px ${selection.value}` }}>
      {selection.label !== 'Select a color' ? `The text is ${selection.label}.` : 'The text is black'}
    </h4>
  );
};

export default Dropdown;
