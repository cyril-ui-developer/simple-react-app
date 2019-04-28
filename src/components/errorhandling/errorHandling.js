import React from 'react';
import PropTypes from 'prop-types';

import Button from '../button';

const ErrorHandling = ({ message, onRetry }) => (
  <section>
    <header>
      <p>
        <strong>
Oops! Something went wrong.
          <br />
          { message }
        </strong>
        <br />
        <br />
      Please click Retry button or
        <br />
      call customer support: (000)-000-0000
      </p>
    </header>
    <Button
      className="btn"
      value="RETRY"
      name="retry"
      onHandleClick={onRetry}
    />
  </section>
);
ErrorHandling.propTypes = {
  onRetry: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

ErrorHandling.defaultProps = {
};

export default ErrorHandling;
