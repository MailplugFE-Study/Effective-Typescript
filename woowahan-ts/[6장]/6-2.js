var developer2 = {
    work: function () {
        console.log("working...");
    },
};
developer2.work(); // working...
developer2.sleep(); // Property 'sleep' does not exist on type '{work() : void}'
var fruitBox = ["banana", "apple", "kiwi", "mango"];
var welcome = function (name) {
    console.log("Hello, ".concat(name, "!"));
};
var name = "zig";
var age = "zig";
