// @flow
import { addDecorator, configure } from '@storybook/react';
import { setIntlConfig, withIntl } from 'storybook-addon-intl';
import { addLocaleData } from 'react-intl';

// Load the locale data for all your supported locales.
import enLocaleData from 'react-intl/locale-data/en';
import itLocaleData from 'react-intl/locale-data/it';

addLocaleData(enLocaleData);
addLocaleData(itLocaleData);

// Set your supported locales below.
const locales = ['en-GB', 'it-IT'];

// Import your messages.
const messages = {}
locales.map((locale) => {
  // $FlowFixMe
  messages[locale] = require(`../static/${locale}.json`);
})

const getMessages = (locale) => messages[locale];

// Set `storybook-addon-intl` configuration (it will handle `react-intl`).
setIntlConfig({
    locales,
    defaultLocale: 'en-GB',
    getMessages
});

// Register `storybook-addon-intl` decorator.
addDecorator(withIntl);

// Run storybook.
configure(() => require('../src/stories'), module);
