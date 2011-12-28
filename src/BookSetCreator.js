var BookSetCreator = function(basket){
    var sets = [];
    var allocateBook = function(bookId){
	var set = findSetForBook(bookId);
	set.push(bookId);
	return;
    };
    var findSetForBook = function(bookId){
	for(var i = 0; i < sets.length; i++){
	    var set = sets[i];
	    if (set.indexOf(bookId) == -1){
		return set;
	    };
	};
	var set = [];
	sets.push(set);
	return set;
    };
    var recalibrateSets = function(){
	var setWith5 = getSetWithLength(5);
	var setWith3 = getSetWithLength(3);
	if (setWith5 && setWith3){
	    copyElementNonExistent(setWith5, setWith3);
	    recalibrateSets();
	};
	return;
    };
    var getSetWithLength = function (length){
	for (var i = 0; i < sets.length; i++){
	    if (sets[i].length == length){
		return sets[i];
	    };
	};
	return;
    };
    var copyElementNonExistent = function(source, target){
	var bookId = source.shift();
	while(bookId != undefined){
	    if (target.indexOf(bookId) == -1){
		target.push(bookId);
		return;
	    }
	    source.push(bookId);
	    bookId = source.shift();
	};
    };

    return {
	create: function(){
	    var bookId = basket.pop();
	    while (bookId != undefined){
		allocateBook(bookId);
		bookId = basket.pop();
	    };
	    recalibrateSets();
	    return sets;
	}
    }
};