import React from 'react';

const Accordion = ({ items }) => {
  const renderedItems = items.map((i) => {
    return (
      <React.Fragment key={i.title}>
        <div className='active title'>
          <i className='dropdown icon'></i> {i.title}
        </div>
        <div className='content active'>
          <p>{i.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className='ui styled accordion'>{renderedItems}</div>;
};
export default Accordion;
