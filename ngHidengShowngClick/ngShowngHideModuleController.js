var student=angular.module("chsModule",[])
student.controller("chscntrl",["$scope",function($scope){
    $scope.msg="CLick Show Hide Events";
    $scope.msgShow=false;
    
    $scope.setMsgShow=function(){
        
        $scope.msgShow=true;  
    };
      

}]);