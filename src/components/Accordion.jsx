import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const handleTitleClick = (index) => {
    setCurrentIndex(index);
  };

  const renderedItems = items.map((i, id) => {
    const active = id === currentIndex ? 'active' : '';
    return (
      <React.Fragment key={i.title}>
        <div onClick={() => handleTitleClick(id)} className={`title ${active}`}>
          <i className='dropdown icon'></i> {i.title}
        </div>
        <div className={`content ${active}`}>
          <p>{i.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className='ui styled accordion'>{renderedItems}</div>;
};
export default Accordion;
