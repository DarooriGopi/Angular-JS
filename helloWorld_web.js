var http=require('http');
var server=http.createServer(function(req,res){
    var a=50;
    var b=60;
   res.write('a+b=' +(a+b)); 
    console.log((a+b));
    res.end();
});
server.listen(50261,'127.0.0.1');
console.log('server running on port number 50261');