/*
 * Thing Messages
 *
 * This contains all the text for the Thing component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Thing';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Thing component!',
  },
});
