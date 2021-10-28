'use strict';

const PORT = process.env.PORT || 3000;
const app = require('../app');

// server
app.listen(PORT, () => {
    console.log('Server start!');
});
