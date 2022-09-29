/*
In the body of the fetch, you are required to write the 
code that creates a new array (todoTitles) containing 
just the titles of all the todos and then displays the array.
*/

fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const people = json;
    const todoTitles = people.map(todo => {   //Maps each title with it's todo into an array
      return {
        title: `${todo.title}`
   };
  });

  console.log(todoTitles);


  })
  .catch(function(err) { 
    console.log(err);
  });