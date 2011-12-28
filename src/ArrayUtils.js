Function.prototype.method = function(name, func){
    this.prototype[name] = func;
    return this;
};

Array.method('map', function(func){
    var resultArray = [];
    for (var i = 0; i < this.length; i++){
	resultArray.push(func(this[i]));
    };
    return resultArray;
});
