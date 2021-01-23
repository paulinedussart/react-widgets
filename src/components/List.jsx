import React from 'react';
import '../style/list.css';
const List = ({ results }) => {
  return results.map((result) => {
    return (
      <div key={result.pageid} className='ui celled list'>
        <div className='item'>
          <div className='content'>
            <div className='header'>{result.title}</div>
            <span dangerouslySetInnerHTML={{ __html: result.snippet }} className='description'></span>
          </div>
          <div className=''>
            <a href={`https://en.wikipedia.org?curid=${result.pageid}`} target='_blank' className='ui button'>
              More
            </a>
          </div>
        </div>
      </div>
    );
  });
};
export default List;
