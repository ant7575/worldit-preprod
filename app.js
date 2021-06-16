//Prg Initial commands
/* 
const express = require('express');
const routes = require('./routes');
const http = require('http');
const path = require('path');
const urlencoded = require('url');
const bodyParser = require('body-parser');
const json = require('json');
const logger = require('logger');
const methodOverride = require('method-override');
const Cron = require('node-cron')  //used for schduler
const Functions = require('./functions')
//nano is used for couch DB
const nano = require('nano')('http://localhost:5948');
const db = nano.use('address');
 */
/* 
console.log('Node App');
const os = require('os');
console.log(os.type());
console.log(os.platform());
 */

//Shortest Code to run an website/app/server
//do NPM init -y on a folder of the app and install express package and nodemon

/* const express = require('express');
const app = express();
app.get('/', function (req, res) {
  res.send('Hello Kiran kumar');
});
app.listen(3000);
 */
//https://www.youtube.com/watch?v=ZXzdzJ9ZYKQ
//Schdule a CRON job for every 5 secs

//Cron.schdule('*/5 * * * * *', () => {
//  Functions.greet()
//})

/* 
//function is triggered by api
//in package.json
//"scripts":{
//"endpoint": "curl http://localhost:6025/api/greet"  
}





//***************************************** */
/*
const car = {
  brand: 'BMW',
  model: 'Z4',
};
module.exports = car;
 */

//const { first } = require('lodash');

//const { includes } = require('lodash');

//resolve/then
/* 
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve('Done!'), 1000);
});

// reject runs the second function in .then
promise.then(
  (result) => console.log(result), // doesn't run
  (error) => console.log(error) // shows "Error: Whoops!" after 1 second
);
 */
//******************************************* */
//reject/then
/* 
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error('Whoops!')), 1000);
});

// reject runs the second function in .then
promise.then(
  (result) => console.log(result), // doesn't run
  (error) => console.log(error) // shows "Error: Whoops!" after 1 second
);
 */
//******************************************* */
/* 
//catch -> only error

let promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Whoops!')), 1000);
});

// .catch(f) is the same as promise.then(null, f)
promise.catch((error) => console.log(error)); // shows "Error: Whoops!" after 1 second
 */
//******************************************* */
//Finally
//1) A finally handler has no arguments. In finally we don’t know whether the promise is successful or not.
//That’s all right, as our task is usually to perform “general” finalizing procedures.
//2) A finally handler passes through results and errors to the next handler.
/* 
new Promise((resolve, reject) => {
  setTimeout(() => resolve('result'), 2000);
})
  .finally(() => console.log('Promise ready'))
  .then((result) => console.log(result)); // <-- .then handles the resu
 */
/* 
//example
let promise = loadScript(
  'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js'
);

promise.then(
  (script) => console.log(`${script.src} is loaded!`),
  (error) => console.log(`Error: ${error.message}`)
);

promise.then((script) => console.log('Another handler...'));
 */
//******************************************* */
//Async Await
/* 
function Clown() {
  return new Promise((reslove) => {
    setTimeout(() => {
      reslove(' hi');
    }, 3000);
  });
}

async function msg(callback) {
  const msg = await Clown();
  console.log('Message:', msg);
  callback();
}
msg(getResult);  //function sent as a parameter as a callback

function getResult() {
  console.log('Execute After');
}
 */
//******************************************* */
//HTTP Server creation First Method
/* 
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Welcome to HTTP Server');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
 */

//Second Method of creating HTTP Server
/* 
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Welcome to HTTP Server');
    res.end();
  })
  .listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
 */
//******************************************* */
//Making HTTP GET Request
/* 
const http = require('http');
http.get('http://api.open-notify.org/astros.json', (resp) => {
  let data = '';
  resp.on('data', (chunk) => {
    data += chunk;
  });
  resp.on('end', () => {
    let jsondata = JSON.parse(data);
    console.log(jsondata);
  });
});
 */
//******************************************* */
//Making HTTP POST Request
/* 
const http = require('https');
const data = JSON.stringify({
  name: 'John Doe',
  Job: 'Content Writer',
});
const options = {
  hostname: 'reqres.in',
  path: '/api/users',
  method: 'POST',
  header: {
    'Content-Type': 'application/json',
  },
};

//request
const req = http.request(options, (res) => {
  let body = '';
  console.log('Status Code:', res.statusCode);

  res.on('data', (chunk) => {
    body += chunk;
  });
  res.on('end', () => {
    console.log('Body:', JSON.parse(body));
  });
});

req.write(data);
req.end;
 */
//******************************************* */
//Making HTTP POST Request using axios package
/* 
const axios = require('axios');
const data = JSON.stringify({
  name: 'John Doe',
  Job: 'Content Writer',
});

axios
  .post('https://reqres.in/api/users', data)
  .then((res) => {
    console.log(`Status Code:${res.status}`);
    console.log(`Body:${JSON.stringify(res.data)}`);
  })
  .catch((err) => {
    console.log(err);
  });
 */
//******************************************* */
//Files - read a file (Asyncronus way)
/* 
const fs = require('fs');
fs.readFile('text.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
//******************************************* */
//Files - read a file (syncronus way)
/*
const data1 = fs.readFileSync('text.txt', { encoding: 'utf-8', flag: 'r' });
console.log(data1);
 */
//to find the status of file
/* 
const fs = require('fs');
fs.stat('text.txt', (err, stats) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(stats.isFile());
  console.log(stats.isDirectory());
  console.log(stats.isSymbolicLink());
  console.log(stats.size);
});
 */
//******************************************* */
//Files - write and Update
// Asynchronous Method
/* 
fs.writeFile();
fs.readFile();
fs.unlink();
 */
