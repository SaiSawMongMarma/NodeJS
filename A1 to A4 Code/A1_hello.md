//
11.Process Argument 
const mission = 'learn';
if(mission === 'learn'){
    console.log('Time to write some code');
}
else{
    console.log('If'+mission+'really more fun?');
    //console.log(`If ${mission} really more fun?`);
}
//
const mission = process.argv[2];
//argument in the second index
if(mission === 'learn'){
    console.log('Time to write some code');
}
else{
    //console.log('If'+mission+'really more fun?');
    console.log(`If ${mission} really more fun?`);
}
//node hello.js Explore
//Explore will be pass as an argument