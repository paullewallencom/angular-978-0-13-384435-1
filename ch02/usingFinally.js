function testTryCatch(value){
    try {
        if (value < 0) {
            throw "too small";
        } else if (value > 10) {
            throw "too big";
        }
        // <YOUR_CODE_HERE>
    } catch (err) {
        console.log("The number was " + err);
    } finally {
        console.log("This is always written.");
    }
}