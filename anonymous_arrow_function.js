//a. Print odd numbers in an array
var arr = [1, 2, 3, 4, 5, 6];

(function()//anonymous function 
{
	for (var i of arr)
	{
		(i % 2 == 1) ?  console.log(i) : "" // ternary operator	
		
	}

})();//IIFE

//Convert all the strings to title caps in a string array
var str=["banu", "guvi"];
for (var j of str)
{
	//console.log()
console.log(j.slice(0, 1).toUpperCase() + j.slice(1))
}

//Sum of all numbers in an array
var sum = 0;
for (var i of arr)
	{
		 sum = sum + i
	}
		console.log(sum)
		
// Return all the prime numbers in an array
	//....
	
var a = arr.map((b) =>
{
	(b % 2 == 1) ?  console.log(b) : "" // ternary operator	
		
}
)

//console.log(a(arr))

