window.addEventListener("load", () => {
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector(".task_inputtitle");
  const list_el = document.querySelector("#display");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = input.value;
    if (!task) {
      alert("please fill out the task ");
      return;
    }
    //was easy uptill here ! 

    //no real difficulty begins : 3 constants are declared 
    const task_el = document.createElement("div");

    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");//added class to div with id content here 

    //to input text here 
    const task_text = document.createTextNode(task);

    task_content_el.appendChild(task_text);//inserted text 
    task_el.appendChild(task_content_el);//inside a div 
    list_el.appendChild(task_el);//inside div with id display 

   // Create a new button element
const button = document.createElement('button');
button.classList.add('deletebtn')
// Set the button text
button.innerHTML = 'Delete';

// Add the button to the task element
task_el.appendChild(button);

button.addEventListener('click', () => {
  task_el.remove();
});


  });
 

});
