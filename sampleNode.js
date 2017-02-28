var http=require('http');
var server=http.createServer(function(req,res){
    
    var arr=[1,2,3,'4','80','Gopi','Ram',0];
    var a='String';
    arr.forEach(function(Element){
         if(typeof Element==typeof a)
             {
            res.write('\n' +Element); 

             }
        
//         res.write(' ' +Element + "/n");  
    });
    
//    if(==String)
//        {
//    res.write('array of strings' +arr); 
//
//        }
//   res.write('array lenth' +arr.length); 
    res.end();
});
server.listen(50261,'127.0.0.1');
console.log('server running on port number 50261');