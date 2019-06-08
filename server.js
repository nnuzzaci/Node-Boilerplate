
//
var express = require('express');
var app = express();
var path = require('path');
var http = require('http').Server(app);
var io = require('socket.io')(http);

//
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.use('/', express.static( path.join(__dirname, 'public') ));

//
app.get('/', function(req, res){
  res.render('pages/app', {title: 'Hello World', view:'app'});
});

//
app.get('/mobile', function(req, res){
  res.render('pages/mobile', {title: 'Mobile', view: 'mobile'});
});

//
io.on('connection', function(socket){ console.log('socket.id: ' + socket.id);

  socket.on('changeBackground', function(){
    color = getRandomColor();
    io.emit('changeBackground', color);
  });

  //
  socket.on('disconnect', function(){
    console.log('disconnect '+socket.id )
  });


});

//
http.listen(app.get('port'), function(){
  console.log('listening on *:'+ app.get('port') );
});

//
let getRandomColor = () => {
  var colors = ["#B3DBF2","#A7CFE8","#64A2CC","#62CCDD","#92E0EA","#ABDDD3","#D8E27D","#F7B189","#EF6950","#E6808A","#EE9889","#EEC7C2","#FAC1B4","#E8899C","#92E0EA","#FFB8C6","#ABDDD3","#9480B2","#BBB0D6","#B4A0FF","#9C89E9","#FAC1B4","#E6EDC0","#8FD88B","#5DC1AE","#C0DCE6"]
	return colors[Math.floor(Math.random() * colors.length)];
}
