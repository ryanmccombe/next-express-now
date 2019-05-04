const app = require('../../app');

app.get('*', (req, res) => {
	res.json({
		message: 'Hello from Express - Nested Root Endpoint v3',
		query: JSON.stringify(req.query)
	})
});

module.exports = app;
