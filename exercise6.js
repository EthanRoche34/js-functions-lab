/*
In the body of the fetch, you are required to write 
the code that computes the number of completed todos 
per user. A user with no completed todos should not 
appear in the output. Use the Array.reduce HOF in your 
solution.
*/

fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const totalCompleted = json.reduce((acc, todo) => {  //Goes through the todos with redude
      if (todo.completed) {                              //If the current todo's completed status is true
        acc[todo.userId] === undefined                   //If there is no acc for the current userID
          ? (acc[todo.userId] = 1)                       //Then set the current userId's acc to 1
          : (acc[todo.userId] += 1);                     //Otherwise add 1 to the userId's acc count
      }
      return acc;
    }, {});
    console.log(totalCompleted);
  })
  .catch(function(err) {
    console.log(err);
  });
