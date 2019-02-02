var express = require("express");
var app = express();

// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

var fs = require('fs')

// function to encode file data to base64 encoded string
function base64_encode(file) {
  // read binary data
  var bitmap = fs.readFileSync(file, { encoding: 'base64' });
  // convert binary data to base64 encoded string
  return 'data:image/jpg;base64,' + bitmap.toString('base64');
}

let crew = [
  {
    id: 1,
    name: 'Monkey D. Luffy',
    img: base64_encode('./img/luffy.jpg'),
    description: fs.readFileSync('./txt/luffy.txt', 'utf-8'),
    descriptionOrigin: 'https://onepiece.fandom.com/wiki/Monkey_D._Luffy'
  },
  {
    id: 2,
    name: 'Roronoa Zoro',
    img: base64_encode('./img/zoro.png'),
    description: fs.readFileSync('./txt/zoro.txt', 'utf-8'),
    descriptionOrigin: 'https://onepiece.fandom.com/wiki/Roronoa_Zoro'
  },
  {
    id: 3,
    name: 'Nami',
    img: base64_encode('./img/nami.jpg'),
    description: fs.readFileSync('./txt/nami.txt', 'utf-8'),
    descriptionOrigin: 'https://onepiece.fandom.com/wiki/Nami'
  },
  {
    id: 4,
    name: 'Usopp',
    img: base64_encode('./img/usopp.jpg'),
    description: fs.readFileSync('./txt/usopp.txt', 'utf-8'),
    descriptionOrigin: 'https://onepiece.fandom.com/wiki/Usopp'
  },
  {
    id: 5,
    name: 'Sanji',
    img: base64_encode('./img/sanji.jpg'),
    description: fs.readFileSync('./txt/sanji.txt', 'utf-8'),
    descriptionOrigin: 'https://onepiece.fandom.com/wiki/Sanji'
  },
  {
    id: 6,
    name: 'Tony Tony Chopper',
    img: base64_encode('./img/chopper.jpg'),
    description: fs.readFileSync('./txt/chopper.txt', 'utf-8'),
    descriptionOrigin: 'https://onepiece.fandom.com/wiki/Tony_Tony_Chopper'
  },
  {
    id: 7,
    name: 'Nico Robin',
    img: base64_encode('./img/robin.jpg'),
    description: fs.readFileSync('./txt/robin.txt', 'utf-8'),
    descriptionOrigin: 'https://onepiece.fandom.com/wiki/Nico_Robin'
  },
  {
    id: 8,
    name: 'Franky',
    img: base64_encode('./img/franky.jpg'),
    description: fs.readFileSync('./txt/franky.txt', 'utf-8'),
    descriptionOrigin: 'https://onepiece.fandom.com/wiki/Franky'
  },
  {
    id: 9,
    name: 'Brook',
    img: base64_encode('./img/brook.jpg'),
    description: fs.readFileSync('./txt/brook.txt', 'utf-8'),
    descriptionOrigin: 'https://onepiece.fandom.com/wiki/Brook'
  }
]

app.get("/crew", (req, res, next) => {
  res.json(crew);
});

app.get('/crew/:crewMemberId', function (req, res, next) {
  crewMember = req.params.crewMemberId;
  crewMemberFound = false;
  for(let i = 0; i < crew.length; i++) {
    if(crew[i].id == crewMember) {
      crewMemberFound = true
      res.json(crew[i]);
    }
  }
  if(!crewMemberFound) {
    res.status(404).json({ error: 'Not found'});
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});