/*
You are required to complete the above script so that the console.log 
statement displays only the completed todos. Use the Array.filter Higher 
Order Function in your solution.
*/

fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const completed = json.filter((todo) => todo.completed     // If the todo completed is true, the filter adds it to completed array.
     )                                                          // Using boolean stuff essentially
     completed.forEach( (todo, index) => {                      // Just goes through each todo in the completed array
      console.log(`${todo.title} - ${todo.completed}`)          // Prints the the title and completion status of each completed todo
    })
  })
  .catch(function(err) { 
    console.log(err);
  });
