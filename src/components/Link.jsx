import React from 'react';

const Link = ({ children, href, className }) => {
  const onUserClick = (event) => {
    event.preventDefault();
    window.history.pushState({}, '', href);

    // allow to create a event that the ROUTE component will detect
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onUserClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
