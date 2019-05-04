const app = require('../app');

app.get('*', (req, res) => {
	res.json({ message: 'Hello from Express - Root Endpoint v3' })
});

module.exports = app;
