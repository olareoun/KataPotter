var KataPotterCalculator = function(bookSetCreator){
    var calculateSetsPrice = function(sets){
	var price = 0;
	var pricesArray = sets.map(calculateSetPrice);
	for (var i = 0; i < pricesArray.length; i++){
	    price += pricesArray[i];
	};
	return price;
    };
    var calculateSetPrice = function(set){
	var setSize = set.length;
	return setSize * 8 * getDiscount(setSize);
    };
    return {
	getPrice: function(basket){
	    var setCreator = bookSetCreator(basket);
	    var sets = setCreator.create();
	    return calculateSetsPrice(sets);
	}
    }
};

function getDiscount(items){
    return items == 0 && 1 ||
	items == 1 && 1 ||
	items == 2 && 0.95 ||
	items == 3 && 0.9 ||
	items == 4 && 0.8 ||
	items == 5 && 0.75;
};

