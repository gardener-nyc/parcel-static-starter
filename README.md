# Commonry Lander

[commonry.com](https://www.commonry.com)

## Requirements

-   Node 8+
-   Yarn

## Local Development

1. Install Yarn dependencies

```
$ yarn install
```

2. Start the Parcel dev process. This will allow for multiple entry points.

```
$ yarn start
```

## Multiple Entrypoints

When creating multiple pages, append each entry point to the `Bundler()` constructor in `run-parcel.js`

```
const bundler = new Bundler([
	'src/index.html',
	'src/example.html',
	'src/example.html',
]);
```

## Deployments

Push code to `main`. Netlify is watching this branch and will deploy any code changes.
