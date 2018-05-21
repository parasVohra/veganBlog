const express = require('express');
const path = require('path');


// init app
const app = express();


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
    res.render('blog', {
        title: 'blog page'
    })
});
app.get('/blogList', function(req, res){
    res.render('blogList', {
        title: 'blogList page'
    })
});
app.get('/blog2', function(req, res){
    res.render('blog2', {
        title: 'blogList page'
    })
});



//start server
app.listen(8081, function(){
    console.log('server started at 3000')
});