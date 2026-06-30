import * as React from 'react'
import { addDecorator } from '@storybook/react'
import { IntlProvider } from 'react-intl'
import '../src/local.scss'

export const parameters = {
  docs: {
    direction: 'rtl',
  },
};

addDecorator(storyFn => <IntlProvider locale='en'>{ storyFn() }</IntlProvider>)

