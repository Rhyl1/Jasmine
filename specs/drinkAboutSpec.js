describe ("whatCanIDrink", function() {

    beforeEach(function(){
        age = new whatCanIDrink;
    });


    describe("age tests", function() {
        it("should return an error if <0 ", function (){
            age < (0);
            expect(window.alert).toHaveBeenCalledWith("Sorry. I can't tell what drink because the age is incorrect!");
        });
        it("should return a message if < 14", function(){
            age < (14);
            expect(console.log).toBe("Drink Toddy");
        })
        it("should return a message if < 18", function(){
            age < (18);
            expect(console.log).toBe("Drink Coke");
        })
        it("should return a message if < 21", function(){
            age < (21);
            expect(console.log).toBe("Drink Beer");
        })
        it("should return a message if < 130", function(){
            age < (130);
            expect(console.log).toBe("Drink Whisky");
        })
    });
});