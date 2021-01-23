import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const languages = [
  { label: 'Afrikaans', value: 'af' },
  { label: 'Arabic', value: 'ar' },
  { label: 'Japonais', value: 'ja' },
  { label: 'Danois', value: 'da' },
  { label: 'Hindi', value: 'in' },
];
const Translate = () => {
  const [language, setLanguage] = useState(languages[0]);
  const [sentence, setSentence] = useState('');
  return (
    <div>
      <h1>Translation</h1>
      <form className='ui form'>
        <div className='field'>
          <label htmlFor='sentence' className='label'>
            Enter Text
          </label>
          <input
            value={sentence}
            onChange={(e) => setSentence(e.target.value)}
            type='text'
            id='sentence'
            className='input-search'
          />
        </div>
      </form>
      <Dropdown
        selection={language}
        onSelectionChange={setLanguage}
        options={languages.filter((i) => i !== language)}
        label='Select a language'
      />
      <Convert language={language} text={sentence} />
    </div>
  );
};
export default Translate;
