let input = prompt("Enter a task to add to your to-do list or type q to exit:");
while(input === null || input !== 'new' && input !== 'list' && input !== 'delete' && input !== 'q') {
  input = prompt("Input cannot be empty. Please enter a task or type q to exit:");
}
const tasks = [];
while(input.toLowerCase() !== "q" ) {
   if(input === 'new'){
    const newTask = prompt("Enter the new task:");
     tasks.push(newTask);
     console.log(`Task "${newTask}" added to your to-do list.`);
   }else if(input === 'list'){
    if(tasks.length === 0) {
        console.log("Your to-do list is empty.");
    }else{
    for (let ls in tasks){
        console.log(`${ls} :: ${tasks[ls]}`);
    }
  }
   }else if (input === 'delete'){
    const deleteIndex = prompt("Enter the index of the task to delete:");
    if (deleteIndex >= 0 && deleteIndex < tasks.length && !isNaN(deleteIndex)) {
        const deletedTask = tasks.splice(deleteIndex, 1);
        console.log(`Task "${deletedTask}" has been deleted from your to-do list.`);
    }else{
        console.log("Invalid index. Please enter a valid index to delete a task.");
    }
   }
   input = prompt("Enter a task to add to your to-do list or type q to exit:");

}
console.log("Thank you for using the to-do list app! Goodbye!");