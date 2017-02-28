var repeat=angular.module("repeatModule");
repeat.factory("studentService",[function(){
    var service= {
        getTotalMarks: function(student){
        return(student.maths+student.eng+student.hindi);
        }
//          getPercentage: function(student){
//        return(((student.maths+student.eng+student.hindi)/300)*100).toFixed(2);          
//        }
    };
    return service;
}]);

