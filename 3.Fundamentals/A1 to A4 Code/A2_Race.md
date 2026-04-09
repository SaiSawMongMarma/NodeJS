//Synchronous
console.log("Rabbit finishes!");
console.log("Turtle finishes!");

//Asynchronous
setTimeout(()=>console.log("Rabbit finishes!"),1000);
console.log("Turtle finishes!");