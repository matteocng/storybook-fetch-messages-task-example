// @flow
import { addDecorator, configure } from '@storybook/react';
import { setIntlConfig, withIntl } from 'storybook-addon-intl';

// Load the locale data for all your defined locales.
import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import itLocaleData from 'react-intl/locale-data/it';

addLocaleData(enLocaleData);
addLocaleData(itLocaleData);

const locales = ['en-GB', 'it-IT'];

// Import your messages.
const messages = {}
locales.map((locale) => {
  // $FlowFixMe
  messages[locale] = require(`../static/${locale}.json`);
})

const getMessages = (locale) => messages[locale];

// Set intl configuration.
setIntlConfig({
    locales,
    defaultLocale: 'en-GB',
    getMessages
});

// Register decorator.
addDecorator(withIntl);

// Run storybook.
configure(() => require('../src/stories'), module);
