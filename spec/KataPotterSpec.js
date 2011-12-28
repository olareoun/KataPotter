describe("Book set creator", function(){
    it("one book basket returns one book set", function(){
	var basket = [0];
	var bookSetCreator = new BookSetCreator(basket);
	var bookSets = bookSetCreator.create();
	expect(bookSets.length).toBe(1);
    });
    it("two books basket returns one set if they are different", function(){
	var basket = ['a', 'b'];
	var bookSetCreator = new BookSetCreator(basket);
	var bookSets = bookSetCreator.create();
	expect(bookSets.length).toBe(1);
    });
    it("two books basket returns two sets if they are equal", function(){
	var basket = ['a', 'a'];
	var bookSetCreator = new BookSetCreator(basket);
	var bookSets = bookSetCreator.create();
	expect(bookSets.length).toBe(2);
    });
});
describe("KataPotter tests", function(){
    var calculator = new KataPotterCalculator(BookSetCreator);
    it("zero books costs 0", function(){
	var basket = [];
	expect(calculator.getPrice(basket)).toBe(0);
    });
    it("one book costs 8", function(){
	var basket = [0];
	expect(calculator.getPrice(basket)).toBe(8);
    });
    it("two equal books costs 16", function(){
	var basket = [0, 0];
	expect(calculator.getPrice(basket)).toBe(8 * 2);
    });
    it("three equal books costs 24", function(){
	var basket = [1, 1, 1];
	expect(calculator.getPrice(basket)).toBe(8 * 3);
    });
    it("two different books costs 15.2", function(){
	var basket = [0, 1];
	expect(calculator.getPrice(basket)).toBe(8 * 2 * 0.95);
    });
    it("three different books costs 21.6", function(){
	var basket = [0, 1, 2];
	expect(calculator.getPrice(basket)).toBe(8 * 3 * 0.9);
    });
    it("four different books costs 25.6", function(){
	var basket = [0, 1, 3, 4];
	expect(calculator.getPrice(basket)).toBe(8 * 4 * 0.8);
    });
    it("five different books costs 30", function(){
	var basket = [0, 1, 2, 3, 4];
	expect(calculator.getPrice(basket)).toBe(8 * 5 * 0.75);
    });
    it("[0, 0, 1] -> 8 + (8 * 2 * 0.95)", function(){
	var basket = [0, 0, 1];
	expect(calculator.getPrice(basket)).toBe(8 + (8 * 2 * 0.95));
    });
    it("[0, 0, 1, 1] -> 2 * (8 * 2 * 0.95)", function(){
	var basket = [0, 0, 1, 1];
	expect(calculator.getPrice(basket)).toBe(2 * (8 * 2 * 0.95));
    });
    it("[0, 1, 1, 2, 3, 4] -> 8 + (8 * 5 * 0.75)", function(){
	var basket = [0, 1, 1, 2, 3, 4];
	expect(calculator.getPrice(basket)).toBe(8 + (8 * 5 * 0.75));
    });
    it("[0, 0, 1, 1, 2, 2, 3, 4] -> 2 * (8 * 4 * 0.8)", function(){
	var basket = [0, 0, 1, 1, 2, 2, 3, 4];
	expect(calculator.getPrice(basket)).toBe(2 * (8 * 4 * 0.8));
    });
    it("[0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4] -> 3 * (8 * 5 * 0.75) + 2 * (8 * 4 * 0.8)", function(){
	var basket = [0, 0, 0, 0, 0, 
		      1, 1, 1, 1, 1, 
		      2, 2, 2, 2, 
		      3, 3, 3, 3, 3, 
		      4, 4, 4, 4
		     ];
	expect(calculator.getPrice(basket)).toBe(3 * (8 * 5 * 0.75) + 2 * (8 * 4 * 0.8));
    });
});