//synchronous Methods
/* 
fs.writeFileSync();
fs.readFileSync();
fs.unlinkSync();
 */
//******************************************* */
//code for writing a file if not present it will create one
//sync way
/* 
const fs = require('fs');
const content = [
  {
    type: 'Node Application',
  },
];
fs.writeFileSync('test.json', JSON.stringify(content));
 */
//******************************************* */
//Async way
/* 
const fs = require('fs');
const content = 'Node Application';

fs.writeFile('test.json', content, { flag: 'a+' }, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Successfully done!');
});
 */
//******************************************* */
//To Delete a file
/* 
const fs = require('fs');
const content = 'Node.js';

fs.unlink('text.txt', (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('File Removed');
});
 */
//******************************************* */
//Routing - performing a task on a particular path is called routing
//diffcult/long Method
/* 
const http = require('http');

function index(request, response) {
  response.writeHead(200);
  response.end('Node Routing1');
}
function aboutus(request, response) {
  response.end('This is Advika about page');
}
http
  .createServer(function (req, res) {
    if (req.url == '/') {
      return index(req, res);
    }
    if (req.url == '/aboutus') {
      return aboutus(req, res);
    }
  })
  .listen(8000);
 */
//******************************************* */
//Simple/easy Method
/* 
const http = require('http');

const routes = {
  '/': function index(request, response) {
    response.writeHead(200);
    response.end('Node Routing10');
  },
  '/aboutus': function aboutus(request, response) {
    response.end('This is Kiran About Page');
  },
};

http
  .createServer(function (req, res) {
    if (req.url in routes) {
      return routes[req.url](req, res);
    }
  })
  .listen(process.env.PORT || 8000);
 */
//******************************************* */
//Path Module - helps in accessing the file systems
/* 
const path = require('path');
file = path.basename('test.json');
file1 = path.dirname('Tutorial/test.json');
file2 = path.isAbsolute('F:\1 Full Stack\1 NodeJS & Express');

let dir = '1 NodeJS & Express';
file3 = path.join('F:', '1 Full Stack', dir, 'test.json');

file4 = path.parse('Tutorial/test.json');
file5 = path.resolve('test.json');
console.log(file5);
 */
//******************************************* */
//Event Module
/* 
const events = require('events');

let ev = new events.EventEmitter();

//on method is used to create events
ev.on('my_event', function (data) {
  console.log('Event:', data);
});

//emit method  is used to call event
ev.emit('my_event', 'Call emit() method to fire my_event');

//to create a event which excutes only once
ev.once('eventOnce', () => console.log('EventOnes once Fired'));
ev.emit('eventOnce');
ev.emit('eventOnce'); //u cannt excute multiple times it will be excuted only once
//passing parameters
ev.once('eventOnce', (code, msg) => console.log(`Got ${code} from ${msg}`));
ev.emit('eventOnce', 200, 'kiran');
 */
/* 
//to unrigester an event (no event will be triggred n will return nothing)
const events = require('events');

let ev = new events.EventEmitter();
var c1 = (code, msg) => console.log(`Got ${code} from ${msg}`);
ev.once('eventOnce', c1);
ev.off('eventOnce', c1);

ev.emit('eventOnce', 200, 'kiran');
 */
//******************************************* */
//Streams
/* 
//without using Stream and reading a file
const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
  fs.readFile('test.json', (err, data) => {
    res.end(data);
  });
});
server.listen(3000, () => {
  console.log('Application Started on port 3000');
});
 */
//******************************************* */
//with using Stream and reading file  and to write we use "createWriteStream"
/* 
const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
  const stream = fs.createReadStream('test.json');

  stream.pipe(res);
});

server.listen(8000, () => {
  console.log('Application Started on port kiran 3000');
});
 */
//******************************************* */
//Buffer
/* 
const buf = Buffer.alloc(4);

buf.write('Hey!');
console.log(buf.toString());

console.log(buf[0]);
console.log(buf[1]);
console.log(buf[2]);

buf[1] = 111; //is decimal code for lowercase O
console.log(buf.toString());
*/
//https://www.youtube.com/watch?v=DvlCT0N7yQI&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=15
//Reading and writing stream of data and buffering it and writing the into new file
//with the below code I recived 3 chunks with read.txt file
/* 
var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/read.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

myReadStream.on('data', function (chunk) {
  console.log('new chunk received');
  myWriteStream.write(chunk);
});
 */

//using the above code and do it with pipe
/* 
var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/read.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

myReadStream.pipe(myWriteStream);
 */

//using the above code to send it to port 3000
/* 
const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
  console.log('request was made: ' + req.url);
  res.writeHead(200, { 'content-Type': 'text/plain' }); //for json we use somthing like this "application/json"

  let myReadStream = fs.createReadStream(__dirname + '/read.txt', 'utf8');
  myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('listining to port 3000');
 */
//******************************************* */
//Excpetion Handling

//throw new Error('error message');
// Error handling with try catch
/* 
try {
  console.log('Start try Block');
  //lLALALA;   or
  throw new Error('error message');
  console.log('End Try Block');
} catch (err) {
  console.log('Error Message', err);
}
 */
//Error handling with promises
//video 2:50:00
/* 
doSomthing1()
.then(()=>{
  return doSomthing2().catch(err=> {
    throw err
  })
})
.then(()=> {
  return doSomthing2().catch(err=>{
    throw err
  })
})
.catch(err=>console.error(err);)
 */
//Async and Await exception handling
/* 
async function someFunction() {
  try {
    await someOtherFunction();
  } catch (err) {
    console.log(err.message);
  }
}
 */
