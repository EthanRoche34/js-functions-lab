fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const people = json;

    const uncompleted = people.filter((todo, index) => {
        console.log(`${index} - ${todo.comleted}`);
        return todo.completed === false;
    }).map( todo => {
        return {
          UserID: todo.userId,
          Title: todo.title, 
        };
    });
    console.log(uncompleted)
  })
  .catch(function(err) { 
    console.log(err);
  });