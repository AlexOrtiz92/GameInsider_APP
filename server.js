const express = require("express");
const webpack = require("webpack")
const webpackDevMiddleware = require("webpack-dev-middleware")
const webpackConfig = require("./webpack.config")

const { appInit } = require("./config/appConfig");
const { bbddInit } = require("./config/bbddConfig");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Videogames = require("./models/videogames");
const Users = require("./models/users");

const app = appInit();
bbddInit();

const MY_SEED_AUT = "MY_SEED_AUT"


//GET all videogames
app.get("/api/videogames", (request, response) => {
  Videogames.find((err, data) => {
    if (err) {
      console.error(err);
    } else {
      response.send({ data });
    }
  });
});
//PAGINATION

app.get("/api/pagination/:page", (request, response) => {

  const { page } = request.params;

  let totalVideogames = 0;
  let totalPages = 0;
  let pageNumber = 0;
  const PAGE_SIZE = 10;
  !parseInt(page) ? pageNumber = 1 : pageNumber = page;

  Videogames.find().countDocuments((err, data) => {

    totalVideogames = data
    totalPages = Math.ceil(data / PAGE_SIZE)

    Videogames.find().skip((PAGE_SIZE * (pageNumber - 1))).limit(PAGE_SIZE).exec((err, data) => {

      if (err) {
        console.error(err)
      } else {
        response.status(200).send({
          PageNumber: pageNumber,
          totalPages: totalPages,
          totalVideogames: totalVideogames,
          Videogames: data
        })
      }
    })
  })
})


//GET all users
app.get("/api/users", (request, response) => {
  Users.find((err, data) => {
    if (err) {
      console.error(err);
    } else {
      response.send({ data });
    }
  });
});


//GET user Videogames Future

app.put("/api/gamelist/:nickname", (request, response) => {

  const { time } = request.body

  const { nickname } = request.params

  Users.findOne({ nickname: nickname }, async (err, data) => {

    if (err) {
      console.error(err)
    } else {
      const videogamesArr = data.videogames[time]

      const listado = []

      for (let element of videogamesArr) {

        const game = await Videogames.findById(element)
        listado.push(game)

      }
      response.status(200).send({ listado: listado })

    }
  });

})

//POST  new user

app.post("/api/users/register", (request, response) => {
  bcrypt.hash(request.body.password, 12).then((hasshedPassword) => {
    const { email, nickname } = request.body;

    const newUser = new Users({
      email,
      nickname,
      password: hasshedPassword,
      videogames: {
        past: [],
        present: [],
        future: [],
      },
    });

    newUser.save((err) => {
      if (!err) {
        response.status(200).send({
          success: true,
          message: "Usuario registrado correctamente",
          user: newUser,
        });
      } else {
        console.error(err);
      }
    });
  });
});

// POST login

// app.post("/api/users/login", (request, response) => {
//   const { email, password } = request.body;

//   Users.findOne({ email: { $eq: email } }, (err, user) => {
//     if (err) {
//       response.status(500).send("Fallo en el login");
//     } else if (!user) {
//       response.status(200).send("El usuario no existe");
//     } else if (user) {
//       bcrypt.compare(password, user.password, (err, result) => {
//         if (err) {
//           response.status(500).send("Fallo en el login");
//         } else if (!result) {
//           response.status(200).send("Contraseña incorrecta");
//         } else if (result) {
//           const token = jwt.sign({ user: user }, MY_SEED_AUT, { expiresIn: "15000" })

//           return response.cookie("user", token).send({
//             succes: true,
//             message: "Logeado correctamente",
//           });

//         }
//       });
//     }
//   });
// });

app.post("/api/users/login", async (request, response) => {
  const { email, password } = request.body;

  try {
    const user = await Users.findOne({ email: { $eq: email } });

    const verify = await bcrypt.compare(password, user.password);

    if (!verify) {
      response.status(200).send("Contraseña incorrecta");
    } else {
      const token = jwt.sign({ user: user }, MY_SEED_AUT, {
        expiresIn: "15000"
      });

      return response.cookie("user", token).send({
        succes: true,
        message: "Logeado correctamente",
      });
    }
  } catch (err) {
    response.status(500).send("Fallo en el login");
  }
})




//webpack middleware
app.use(webpackDevMiddleware(webpack(webpackConfig)))

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/public/html", { extensions: ["html"] }))
app.use(express.static(__dirname + "/public/images"))
app.use(express.static(__dirname + "/public/css"))
app.use(express.static(__dirname + "/public/js"))


app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"))
app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js"))
app.use("/js", express.static(__dirname + "/node_modules/jquery/dist"))
app.use("/js", express.static(__dirname))

//Gestionar el error y redireccion
app.use((req, res, next) => {
  res.status(404);

  if (req.accepts('html')) {
    res.redirect("/home");
    return;
  }
  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }
  res.type('txt').send('Not found');
});


const port = "1234";
const host = "127.0.0.1";

app.listen(port, host, () => {
  console.log(`Servidor corriendo en http://${host}:${port}/home`)
})
