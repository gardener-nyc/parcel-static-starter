import '../styles/main.scss';
import {picoapp} from 'picoapp';
import clock from './components/clock';
import operator from 'operator';

//
// === App ===
//

const app = picoapp({
	clock,
});

app.mount();

//
// === Router ===
//

const router = operator('#router');

router.on('before', state => Promise.all([
	new Promise(resolve => {
		document.body.classList.add('loading');
		setTimeout(resolve, 600);
	}),
]));

router.on('after', ({previousDocument, location}) => {
	document.title = previousDocument.title;
	window.history.pushState({}, '', location);

	app.unmount(),
	app.mount();

	setTimeout(function() {
		document.body.classList.remove('loading');
	}, 1);
});