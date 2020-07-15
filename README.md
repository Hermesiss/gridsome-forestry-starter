# Portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/2b69ac6e-7606-4fcb-9ff6-a6ddc9de717f/deploy-status)](https://app.netlify.com/sites/hermesiss/deploys)

Simple [portfolio](https://trismegistus.tech/) website sources for [Gridsome](https://gridsome.org/)

Based on template by [@itsnwa](https://github.com/itsnwa)

## Development

- Install node.js and yarn
- Open terminal inside repo directory

```bash
# install Gridsome globally
yarn global add @gridsome/cli

# install dependencies
yarn

# Start local dev server
yarn develop

# Build to manually upload
yarn build
```

## Forestry (Content Management)

This project has been pre-configured to work with [Forestry](https://forestry.io/), just import your repository ✨  
Any changes you make will be commited back to the repo, and deployed if you're using Netlify.

[![Import to Forestry](https://assets.forestry.io/import-to-forestryK.svg)](https://app.forestry.io/quick-start?repo=Hermesiss/portfolio)

## Deploy with Netlify

Import your site in [Netlify](https://www.netlify.com/)

1. Create a new site in Netlify and import your repository.
2. Set the build command to: `gridsome build`
3. Set the publish directory to: `dist`

That's it, now your site gets deployed automatically on `git push` or when saving documents from Forestry.
