let input = prompt('What would you like do?');
const todos = ['aaaaaaa', 'bbbbbb'];

while (input !== 'quit' && input !== 'q') {
  if (input === 'list') {
    console.log('**********')
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log('**********')

  } else if (input === 'new') {
    const newTodo = prompt('What is the new todo?');
    todos.push(newTodo);
    console.log(`${newTodo} added to the todo list`);

  } else if (input === 'delete') {
    const index = parseInt(prompt('Enter an index to delete'));
    if (!Number.isNaN(index)) {
      const deleted = todos.splice(index, 1); // 배열
      console.log(`Ok, deleted ${deleted[0]}`)
    } else {
      console.log('Unknown index')
    }
  }
  input = prompt('What would you like do?');
}
console.log('OK QUIT THE APP!')

