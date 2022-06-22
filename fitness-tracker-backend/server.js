const PORT = process.env.PORT || 3001;
const express = require('express');
const cors = require('cors')
const bcrypt = require('bcrypt');
const app = express();



const models = require('./models');
const exercise = require('./models/exercises');


app.use(express.json());
app.use(cors());

//--> Login post request <--//

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  models.users
    .findOne({
      where: { username: username },
    })
    .then((user) => {
      if (!user) {
        res.json({ error: "no user was found" });
        return;
      }

      bcrypt.compare(password, user.password, (err, match) => {
        if (match) {
          res.json({ email: user.username, success: true });
          // res.redirect('/')
        } else {
          res.json({ error: "incorrect password" });
        }
      });
    });
});

//--> Sign up post request <--//

app.post("/signup", (req, res) => {
  const { username, firstName, lastName, email, password } = req.body;

  console.log("req.body", req.body);

  if (!username || !firstName || !lastName || !email || !password) {
    res.json({ error: "First Name, Last Name, Email, and Password required." });
    return;
  }
  console.log(username);
  console.log(firstName);
  console.log(lastName);
  console.log(email);
  console.log(password);

  bcrypt.hash(password, 5, (err, hash) => {
    models.users
      .create({
        username: username,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hash,
      })
      .then((user) => {
        res.json({
          success: true,
          email: email,
          user_id: user.id,
        });
      })
      .catch((e) => {
        console.log(e);
        res.json({ error: e });
      });
  });
});

app.get("/", (req, res) => {
  res.json({ Hello: "Mom" });
});

app.post("/exercises/target/addExercise", (req, res) => {
  const { bodyPart, equipment, gifURL, name, target } = req.body;
  console.log("req.body", req.body);
  models.exercises
    .findOrCreate({
      where: {
        bodyPart: bodyPart,
        equipment: equipment,
        gifURL: gifURL,
        name: name,
        target: target,
      },
    })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        success: false,
        message: "Error occurred",
      });
    });
});

app.post(
  "/exercises/target/users/:userId/:exerciseId/addToFavorites",
  (req, res) => {
    const userId = parseInt(req.params.userId);
    const exerciseId = parseInt(req.params.exerciseId);
    models.favorites
      .findOrCreate({
        where: {
          userId: userId,
          exerciseId: exerciseId,
        },
      })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        console.log(err);
        res.json({
          success: false,
          message: "Error occurred",
        });
      });
  }
);



app.listen(PORT, () => {
  console.log(`app started in port ${PORT}`);
});