//
//******************************************* */
//EXPRESS.JS is a web framework for node.js
// see the excel file for this.
//the server.js code
/* 
const express = require('express');
const app = express();

app.get('/ping', (req, res) => {
  res.send('Hi Kitty potty');
});

app.listen(3000, () => {
  console.log('server started on port 3000');
});
 */
//******************************************* */
//Middleware
/* 
const express = require('express');
const app = express();

const myLogger = function (req, res, next) {
  console.log('LOGGED');
  next();
};
const requestTime = function (req, res, next) {
  req.reqTime = Date.now();
  next();
};
app.use(myLogger);
app.use(requestTime);

app.get('/', function (req, res) {
  res.send(`Home Route : ${req.reqTime}`);
});
app.listen(3000, () => console.log('App Started on Port 3000'));
 */
//******************************************* */
//Serving Static Files in Express (for Images,CSS , JS files Static is used)
/* 
const express = require('express');
const path = require('path');

const app = express();

const publicpath = path.resolve(__dirname, 'public');

app.use(publicpath, express.static('static'));

<img src='public/img_girl.jpg"></img>'
app.get('/', function (req, res) {
  res.send(`Static Files`);
});

app.listen(3000, () => console.log('App Started on Port 3000'));
 */

//******************************************* */
//Routing with Express
/* 
const express = require('express');
const app = express();

const PORT = 3000;

const data = {
  id: 1,
  name: 'India',
};

app.get('/', (req, res) => {
  res.end('welcome to my Homepage');
});

app.get('/about', (req, res) => {
  res.send('welcome to my About page');
});

app.get('/weather', (req, res) => {
  //res.json(data);
  res.sendFile('/static/index.html');
});

app.listen(PORT, () => {
  console.log('Server is started on PORT', PORT);
});
 */
//******************************************* */
//Views = 3:27:00
/* 
const express = require('express');
const app = express();

const PORT = 3000;

app.set('view engine', 'pug');
//app.set('views', './views'); //U have to mention the folder name if u want to rename the View folder with some other name Time = 3:29:00
app
  .get('/', function (req, res) {
    res.render('index', {
      title: 'Express View Engine',
      h1: 'Express Application',
      p: 'Express Template Engine',
    });
  })
  .listen(PORT, () => {
    console.log('server sarted on http://localhost:3000');
  });
 */
//******************************************* */
//Core Express
//Express Form 3:36:00
/* 
const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;
app.set('Views', path.join(__dirname, 'views'));
app.set('view engine', 'Pug');

app.use(express.urlencoded({
  extended:true
}))

app.get('/', (req, res) => {
  res.render('index', { title: 'Form Handler' });
});
app.post('/form_submit', (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  res.end(`your Username is:${username} and Email is:${email}`);
});
app.listen(PORT, () => {
  console.log('Listining to request on http://localhost:${PORT}');
});
 */
//******************************************* */
//Session
/* 
const express = require('express');
const app = express();
const session = require('express-session');

const PORT = process.env.PORT || 3000;

app.use(
  session({
    secret: 'Your Secret Key',
    resave: true,
    saveUninitialized: true,
  })
);

app.get('/', (req, res) => {
  req.session.name = 'John';
  return res.send('Session Set');
});

app.get('/session', (req, res) => {
  var name = req.session.name;
  //console.log(req.session);
  return res.send(name);
});

app.get('/destroy', (req, res) => {
  req.session.destroy(function (error) {
    console.log('Session Destroy');
  });
  res.end();
});

app.listen(PORT, () => {
  console.log('Listining to request on http://localhost:${PORT}');
});
 */
//******************************************* */

//cookies
/* 
const express = require('express');
const app = express();
const cookies = require('cookie-parser');

const PORT = process.env.PORT || 3000;

app.use(cookies());

let users = {
  name: 'John',
  Age: 28,
};

app.get('/', (req, res) => {
  res.send('Cookies Tutorial');
});

app.get('/setuser', (req, res) => {
  res.cookie('userData', users);
  res.send('Users Data Added to Cookies');
});

app.get('/getuser', (req, res) => {
  res.send(req.cookies);
});

app.get('/logout', (req, res) => {
  res.clearCookie('userData');
  res.send('User logout Successfully');
});

app.listen(PORT, () => {
  console.log('Listining to request on http://localhost:${PORT}');
});
 */
//******************************************* */

// good code by utube prg with mosh - https://www.youtube.com/watch?v=pKd0Rpw7O48    time 45:45
//validation using joi and finding the course
/* 
//Look up the course
//if not existing, return 404
app.put('/api/courses/:id', (req,res)=>{
const course = courses.find((c) => c.id === parseInt(req.params.id));
if (!course) res.status(404).send('The Course with the given ID was not found');

const schema = {
  name: Joi.string().min(3).required(),
};

//validate
//if invalid, return 400 - bad request
const result = Joi.validate(req.body, schema);
if (result.error) {
  res.status(400).send(result.error.details[0].message);
  return;
}

//update Course
course.name = req.body.name;

//return the updated course
res.send(course);
})
 */
/* 
//Refactoring the above code
app.put('/api/courses/:id', (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send('The Course with the given ID was not found');
    
  }
  //const result = validateCourse(req.body) 
  const { error } = validateCourse(req.body); // validateCourse return value and error -this is like result.error  - object destructring
 
  if (error) return res.status(400).send(error.details[0].message);
    
  //update Course
  course.name = req.body.name;

  //return the updated course
  res.send(course);
});
function validateCourse(course) {
  const schema = {
    name: Joi.string().min(3).required(),
  };
}
 */
/* 
//Delete
app.delete('/api/courses/:id', (req, res) => {
const course = courses.find((c) => c.id === parseInt(req.params.id));
if (!course) return res.status(404).send('The Course with the given ID was not found');
//Delete
const index = courses.indexOf(course)
courses.splice(index, 1)

//return the response
res.send(course);
});
 */
