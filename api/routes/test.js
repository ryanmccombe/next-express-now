const app = require('../app');

app.get('*', (req, res) => {
	res.json({ message: 'Hello from Express - Test Endpoint v2' })
});

module.exports = app;
