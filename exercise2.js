fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const people = json;
    const todoTitles = people.map(todo => {
      return {
        title: `${todo.title}`
   };
  });

  console.log(todoTitles);


  })
  .catch(function(err) { 
    console.log(err);
  });