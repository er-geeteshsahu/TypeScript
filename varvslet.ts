function Test(){
    var marks: number = 33;
    var result: string = "pass";
    if(marks < 33){
        var result:string = "fail";
        console.log("Inner if condition Result: "+result);
    }
    console.log("Outter if condition Result "+result);
}
Test();