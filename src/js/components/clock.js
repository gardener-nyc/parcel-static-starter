import {component} from 'picoapp';

export default component((node, context) => {
	node.innerHTML = new Date().getDate();
});