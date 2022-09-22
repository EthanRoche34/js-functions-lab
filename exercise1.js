fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const people = json;
    console.log(people);

     const completed = people.filter((todo, index) => {
        console.log(`${index} - ${todo.completed}`);
        return todo.completed === true;
     });
     completed.forEach( (todo, index) => {
      console.log(`${todo.title} - ${todo.completed}`)
    })
  })
  .catch(function(err) { 
    console.log(err);
  });