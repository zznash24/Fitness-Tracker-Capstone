const PORT = process.env.PORT || 3001;
const express = require('express');
const app = express();

const models = require('./models');


app.use(express.json());

app.get('/' , (req, res) => {
    res.json({Hello: 'Mom'});
})


app.listen(PORT , () => {
    console.log(`app started in port ${PORT}`)
})