angular.module("repeatModule").directive('required',function(){
  return function(scope, element) {
		$(element).parents("div").children(":nth-child(1)").append("<span style='color: red'><strong>*</strong></span>");
	};
});