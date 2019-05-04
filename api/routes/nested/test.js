const app = require('../../app');

app.get('*', (req, res) => {
	res.json({ message: 'Hello from Express - Nested Test Endpoint' })
});

module.exports = app;