//******************************************* */
//playlist from utube The Net Ninja
//https://www.youtube.com/watch?v=NtrnaTKqFPQ&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=8
//The Node Event emitter
/* 
const events = require('events');
const util = require('util');

const Person = function (name) {
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

let kiran = new Person('kiran');
let advika = new Person('advika');
let roopa = new Person('roopa');
let people = [kiran, advika, roopa];

people.forEach(function (person) {
  person.on('speak', function (msg) {
    //speak is a event name and can name anything
    console.log(person.name + ' said:' + msg);
  });
});

kiran.emit('speak', 'hey dude');
advika.emit('speak', 'I want curry');
 */
//LOGIN SYSTEM
/*******************************************/
//new Node.js course ny Net Ninja
//https://www.youtube.com/watch?v=OIBIXYLJjsI&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&index=2
//https://github.com/iamshaunjp/node-crash-course/branches/stale

//const os = require('os');
// console.log(os.platform(), os.homedir());
/* 
const fs = require('fs')
/* 
// const people = require('./people');

// console.log(people);

// const data = require('./people');

// console.log(data.people, data.ages);
//in another file 
const people = ['yoshi', 'ryu', 'chun-li', 'mario'];
const ages = [20, 25, 30, 35];

// console.log(people);

// module.exports = people;

module.exports = {
  people,
  ages,
}
//in another file the below
const { people, ages } = require('./people'); //after destructring

console.log(people, ages);

const os = require('os');

console.log(os.platform(), os.homedir());
 */

/*
//read a file async
fs.readFile('./read.txt',(err,data)=>{   //read.txt doesn't exists
  if (err) {
    console.log(err);
  }
  console.log(data);
})
 
//writting into file
const fs = require('fs');
fs.writeFile('./write.txt', 'I am inside write file', () => {
  //if the file doesn't exist it will create one
  console.log('file was written');
});
*/
/* 
//directories
const fs = require('fs');
if (!fs.existsSync('./assets')) {
  fs.mkdir('./assets', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('folder created');
  });
} else {
  fs.rmdir('./assets', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('folder deleted');
  });
}
 */
//delete files
/* 
const fs = require('fs');
if (fs.existsSync('./docs/read.txt')) {
  fs.unlink('./read.txt', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('file deleted');
  });
}
 */
/*******************************************/
//Stream
/* 
const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt');

readStream.on('data', chunk => {
  // console.log('---- NEW CHUNK ----');
  // console.log(chunk);
  writeStream.write('\nNEW CHUNK:\n');
  writeStream.write(chunk);
});
the below and above code are same so piping does it easily
// piping
// readStream.pipe(writeStream);
 */
//Also there is some thing called Duplex Stream and transform Stream

//A duplex stream can be read from and written to, but there's not necessarily any connection between the input and output.
//A transform stream can also be read from and written to, but the output will always be the result of a transformation on its input.
/*******************************************/
//Creating HTTP Server
/* 
const http = require('http');

const server = http.createServer((req, res) => {
  console.log('request made');
  console.log(req.url, req.method);
});

// localhost is the default value for 2nd argument
server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});
 */
/* 
//request req and response res
const http = require('http');

const server = http.createServer((req, res) => {
  console.log('request made');
  res.setHeader('content-Type', 'text/plain');
  //res.setHeader('content-Type', 'text/html')
  res.write('hello kiran');
  res.end();
});
server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});
 */
/*******************************************/
/*
//seting up basic routing without HTTP API calls like GET PUT etc

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // console.log(req);
  console.log(req.url);

  // set header content type
  res.setHeader('Content-Type', 'text/html');

  // res.write('<p>hello, ninjas</p>');
  // res.write('<p>hello again, ninjas</p>');
  // res.end();

  // send html file
  // fs.readFile('./views/index.html', (err, data) => {
  //   if (err) {
  //     console.log(err);
  //     res.end();
  //   }
  //   //res.write(data);
  //   res.end(data);
  // });
  */
/* 
  // simple routing
  let path = './views/';
  switch (req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break;
    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;
    case '/about-us':
      res.statusCode = 301;
      res.setHeader('Location', '/about');
      res.end();
      break;
    default:
      path += '404.html';
      res.statusCode = 404;
  }

  // send html
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    }
    //res.write(data);
    res.end(data);
  });
});

// localhost is the default value for 2nd argument
server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});
 */
/*******************************************/
//using Express
/* 
const express = require('express');

// express app
const app = express();

// listen for requests
app.listen(3000);

app.get('/', (req, res) => {
  // res.send('<p>home page</p>');
  res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
  // res.send('<p>about page</p>');
  res.sendFile('./views/about.html', { root: __dirname });
});

// redirects
app.get('/about-us', (req, res) => {
  res.redirect('/about');
});

// 404 page
app.use((req, res) => {
  res.status(404).sendFile('./views/404.html', { root: __dirname });
});

 */
//ejs code for copy paste
/******************************************************/

//index.ejs
/* 
<html lang="en">
<%- include("./partials/head.ejs") %>

<body>
  <%- include("./partials/nav.ejs") %>

  <div class="blogs content">
    <h2>All Blogs</h2>

    <% if (blogs.length > 0) { %>
      <% blogs.forEach(blog => { %>    //cycle thru ARRAY
        <h3 class="title"><%= blog.title %></h3>
        <p class="snippet"><%= blog.snippet %></p>
      <% }) %>
    <% } else { %>
      <p>There are no blogs to display...</p>
    <% } %>
    
  </div>

  <%- include("./partials/footer.ejs") %>
</body>
</html>
 */

