const express = require('express');
const path = require('path');

const app = express();
const port = 5000;

app.use(express.static("public"));

app.listen(process.env.PORT || 5000, () => console.log(`Server running at port ${port}`));