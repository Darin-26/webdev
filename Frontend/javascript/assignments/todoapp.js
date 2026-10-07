let todo = []; 

let req = prompt("Please enter your request");

while (true) {
    if (req == "quit") {
        console.log("exiting...");
        break;
    }

    if (req == "list") {
        console.log("----------");
         for ( task of todo ) {
            console.log(task);
    }

    console.log("----------");
    } else if (req == "add") {
        let task = prompt("Enter your task: ");
        todo.push(task);
        console.log("task added"); 
    } else if ( req == "delete") {
        let idx = prompt("Enter index of task to delete");
        todo.splice(idx, 1);
        console.log("task deleted");
    }
   
    req = prompt("enter your request"); 
}