//create.ejs
/* 
<html lang="en">
<%- include("./partials/head.ejs") %>

<body>
  <%- include("./partials/nav.ejs") %>

  <div class="create-blog content">
    <form>
      <label for="title">Blog title:</label>
      <input type="text" id="title" name="title" required>
      <label for="snippet">Blog snippet:</label>
      <input type="text" id="snippet" name="snippet" required>
      <label for="body">Blog body:</label>
      <textarea id="body" name="body" required></textarea>
      <button>Submit</button>
    </form>
  </div>

  <%- include("./partials/footer.ejs") %>
</body>
</html>
 */

/******************************************************/
/* 
//proper Routing

const express = require('express');

// express app
const app = express();

// listen for requests
app.listen(3000);

// register view engine
app.set('view engine', 'ejs');
// app.set('views', 'myviews');

app.get('/', (req, res) => {
  const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];
  res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});

 */
/******************************************************/
//to include partials and meaning of escape and unescape
/* 
<%- include('./partials/head.ejs') %/
<%- include('./partials/nav.ejs') %/
<%- include('./partials/footer.ejs') %/

<% 'Scriptlet' tag, for control-flow, no output
<%= Outputs the value into the template (HTML escaped)
<%- Outputs the unescaped value into the template
 */
/******************************************************/
//using mongodb
/* 
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

// express app
const app = express();

// connect to mongodb & listen for requests
const dbURI =
  'mongodb+srv://netninja:test1234@net-ninja-tuts-del96.mongodb.net/node-tuts';

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// mongoose & mongo tests - routes
app.get('/add-blog', (req, res) => {
  const blog = new Blog({
    title: 'new blog',
    snippet: 'about my new blog',
    body: 'more about my new blog',
  });

  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get('/all-blogs', (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get('/single-blog', (req, res) => {
  Blog.findById('5ea99b49b8531f40c0fde689')
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});
// the neat of doing mongo routes instead of doing like the above code 
// blog routes
app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

app.get('/blogs', (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render('index', { blogs: result, title: 'All blogs' });
    })
    .catch((err) => {
      console.log(err);
    });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
 */
/******************************************************/
//mongoose/mongo - schema
/* 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//first step we define a schema
const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
//second step create a model based on a schema where name of the model should be singular of the collections here its Blog
const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;
 */
/******************************************************/
//10th lesson
/* 
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

// express app
const app = express();

// connect to mongodb & listen for requests
const dbURI =
  'mongodb+srv://netninja:test1234@net-ninja-tuts-del96.mongodb.net/node-tuts';

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); //now we can access req.body and get data
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// routes
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// blog routes
app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

app.get('/blogs', (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render('index', { blogs: result, title: 'All blogs' });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post('/blogs', (req, res) => {
  // console.log(req.body);
  const blog = new Blog(req.body);

  blog
    .save()
    .then((result) => {
      res.redirect('/blogs');
    })
    .catch((err) => {
      console.log(err);
    });
});
//route parameters or params (:id)
app.get('/blogs/:id', (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render('details', { blog: result, title: 'Blog Details' });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.delete('/blogs/:id', (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: '/blogs' });
    })
    .catch((err) => {
      console.log(err);
    });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
 */

/******************************************************/
//Check lesson 10 and 11 from net ninja latest course
//https://github.com/iamshaunjp/node-crash-course

/***********3 may 2021 */
//Advance Node.js
//Youtube - https://www.youtube.com/watch?v=qG-PLm3APSs time = 51:00 - bcrypt
/* 
process.env.UV_THREADPOOL_SIZE = 1;
const http = require('http');
const bcrypt = require('bcrypt');

http
  .createServer((req, res) => {
    bcrypt.hash('codedamn forever', 2).then((hash) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.write(hash);
      res.end();
    });
  })
  .listen(3000);
 */
//*********************************Advance node */
// another Video of advance Node.js
//playlist https://www.youtube.com/watch?v=7GKzby-LhHo&list=PLKu4a5OPnvu6-u8-w7D_QAQg2FmCCvC5-&index=2
//also the above playlist has been downloaded inside the folder - F:\1 Full Stack\1 NodeJS & Express\Node.js Advance 1 - 165
//the below code is demonstrating the multithread concept in node.js (but we have allways know that node is single threaded which is not absloute true)
//FOR some reason below process.env variable is not working as expected. (video 12)
/* 
process.env.UV_THREADPOOL_SIZE = 2;
const crypto = require('crypto');

const start = Date.now();

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('1:', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('2:', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('3:', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('4:', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('5:', Date.now() - start);
});
 */
//video 14
//async - doing some network request
// the below code is handled by OS thru LIBUV (and not thru thread pool) as its a low level function which OS can deal better.
//No thread pool is touched during the excution of this prg
/* 
const https = require('https');
const start = Date.now();

function doRequest() {
  https
    .request('https://www.google.com', (res) => {
      res.on('data', () => {});
      res.on('end', () => {
        console.log(Date.now() - start);
      });
    })
    .end();
}

doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
 */

//the below code can be used to test the block of eventloop and to avoid that we use "cluster Mode"
//https://www.youtube.com/watch?v=pndkFSws_T0&list=PLKu4a5OPnvu6-u8-w7D_QAQg2FmCCvC5-&index=24
// the commented code can be removed after the block is shown
/* 
//const cluster = require('cluster') //after the block has happened then uncomment to boost performance
//console.log(cluster.isMaster); // this will show true if cluster is master

if (cluster.isMaster) {
  cluster.fork();
  cluster.fork();
  cluster.fork();
  cluster.fork();
  cluster.fork();
} else {
  const express = require('express');
  const app = express();

  function doWork(duration) {
    const start = Date.now();
    while (Date.now() - start < duration) {}
  }

  app.get('/', (req, res) => {
    doWork(5000);
    res.send('Hi there');
  });

  app.get('/fast', (req, res) => {
    res.send('this was fast!');
  });
  app.listen(3000);
}
 */

