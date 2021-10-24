import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Svelte',
		channel: 'JavaScript Ninja'
	}
});

export default app;