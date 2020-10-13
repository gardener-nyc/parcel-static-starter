# Parcel Static Starter

This is a Parcel static bundler starter for Gardener projects. It includes Eslint, (optional) Magic-Tricks

## Requirements
- Node 8+
- Yarn

## Local Development

1. Install Yarn dependencies
```
$ yarn install
```
2. Start the Parcel dev process. This will allow for multiple entry points.
```
$ yarn start
```

## Deployments
Push code to `main`. Netlify is watching this branch and will deploy any code changes.

## Environment Variables
All environment variables found in `.env.example` should be included in the Netlify admin panel as environment variables.
