/*
In the body of the fetch, you are required to write the code that 
creates an array of uncompleted todo objects, where an object contains 
a userID and todo title. It then displays the array:
*/

fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const uncompleted = json.filter((todo) => ! todo.completed            // Filters to just the todos with completed as false
     ).map(todo => (
      { userId : todo.userId, title : todo.title } 
      ) )                                                                  // Then from those, maps the userID and title to the uncompleted array
     console.log(uncompleted)
  })
  .catch(function(err) { 
    console.log(err);
  });
