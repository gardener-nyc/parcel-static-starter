import '../styles/main.scss';
import operator from 'operator';

const app = operator('#root');

app.on('after', newState => {
	console.log(newState.location);
});