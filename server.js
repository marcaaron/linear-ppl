const express = require('express');
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
let db;
const mongoURI = process.env.MONGODB_URI || 'mongodb://marcaaron:gm15410@ds044917.mlab.com:44917/ppl';

console.log(__dirname);
app.use(express.static('build'));

app.get('/', (req, res) => res.sendFile('/index.html'));

app.get('/archive', (req, res) => res.sendFile(path.resolve(__dirname, "..",'/archive')));

MongoClient.connect(mongoURI, function(err, database){
	if (err)
		throw err
	else{
		db=database.db('ppl');
		app.listen(port, ()=> console.log(`app live on port 3000`, __dirname));
	}
});

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/', function(req, res) {
   // Insert JSON straight into MongoDB
  db.collection('exLists').insert(req.body, function (err, result) {
      if (err)
         res.send('Error');
      else
        res.send('Success');
  });
});

app.get('/json', function(req, res){
	db.collection('exLists').find({}).sort({_id:-1}).limit(6).toArray(function(err, workouts){
		res.status(200).json({'workouts': workouts});
	});
});

app.get('/workouts', function(req, res){
	db.collection('exLists').find({}).toArray(function(err, workouts){
		res.status(200).json({'workouts': workouts});
	});
});
