var repeat=angular.module("repeatModule");
repeat.filter('percentageStatus',function(){
    return function(Percentage){
        if(Percentage<=100 && Percentage>=90)
            {
                return 'Excellent';
            }
        else if(Percentage<90 && Percentage>=80)
            {
                return 'Very Good';
            }
        else if(Percentage<80 && Percentage>=70)
            {
                return 'Good';
            }
        else if(Percentage<70)
            {
                return 'Fail';
            }
    }
    
});