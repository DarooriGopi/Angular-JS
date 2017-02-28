var repeat=angular.module("repeatModule",[])
repeat.controller("repeatController",["$scope","studentService",function($scope,studentService){
    $scope.msg="Student Info System";
    $scope.students=[{StudentName:'Gopi', RollNo:123, maths: 45, eng: 67, hindi: 87, gender: 'male', ExpectedSalary: 1034},
                    {StudentName:'Ramu', RollNo:124, maths: 66, eng: 78, hindi: 77, gender: 'male', ExpectedSalary: 1054},
                    {StudentName:'Sai', RollNo:125, maths: 87, eng: 88, hindi: 89, gender: 'male', ExpectedSalary: 1076},
                    {StudentName:'Bittu', RollNo:126, maths: 76, eng: 99, hindi: 99, gender: 'male', ExpectedSalary: 1055},
                    {StudentName:'Mounika', RollNo:127, maths: 56, eng: 77, hindi: 90, gender: 'female', ExpectedSalary: 1004}];
    
    $scope.students.forEach(function(student){
        
        student.TotalMarks=studentService.getTotalMarks(student);
    });
//    $scope.students.forEach(function(student){
//        
//        student.Percentage=studentService.getPercentage(student);
//    });
    $scope.saveStudent=function(){
        var gender=$scope.std.gender ? 'male' : 'female';
        $scope.students.push({StudentName:$scope.std.StudentName, RollNo:$scope.std.RollNo, maths: $scope.std.maths, eng: $scope.std.eng, hindi: $scope.std.hindi, gender: gender, ExpectedSalary: 100021});
        $scope.students[$scope.students.length-1].TotalMarks= studentService.getTotalMarks($scope.std);
    }
    $scope.showStudent=function(index){
        $scope.std=$scope.students[index];
    }
}]);