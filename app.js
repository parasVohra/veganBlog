const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Comment = require('./public/js/comment');

const data = require('./data');


mongoose.connect('mongodb+srv://paras966:parasvohra966@cluster0-jjlz1.mongodb.net/test?retryWrites=true');

let db = mongoose.connection;

//check for db errors
db.once('open', function(){
    console.log('connected with database')
})


//check for db error
db.on('error', function(err){
    console.log(err);
})





// init app
const app = express();

app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json());

//load views
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'pug');


//load css


app.use(express.static(path.join(__dirname, 'public')));


//home route
app.get('/', function(req, res){
    res.render('index',{
        title:'VeganHood'
    });
});


//add route
app.get('/blog', function(req, res){
    Comment.find({}, function(err, comments){
        if(err){
            console.log(err);
            return;
        }
        else{
            console.log('res data' + comments )
    
            res.render('blog', {
                title: 'blog page',
                data : comments
            })
            return;
        }
    })
    
   
});

app.get('/blogList', function(req, res){
    res.render('blogList', {
        title: 'blogList page'
    })
});

app.get('/blog2', function(req, res){

    Comment.find({}, function(err, comments){
        if(err){
            console.log(err);
            return;
        }
        else{
            console.log('res data' + comments )
    
            res.render('blog2', {
                title: 'blog2 page',
                data : comments
            })
            return;
        }
    })
});

app.get('/blog3', function(req, res){

    Comment.find({}, function(err, comments){
        if(err){
            console.log(err);
            return;
        }
        else{
          //  console.log('res data' + comments )
    
            res.render('blog3', {
                title: 'blog3 page',
                data : comments
            })
            return;
        }
    })
});
app.get('/references', function(req, res){
    res.render('references', {
        title: 'blogList page'
    })
});

app.post('/blog', function(req, res){
    console.log(req.body.name)
    const comments = new Comment();
       comments.comment._id = new mongoose.Types.ObjectId(),
       comments.comment.blog = 'blog1';
       comments.comment.name = req.body.name;
       comments.comment.content = req.body.content;
       comments.comment.timeStamp = Date.now();
       comments.comment.likeCount = 0;

    comments.save().then(result => {
       // console.log(result);
        res.send(result);
        res.end();
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error : err
        })
        res.end();
    });
});

app.post('/del',function(req, res){
    Comment.remove({},  function(err) {
        if (err) {
            console.log(err)
        } else {
            res.end('success');
        }
    })
  
})


//start server
app.listen(8081, function(){
    console.log('server started at 8081')
});