var sum=function(x){
  
	var count = 0;

    for(var i = 0; i < x.length; i++)
{   
    count = count + x[i];
    }
    return count;
};

sum([1,2,3]);

var mean = function(x){
	return sum(x)/(x.length);
};

mean([1,2,3]);

var median = function(x){
	var y = x.length;
	if (y/2 % 1) {
		return x[(y-1)/2];
	}; 
	if (!(y/2 % 1)) {
		first = x[(y/2)-1];
		second = x[y/2];
		return (first + second)/2;
	};
};
console.log(median([1,2,3,4,5]));
console.log(median([1,2,3,4,5,6]));