/**
 *
 * Asynchronously loads the component for Thing
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
