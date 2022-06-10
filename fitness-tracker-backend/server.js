const PORT = process.env.PORT || 3001;
const express = require('express');
const cors = require('cors')
const bcrypt = require('bcrypt');


const app = express();
const models = require('./models');


app.use(express.json());
app.use(cors())

//--> Login post request <--//

app.post('/login', async (req, res) => {

    const { email, password } = req.body;
    
      models.User.findOne({
        where: { email: email }
      }).then((user) => {
        if (!user) {
          res.json({ error: 'no user with that email was found' })
          return;
        }
    
        bcrypt.compare(password, user.password, (err, match) => {
          if (match) {
            res.json({ email: user.firstName, success: true })
            // res.redirect('/')
          } else {
            res.json({ error: 'incorrect password' })
          }
        })
      })
    })

//--> Sign up post request <--//

app.post('/signup', (req, res) => {

    const { firstName, lastName, email, password } = req.body;
    
        if (!firstName || !lastName || !email || !password) {
        res.json({ error: 'First Name, Last Name, Email, and Password required.' })
        return;
      }
    console.log(firstName)
    console.log(lastName)
    console.log(email)
    console.log(password)
    
      bcrypt.hash(password, 5, (err, hash) => {
        models.User.create({
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


app.listen(PORT , () => {
    console.log(`app started in port ${PORT}`)
})