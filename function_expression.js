function callMe(myFunction){
	myFunction();
}

//function expression

var helloWorld = function(){
	console.log("Hello world!");
};

callMe(helloWorld);