//Now we will look into how to use PM2 process manager
//https://www.youtube.com/watch?v=ixU9uAiPVBE&list=PLKu4a5OPnvu6-u8-w7D_QAQg2FmCCvC5-&index=29

/* 
const express = require('express');
const app = express();

function doWork(duration) {
  const start = Date.now();
  while (Date.now() - start < duration) {}
}

app.get('/', (req, res) => {
  doWork(5000);
  res.send('Hi there');
});

app.get('/fast', (req, res) => {
  res.send('this was fast!');
});
app.listen(3000);
 */

//Worker Threads how to define and how it works for performance boost
//https://www.youtube.com/watch?v=oTbsVD4Pm40&list=PLKu4a5OPnvu6-u8-w7D_QAQg2FmCCvC5-&index=32
/* 
const express = require('express');
const app = express();
const crypto = require('crypto');
const Worker = require('webworker-threads').Worker;

app.get('/', (req, res) => {
  const worker = new Worker(function () {
    this.onmessage = function () {
      let counter = 0;
      while (counter < 1e9) {
        counter++;
      }
      postMessage(counter);
    };
  });

  worker.onmessage = function (message) {
    console.log(message.data);
    res.send('' + message.data);
  };

  worker.postMessage();
});

app.listen(3000);
 */

// goto this github for the project
//https://github.com/StephenGrider/AdvancedNodeStarter

//**************praticesing codes ******
//******promise*****/
//https://www.youtube.com/watch?v=vXO9odcxuPE
/* 
const fs = require('fs');

function readFile(fileName) {
  return new Promise((resolve, reject) => {
    let fileData = fs.readFileSync(fileName, 'utf-8');

    if (fileData) resolve(fileData);
    else reject('file is empty');
  });
}
// the function will always returns promise so we use .then & .catch
readFile('read1.txt')
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log('Custom err:', err);
  });
 */
/* 
//Asynch always return promise
async function printHello() {
  return 'hello';
}
console.log(printHello());
 */
//use of Asynch and await.
//the below code show how a console.log doesn't wait for the setTimeout and excutes with pending (later we use async and await)
/* 
//Inital code
function first() {
  return new Promise((reslove) => {
    setTimeout(function () {
      reslove('first');
    }, 4000);
  });
}

function second() {
  const mess = first();
  console.log('second prg', mess);
}
second();
 */
//updated code to see how async and await works
/* 
function first() {
  return new Promise((reslove) => {
    setTimeout(function () {
      reslove('frist');
    }, 3000);
  });
}

async function second() {
  const mess = await first();
  console.log('Second Prg', mess);
}
second();
 */

//*************Unit Testing with Jasmine****/
//examplejasmin
/* 
var earth = {
  isRound: true,
  numberFromSun: 3,
  density: 5.51,
};

describe('Earth', function () {
  it('is round', function () {
    expect(earth.isRound).toEqual(true);
  });

  it('is the third planet from the sun', function () {
    expect(earth.numberFromSun).toEqual(3);
  });

  it('is the densest of all the planets', function () {
    expect(earth.density).toBeGreaterThan(5.5);
  });
});
 */

//**************************/ 08/05/2021
//THIS with call so that the THIS changes
/*
let colt = {
  fname: 'kiran',
  sayHi: function () {
    return 'Hi ' + this.fname;
  },
};

let lilly = {
  fname: 'Lilly',
};

console.log(colt.sayHi());
console.log(colt.sayHi.call(lilly));
 */
//another example for THIS with call and Apply with Arguments, check the table(call,apply,bind) in the folded reference sheet created.
//https://vimeo.com/199705851
//https://vimeo.com/user56901917/videos/page:70/sort:date/format:thumbnail
//https://vimeo.com/user56901917/videos/page:41/sort:date/format:thumbnail
//https://vimeo.com/user56901917/videos/page:40/sort:date/format:thumbnail
//https://vimeo.com/user56901917/videos/page:36/sort:date/format:thumbnail
//https://vimeo.com/user56901917/videos/page:34/sort:date/format:thumbnail
//https://vimeo.com/user56901917/videos/page:33/sort:date/format:thumbnail

//
//
/* 
let colt = {
  fname: 'kiran',
  sayHi: function () {
    return 'Hi ' + this.fname;
  },
  addNum: function (a, b, c, d) {
    return this.fname + ' Just cal ' + (a + b + c + d);
  },
};

let lilly = {
  fname: 'Lilly',
};

//console.log(colt.addNum(1, 2, 3, 4));
//console.log(colt.addNum.call(lilly, 1, 2, 3, 4));
//console.log(colt.addNum.apply(lilly, [1, 2, 3, 4]));

let lillyBind = colt.addNum.bind(lilly, 1, 2, 3, 4);
console.log(lillyBind());

let lillyBind1 = colt.addNum.bind(lilly, 1, 2);
console.log(lillyBind1(5));
 */
/* 
// Create Constructor function
https: https: https: function Dog(name, age) {
  this.name = name;
  this.age = age;
  this.bark = function () {
    console.log(this.name + ' Just Barked');
  };
}
let rusty = new Dog('Rusty', 3);
rusty.bark();
 */
//prototype

//interview Question
//let a = 0 != '';

//let a =0 != ''            // false, type coercion made
//let a = 0 != 0; // false
//let a =false != '0'       // false

//let a =0 !== ''           // true, no type coercion
//let a =0 !== '0'          // true
//let a =false !== '0'      // true

//let a = 0n == false;    // this all are Falsy value (false, '', "", 0, -0, 0n, NaN, null, undefined)
//console.log(a);

