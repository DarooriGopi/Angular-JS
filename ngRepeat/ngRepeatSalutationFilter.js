var repeat=angular.module("repeatModule");
repeat.filter('salutation',function(){
    return function(input,gender){
        if(gender=='male')
            {
                return 'Mr.' +input;
            }
        else if(gender =='female')
            {
                return 'Miss.' +input;
            }
    }
    
});