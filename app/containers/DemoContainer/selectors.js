import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the demoContainer state domain
 */

const selectDemoContainerDomain = state => state.demoContainer || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by DemoContainer
 */

const makeSelectDemoContainer = () =>
  createSelector(
    selectDemoContainerDomain,
    substate => substate,
  );

export default makeSelectDemoContainer;
export { selectDemoContainerDomain };
