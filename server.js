//Attendance: Jason Howell, Aysha S., Christian Guizar, Rach

const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('blog/index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }

//class4 page
  else if (page == '/aboutme') {
    fs.readFile('blog/class4/index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  } else if (page == '/class4/style.css'){
    fs.readFile('class4/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }

//spaceglobe page
  else if (page == '/space') {
    fs.readFile('blog/space/index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }else if (page == '/space/script.js'){
    fs.readFile('space/script.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/space/style.css'){
    fs.readFile('/space/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }

//computer page
  else if (page == '/computer') {
    fs.readFile('room/dist/index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }else if (page == '/room/dist/script.js'){
    fs.readFile('room/dist/script.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/room/dist/style.css'){
    fs.readFile('room/dist/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }

//404 Page  
  else if (page == '/404') {
    fs.readFile('/404/index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end(); 
    });
  }else if (page == '/404/script.js'){
    fs.readFile('404/script.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/404/style.css'){
    fs.readFile('/404/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }

//blog page
  else if (page == '/blog') {
    fs.readFile('/blog/index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  } else if (page == '/blog/style.css'){
    fs.readFile('blog/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }

  //jupiter page
  else if (page == '/jupiter') {
    fs.readFile('jupiter/index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }else if (page == '/jupiter/script.js'){
    fs.readFile('/jupiter/script.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/jupiter/style.css'){
    fs.readFile('jupiter/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }

  else if (page == '/otherotherpage') {
    fs.readFile('OldPages/otherotherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == 'OldPages/css/style.css'){
    fs.readFile('OldPages/css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == 'OldPages/js/main.js'){
    fs.readFile('OldPages/js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }


 else {
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(process.env.PORT || 5000);



//Removed content
//_____________________________________________________________________

// else if (page == '/api') {
//   if('student' in params){
//     if(params['student']== 'leon'){
//       res.writeHead(200, {'Content-Type': 'application/json'});
//       const objToJson = {
//         name: "leon",
//         status: "Boss Man",
//         currentOccupation: "Baller"
//       }
//       res.end(JSON.stringify(objToJson));
//     }//student = leon
//     else if(params['student'] != 'leon'){
//       res.writeHead(200, {'Content-Type': 'application/json'});
//       const objToJson = {
//         name: "unknown",
//         status: "unknown",
//         currentOccupation: "unknown"
//       }
//       res.end(JSON.stringify(objToJson));
//     }//student != leon
//   }//student if
// }//else if
// else if (page == '/css/style.css'){
//   fs.readFile('css/style.css', function(err, data) {
//     res.write(data);
//     res.end();
//   });
// } else if (page == '/js/main.js'){
//   fs.readFile('js/main.js', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/javascript'});
//     res.write(data);
//     res.end();
//   });
// } 