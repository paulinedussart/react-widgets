import React, { useState, useEffect } from 'react';

const options = [
  { label: 'green', value: 'green' },
  { label: 'pink', value: 'pink' },
  { label: 'blue', value: 'blue' },
  { label: 'red', value: 'red' },
];

const Test = () => {
  const [color, setColor] = useState('');

  const [form, setForm] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    setForm(Object.fromEntries(formData));
  };

  const onColorClick = (event) => {
    console.log(event.target.value);
    setColor(event.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} id='form-test' action=''>
        <label htmlFor='nom'>Nom</label>
        <input id='nom' type='text' name='nom' />
        <label htmlFor='prenom'>prenom</label>
        <input id='prenom' type='text' name='prenom' />
        <label htmlFor='city'>city</label>
        <input id='city' type='text' name='city' />
        <button type='submit'>ENTER</button>
      </form>
      <select onChange={onColorClick} name='color' id='color'>
        {options.map(({ label, value }) => (
          <Option key={label} label={label} value={value} />
        ))}
      </select>
      {color}
      hELLO
      {JSON.stringify(form)}
    </div>
  );
};

const Option = ({ label, value }) => {
  return <option value={value}>{label}</option>;
};

export default Test;
