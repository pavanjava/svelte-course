import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Pavan',
		channel: 'JavaScript Ninja',
		languages: [
			{name: 'Javascript', score: '3.5/5', id:1},
			{name: 'Java', score: '3.5/5', id:2},
			{name: 'React', score: '3.5/5', id:3},
			{name: 'Angular', score: '2/5', id:4},
			{name: 'NodeJS', score: '3.5/5', id:5}
		]
	}
});

export default app;