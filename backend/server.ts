const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello PassHack-Back!');
});

app.listen(port, () => {
	return console.log(`Server is listening at localhost:${port}`);
});
