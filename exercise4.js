/*
In the body of the fetch, you are required to write the 
code that computes (and displays) the number of completed 
todos. Use the Array.reduce HOF in your solution.
*/

fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const totalCompleted = json.reduce( (acc, todo) =>     // Runs through the array going todo by todo
          todo.completed ? acc+1 : acc                      // If the todo is completed, adds 1 to acc(just a count I think)
     ,0
     )
     console.log(totalCompleted)
  })
  .catch(function(err) { 
    console.log(err);
  });
