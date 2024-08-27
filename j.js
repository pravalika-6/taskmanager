// script.js
document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('addTaskButton');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    function createTaskElement(taskText) {
      const li = document.createElement('li');
      li.textContent = taskText;
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.onclick = function() {
        taskList.removeChild(li);
      };
  
      li.appendChild(deleteButton);
      return li;
    }
  
    addTaskButton.addEventListener('click', () => {
      const taskText = taskInput.value.trim();
  
      if (taskText === '') {
        alert('Please enter a task.');
        return;
      }
  
      const taskElement = createTaskElement(taskText);
      taskList.appendChild(taskElement);
      taskInput.value = '';
    });
  
    taskInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        addTaskButton.click();
      }
    });
  });