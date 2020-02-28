/**
 *
 * DemoContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectDemoContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function DemoContainer() {
  useInjectReducer({ key: 'demoContainer', reducer });
  useInjectSaga({ key: 'demoContainer', saga });

  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

DemoContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  demoContainer: makeSelectDemoContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(DemoContainer);
