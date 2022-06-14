const PORT = process.env.PORT || 3001;
const express = require('express');
const cors = require('cors')
const bcrypt = require('bcrypt');
const db = require('./models');
const app = express();



const models = require('./models');
const exercise = require('./models/exercises');

app.use(express.json());
app.use(cors())

//--> Login post request <--//

app.post('/login', async (req, res) => {

    const { username, password } = req.body;
    
      models.User.findOne({
        where: { username: username }
      }).then((user) => {
        if (!user) {
          res.json({ error: 'no user was found' })
          return;
        }
    
        bcrypt.compare(password, user.password, (err, match) => {
          if (match) {
            res.json({ email: user.username, success: true })
            // res.redirect('/')
          } else {
            res.json({ error: 'incorrect password' })
          }
        })
      })
    })

//--> Sign up post request <--//

app.post('/signup', (req, res) => {

    const { username, firstName, lastName, email, password } = req.body;
    
        if (!username || !firstName || !lastName || !email || !password) {
        res.json({ error: 'First Name, Last Name, Email, and Password required.' })
        return;
      }
    console.log(username)  
    console.log(firstName)
    console.log(lastName)
    console.log(email)
    console.log(password)
    
      bcrypt.hash(password, 5, (err, hash) => {
        models.user.create({
          username: username,
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: hash
        }).then((user) => {
          
          res.json({
            success: true,
            email: email,
            user_id: user.id
          })
        }).catch(e => {
          console.log(e)    
          res.json({ error: e })
        })
      })
    })

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