const PORT = process.env.PORT || 3001;
const cors = require('cors');
const express = require('express');
const db = require('./models');
const app = express();

const models = require('./models');
const exercise = require('./models/exercise');

app.use(cors())


app.use(express.json());

app.get('/' , (req, res) => {
    res.json({Hello: 'Mom'});
})

app.post('/exercises/target/:param',   (req, res) => {
    const param = req.body.param;
     models.exercise.findAll({
        attributes: ['name', 'location', 'description'], 
        where: {
            name: param
        }
    }).then(data => {
        res.json(data)
    }).catch((err) => {
        res.json({
          success: false,
          message: "Error occurred"
        })
    })
})
//    models.exercises.findOne({
//        where: { 
//            exercise: exercise
//        }
//    }).then(exercise) => {

//    }

    
//     const { name, location, description } = req.body;
//         if (!name || !location || !description) {
//             res.json(e)
//             return;
//         }
// })
// console.log({name})



app.listen(PORT , () => {
    console.log(`app started in port ${PORT}`)
})