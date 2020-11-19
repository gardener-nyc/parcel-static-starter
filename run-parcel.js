const Bundler = require('parcel-bundler');
const express = require('express');

const bundler = new Bundler(['src/index.html', 'src/*.html']);

const app = express();

app.use(express.static('public'));

app.get('/', (req, res, next) => {
	req.url = '/index.html';
	app._router.handle(req, res, next);
});

app.use(bundler.middleware());

const port = Number(process.env.PORT || 1234);
app.listen(port);
console.log(`listening at http://localhost:${port}`);
