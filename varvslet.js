function Test() {
    var marks = 33;
    var result = "pass";
    if (marks < 33) {
        var result = "fail";
        console.log("Inner if condition Result: " + result);
    }
    console.log("Outter if condition Result " + result);
}
Test();
