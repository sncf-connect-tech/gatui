# Configuration

This portal is hightly customizable, even if you don't wish to check the source
code.

Without configuration it's configured with sample configuration file.

There are multiples configurations files:
- /front/src/config/theme.json
- /front/src/config/wording.json
- /front/src/config/_configApp.var.scss
- /front/src/config/connectors/index.js

Configurations files are in `/front/src/config/` or in a subfolder of this
folder

## theme.json

Theme will define the global behavior of your portal.

- **locale** (string): define the language you want in your wording.
- **debug** (bool): for development purpose.
- **github** (string - link): github link for your entreprise/association.
- **showSearch** (bool): Enable search or disable it.
- **showFeedback** (bool): Enable the feedback button.
- **showLogo** (bool): Enable the logo.
- **position** (object): Define a positon that you want for the list of apis.

## wording.json

Wording will define the differents wording depending of the language you want.
It'll always start with the country code.

- **appName** (string): Title for the app name (inside the tab bar you can see this).
- **pathGlobal** (string): The base adress of your api gateway.
- **footerLegals** (string): The footer legals at the bottom.
- **promo** (object): The wording for the promotion of your portal at the first page.
- **btnGetStarted** (string): The text of the button get started at the first page.

## _configAp.var.scss

Here is the theme for the application, we got several colors to change if you want.
Feel free to try it when you are in development mode.

## connectors/index.js

This file will determine which Connctor you want to use with the portal.
Read connectors.md to see what is a connector.