import React, { Fragment } from 'react';

const NotFound = () => {
  return (
    <Fragment>
      <h1 className='x-large text-primary' style={{ textAlign: 'center' }}>
        <i
          className='fas fa-exclamation-triangle'
          style={{ color: 'orange' }}
        ></i>{' '}
        Page Not Found
        <p className='large' style={{ fontSize: '2rem', paddingTop: '2rem' }}>
          Sorry, this page does not exist
        </p>
      </h1>
    </Fragment>
  );
};

export default NotFound;
