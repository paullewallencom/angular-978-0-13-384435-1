try{
    var x = badVarName;
} catch (err){
    console.log(err.name + ': "' + err.message +  '" ocurred when assigning x.');
}