//try to understand the below code - Using destructuring Assignment to Pass an Object as a Function's Parameters
/* 
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};

const half = ({ max, min }) => (max + min) / 2.0;
console.log(half(stats)); //will display 28.015
 */
/* 
let var1 = ({ height, width, title } = {
  title: 'Menu',
  height: 200,
  width: 100,
});
console.log(var1);
 */

//Refactoring using Prototype
//https://vimeo.com/199705815
//Inefficent code Need refactoring as we do new for person object we need define the sayHi function on that object.
/* 
function Person(name) {
  this.name = name;
  this.sayHi = function () {
    return 'Hi' + this.name;
  };
}

kiran = new Person('Kiran');
console.log(kiran.sayHi());

//Factoring the above code using prototype
function Person1(name) {
  this.name = name;
}
Person1.prototype.sayHi = function () {
  return 'Hi ' + this.name;
};

elie = new Person1('Elie');
console.log(elie.sayHi());
 */
/* 
//Excersie - in the same above video 
//1)Create a constructor function for a Vehicle: every object created from this constructor should have a make, model, and year property. 
//  Each object should also have a property called isRunning, which should be set to false
//2)Every object created from the Vehicle constructor should have a function called turnOn, which changes the isRunning property to true
//3)Every object created from the Vehicle constructor should have a function called turnOff, which changes the isRunning property to false
//4)Every object created from the Vehicle constructor should have a method called honk, which returns the string "beep" ONLY if the isRunning property is true

function Vehicle(make,model,year) {
  this.make = make
  this.model = model
  this.year = year
  this.isRunning = false
}

Vechile.prototype.turnOn = function(){
  this.isRunning = true;
}

Vechile.prototype.turnOff = function () {
  this.isRunning = false;
};

Vechile.prototype.honk = function () {
  if (this.isRunning)  {
    return "beep!"
  }
 */
//https://webdev.slides.com/eschoppik
//https://webdev.slides.com/eschoppik/advanced-array-methods#/8/0/0
//forEach - Arrays
//example
/* 
var arr = [1, 2, 3];

arr.forEach(function (value, index, array) {
  console.log(value);
});
 */
/* 
function halfValues(arr){
    var newArr = [];
    arr.forEach(function(val){
        newArr.push(val / 2);
    });
    return newArr;
}

halfValues([2,4,6]); // [1,2,3]
 */
//www.javatpoint.com/javascript-mcq
//aws lambda

//https://exploringjs.com/es2016-es2017/ch_async-functions.html
//THE abov link is a good read about async function please read it
//Let’s start with the Array method map(). In the following code, we want to download the files pointed to by an Array of URLs and return them in an Array.
/* 
async function downloadContent(urls) {
  const promiseArray = urls.map((url) => httpGet(url));
  return Promise.all(promiseArray);
}
 */
/* 
//Unit testing with async functions #
import assert from 'assert';
test('Testing async code', async function () {
    const result1 = await asyncFunc1();
    assert.strictEqual(result1, 'a');
    const result2 = await asyncFunc2();
    assert.strictEqual(result2, 'b');
});
//There are thus two advantages to using async functions for asynchronous unit tests in mocha: the code is more concise and returning Promises is taken care of, too.

 */
//interviw question - what will happen
//https://www.youtube.com/watch?v=Fkbt8NTPc2o&list=PLIGDNOJWiL1_3vYHL_Ka3WlF5rATsStB_
/* 
https: for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
 */
/* 
console.log(+true);
console.log(!'Lydia');
 */
/* 
//https://www.youtube.com/watch?v=xwq2q357oFg&list=PLIGDNOJWiL1_3vYHL_Ka3WlF5rATsStB_&index=2
let num = 0;
console.log(num++);
console.log(++num);
console.log(num);
 */
//Tagged Template literal
/* 
function getKir(one, two, three) {
  console.log(one);
  console.log(two);
  console.log(three);
}

const person = 'Lydia';
const age = 21;

getKir`${person} is ${age} year old`;
 */

/* 
console.log({ age: 18 } === { age: 18 });
console.log({ age: 18 } == { age: 18 });
 */
/* 
const sum = eval('10*10+5');
console.log(sum);
 */
//if u use below code with let we will get syntax error but with var the value is updated.
/* 
var num = 8;
var num = 10;

console.log(num);
*/
//https://www.youtube.com/watch?v=weQB5ZI3fx0&t=23s
/* 
const obj = { a: 'one', b: 'two', a: 'threee' };
console.log(obj);
 */
/* 
for (let i = 1; i < 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
 */
/* 
var fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
console.log(fruits);
console.log(fruits.toString());

console.log(fruits.pop());
console.log(fruits.toString());
fruits.push('Kiwi');
console.log(fruits);

var fruits1 = ['Banana', 'Orange', 'Apple', 'Mango'];
var x = fruits1.push('Kiwi');
console.log(x);
console.log(x == fruits1.length);
 */

//array intersection
//method 1 I liked it easy for me
/* 
function getIntersection(ar1, ar2) {
  let result = [];
  let Newar1 = new Set(ar1);
  let Newar2 = new Set(ar2);
  Newar1.forEach(function (ele1) {
    Newar2.forEach(function (ele2) {
      if (ele1 === ele2) {
        return result.push(ele1);
      }
    });
  });
  return result;
}

//console.log(getIntersection([3, 4, 8, 2, 5, 6], [10, 14, 6, 3, 9, 15]));
console.log(
  getIntersection([3, 4, 8, 2, 5, 6, 6, 3, 6], [10, 14, 6, 3, 9, 15])
);
 */
