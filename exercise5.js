/*
In the fetch body, you are required to implement the exact requirement 
as Exercise 3 BUT replace the map-filter combination with the reduce HOF.
*/

fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const todoscompletedByUser = json.reduce((acc, todo) => {       //Reduce through each todo
      todo.completed
        ? acc                                                       //If the current todo is completed, acc stays the same
        : acc.push({ userId: todo.userId, title: todo.title })      //Otherwise it uses push to add the userID and title
      return acc;
    }, []);
    console.log(todoscompletedByUser);
  })
  .catch(function(err) {
    console.log(err);
  });
