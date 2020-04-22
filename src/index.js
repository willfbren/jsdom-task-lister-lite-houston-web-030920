document.addEventListener("DOMContentLoaded", () => {
  // your code here

  // selecting the form
  let form = document.querySelector('#create-task-form')

  // creating new dropdown select (stretch goals)
  select = document.createElement('select')

  // appending new dropdown to form
  form.append(select)

  // setting options for dropdown
  let options = ["High", "Medium", "Low"]
  options.forEach(function(element, key){
    select[key] = new Option(element, key)
  })



  form.addEventListener('submit', function(event){
    // gets input from form
    let input = document.querySelector("#new-task-description")

    // creates new list item with form submission
    let task = document.createElement('li')
    task.append(input.value)

    // creates delete button for task
    let button = document.createElement('button')
    button.append('Delete')

    // adds tasks and delete button to ul
    document.querySelector('#tasks').append(task, button)

    // removes task and button
    button.addEventListener('click', function(){
      task.remove()
      button.remove()
    });

    // sets color for task based on priority
    if (select.value == '0'){
      task.style.color = 'red'
    } else if (select.value == '1'){
      task.style.color = 'yellow'
    } else if (select.value == '2'){
      task.style.color = 'green'
    }

    // sets input value to empty string so it's blank
    input.value = ""
    event.preventDefault()
    
  })
});

