# Storybook: fetch `react-intl` messages from `API`

[![Greenkeeper badge](https://badges.greenkeeper.io/matteocng/storybook-fetch-messages-task-example.svg)](https://greenkeeper.io/)

This example `React` project shows how to fetch `i18n` messages - to be used in `storybook` with [`storybook-addon-intl`](https://github.com/truffls/storybook-addon-intl) or just plain [`react-intl`](https://github.com/yahoo/react-intl) - from a `json` `REST API`.

## How to run this

Run: `npm i && npm run storybook`, then select the *Button > with FormattedMessage* story and use the *LOCALES* bar to switch the active locale; the text of the button should be correctly translated.

This example setup also works perfectly when building `storybook` with `npm run build-storybook`: after building you can test it all works correctly by running `npm run serve-storybook`.

## Description

This app was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app), you can find the most recent version of the [Create React App](https://github.com/facebookincubator/create-react-app) guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md)) and the following packages were integrated:

-   [storybook](https://github.com/storybooks/storybook) - Interactive development & testing environment for React, React-Native, Vue UI components. Installed in one minute using the official [`CLI tool`](https://github.com/storybooks/storybook/tree/master/lib/cli).
-   [storybook-addon-intl](https://github.com/truffls/storybook-addon-intl) - Addon to provide a locale switcher and react-intl for storybook.
-   [react-intl](https://github.com/yahoo/react-intl) - Internationalize React apps. This library provides React components and an API to format dates, numbers, and strings, including pluralization and handling translations. This one is installed automatically if you use `storybook-addon-intl`.

## Configuring the environment and fetching the messages

-   Look up `./scripts/fetch-messages.js` to see how `isomorphic-fetch` is used to fetch the `json` of the messages. See the comments there showing how to quickly replace/remove the sample data and insert your real `API` url. For simplicity's sake, we assume you can call an `API` endpoint that returns messages for all locales at once.

-   Look up `.storybook/config.js` too see how `storybook-addon-intl` and the locale data is configured, the comments there show you where to set your supported locales and load the required localisation data.

## Fetching the messages before storybook is run

This is how we accomplish it in this example:

-   the user runs: `npm run storybook`
-   `npm` runs the task: `prestorybook`
-   the `prestorybook` tasks runs the task: `fetch-messages`
-   the `fetch-messages` task fetches the messages from `API` and saves them to the `static` folder.
-   the `storybook` task is run.
-   `storybook` loads the configuration files: `.storybook/addons.js` and `.storybook/config.js`.
-   `storybook` starts its development server ... all done.
