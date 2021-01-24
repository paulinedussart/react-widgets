import React, { useState } from 'react';
// Components
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Route from './components/Route';
import Search from './components/Search';
import Translate from './components/Translate';
import Header from './components/Header';
import './style/style.css';

const items = [
  { title: 'What is React ? ', content: ' React is a front-end javascript framework' },
  { title: 'Why use React ? ', content: ' React is the famous JS library among engineers' },
  { title: 'How do you use React ? ', content: 'You use React by creating component' },
];

const options = [
  { label: 'Select a color', value: 'black' },
  { label: 'Red', value: '#eb4d4b' },
  { label: 'Yellow', value: '#feca57' },
  { label: 'Green', value: '#78e08f ' },
  { label: 'Blue', value: '#54a0ff' },
  { label: 'Grey', value: '#95afc0' },
];

function App() {
  const [selection, setSelection] = useState(options[0]);

  return (
    <div className='ui container'>
      <br />
      <Header />
      <Route path={'/translate'}>
        <Translate />
      </Route>

      <Route path={'/dropdown'}>
        <Dropdown
          selection={selection}
          onSelectionChange={setSelection}
          options={options.filter((i) => i !== selection)}
          label='Select a color'
        />
      </Route>

      <Route path={'/'}>
        <Accordion items={items} />
      </Route>

      <Route path={'/list'}>
        <Search />
      </Route>
    </div>
  );
}

export default App;
// https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=computer
