import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const waitInput = setTimeout(() => {
      const doTranslation = () => {
        axios
          .post(
            'https://translation.googleapis.com/language/translate/v2',
            {},
            {
              params: {
                q: text,
                target: language.value,
                source: 'en',
                key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
              },
            }
          )
          .then((response) => setTranslated(response.data.data.translations[0].translatedText))
          .catch((err) => setError(err.message));
      };
      doTranslation();
    }, 600);
    return () => {
      clearTimeout(waitInput);
    };
  }, [language.value, text]);

  return (
    <div>
      <br />
      <br />
      <Traduction translated={translated} error={error} language={language} />
    </div>
  );
};

const Traduction = ({ translated, error, language }) => {
  return (
    <form className='ui form'>
      <h3>
        <label className='label'>Translation from English to {language.label}</label>
      </h3>
      <textarea
        style={{
          fontSize: '24px',
        }}
        defaultValue={translated}
        rows='3'
      ></textarea>
      {error && (
        <div className='ui red message'>
          {' '}
          Sorry cannot proced to the translation due to error input, try something else please !{' '}
        </div>
      )}
    </form>
  );
};

export default Convert;
