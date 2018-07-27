# Introduction

Gatui - Developer Portal is only a static site generator with a connector system
that'll allow to gather data with static file or over the network. It was created
to promote APIs from Oui.sncf.

Right now, it's only a (SPA) Single-Page-Application, it'll send the whole application
as the user request a page. It's not SEO-friendly for now. 

In futur we would like to make it SEO-friendly with Nuxt. A user request a page for
the first time, we send him a pre-rendered static HTML for a good loading performance.
Once te page is loaded, it'll turn as a full SPA for the client and go back to CCR
(Client-side-rendering).

## How it's working ?

It's a SPA created by [VueJS](http://vuejs.org), [VueX]() and [webpack]().

Before the build we configure the differents config file, with the theme and select
the connector that we want. The build'll generate the pages for each route defined
by [Vue-Router]() with the configuration files we modified before and set up the
project to work with the Connector we have choosen.

Once the build is done we put this build inside a Nginx Container to be served as
static files.

## Features

- Multiple APIs pages.
- Generate with static documentation.
- Generation with dynamic documentation.
- Custom theme file.
- Hightly configurable.
- Multi-language support (In progress).
- Deploy to Heroku.

## Todo

- Pass over Nuxt for SEO.
- Protected content support.
- Comment support.