//method 2 quick one
/* 
// Return elements of array a that are also in b in linear time:
function intersect(a, b) {
  //return [...new Set(a)].filter(Set.prototype.has, new Set(b));
  //return [...new Set(a)].filter((x) => new Set(b).has(x));
  //return [...new Set(a)].filter((x) => b.includes(x));
  //return [...new Set(a)].filter((x) => [...new Set(b)].includes(x));
}
console.log(intersect([3, 4, 8, 2, 5, 6, 6, 3, 6], [10, 14, 6, 3, 9, 15]));
 */
/* 
// Example: of using set and forEach
function logSetElements(value1, value2, set) {
  console.log(`s[${value1}] = ${value2}`);
}

new Set(['foo', 'bar', undefined]).forEach(logSetElements);
 */

//https://www.youtube.com/watch?v=weQB5ZI3fx0&t=223s
/* 
String.prototype.givePizza = () => {
  return 'Just Give Kiran pizza';
};
const name = 'Kiran';
console.log(name.givePizza());
 */
/* 
String.prototype.givePizza = function () {
  return 'Just Give Kiran pizza';
};
const name = 'Kiran';
console.log(name.givePizza());
 */
/* 
const a = {};
const b = { key: 'b' };
const c = { key: 'c' };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
 */
/* 
const foo = () => console.log('first');
const bar = () => setTimeout(() => console.log('second'));
const baz = () => console.log('third');

bar();
foo();
baz();
 */
//https://www.youtube.com/watch?v=pHhFYxnhLDs
//43 question
//Spread Operator splits a string to indivual element
//console.log([...'kiran']);
//
//*******Promise */
//example 1
/* 
var promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve('hello world');
  }, 2000);
});

promise.then(function (data) {
  console.log(data);
});
 */
//example 2
/* 
var promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject('We are all going to die');
  }, 2000);
});

promise.then(
  function success(data) {
    console.log(data);
  },
  function error(data) {
    console.error(data);
  }
);
 */
//example 3
//You can call resolve and reject multiple times, but this is useless. Once a promise is finished, it can't restart.
/* 
var promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve('hello world 1');
    resolve('hello world 2');
    resolve('hello world 3');
    resolve('hello world 4');
  }, 1000);
});

promise.then(function success(data) {
  console.log(data);
});
 */
// nice article on promise
//https://www.digitalocean.com/community/tutorials/understanding-javascript-promises

//***************************************/
//code to display node.js is not single threaded becz of 4 thread pools
/* 
const crypto = require('crypto');

const start = Date.now();

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('1:', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('2:', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('3:', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('4:', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('5:', Date.now() - start);
});

console.log('Encryption started');
 */

//Multiply with given arguments - coding addict
//https://www.youtube.com/watch?v=DXiibb0l5S4
/* 
const multiply = (...args) => {
  const result = args.reduce((acc, value) => {
    return value ? value * acc : value + acc;
  });
  return result;
};

console.log(multiply(4, 5));
 */

//Dates - Finding the diff between dates
//https://www.youtube.com/watch?v=JQrDjM6pTcg
/* 
const date1 = new Date('May 27, 2021');
const date2 = new Date('June 5 , 2023');

const getDays = (date1, date2) =>
  Math.round(Math.abs(date2 - date1) / (1000 * 3600 * 24));
 */

//Callback Functions
/* 
function show(x) {
  return x + 5;
}

function display(callback) {
  return callback(4);
}
console.log(display(show));
 */

/*
//multi dimension array adding with flat and Infinity and reduce
arr = [
  [
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
  ],
  [
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
  ],
];

const total = arr.flat(Infinity).reduce((a, b) => a + b);
console.log(total);

*/
//pdf challenege 12a
/* 
arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];

function posarr(num) {
  let result = [];
  num.forEach((ele) => {
    if (ele >= 0) {
      result.push(ele);
    }
  });
  return result;
}
console.log(posarr(arr));
 */

//pdf challenge 13
/* 
arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];

function max(ele) {
  let maxnum = ele[0];

  for (let i = 0; i < ele.length; i++) {
    if (ele[i] < maxnum) {
      maxnum = ele[i];
    }
  }
  return maxnum;
}

console.log(max(arr));
 */
//**************prime*********/
/* 
const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    // console.log(s);
    if (num === 1) return false;
    if (num === 2) return true;
    if (num === 3) return true;
    if (num === 4) return false;
    if (num % i === 0) return false;
    return num > 1;
  }
};

//**challenge #17
Calculate the sum of digits
of a positive integer number */
/*
function sumDigits(n) {
  let s = n.toString();
  let sum = 0;

  for (let char of s) {
    let digit = parseInt(char);
    sum += digit;
  }
  return sum;
}

let sumP = sumDigits(123456);
console.log(sumP);


console.log(isPrime(7));
 */

//add score with weightage given using reduce
/* 
const scores = [
  { score: 90, subject: 'HTML', weight: 0.2 },
  { score: 95, subject: 'CSS', weight: 0.3 },
  { score: 85, subject: 'JavaScript', weight: 0.5 },
];

console.log(scores.reduce((x, y) => x + y.score * y.weight, 0));
 */

/* 
//find max and min using reduce 

let arr = [3.24, 2.78, 999];
arr.reduce((x, y) => Math.max(x, y));
arr.reduce((x, y) => Math.min(x, y));
 */

//Count the frequency of elements using reduce
/* 
let str = 'helloworld';

str.split('').reduce((result, currentChar) => {
  result[currentChar] ? result[currentChar]++ : (result[currentChar] = 1);
  console.log(result);
  return result;
}, {});
 */

//Flattening of multiple arrays using reduce
/* 
const arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

function Flat(arr = []) {
  return arr.reduce((t, v) => t.concat(Array.isArray(v) ? Flat(v) : v), []);
}
console.log(Flat(arr));
 */
