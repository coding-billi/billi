const todoArray = [{
        name: '',
        dueDate: ''
    }];

function htmlingArray () {

    let todoHTML = '';
    
    todoArray.forEach((todo) => {
        
        const { name, dueDate } = todo;
        
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>

        <button class="deleteButton">
            Delete
        </button>
        `;
        todoHTML += html;

    });

    document.querySelector('.displayDiv').innerHTML = todoHTML;

    document.querySelectorAll('.deleteButton')
    .forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            todoArray.splice(index, 1);
            htmlingArray();
        });
    });
}

function addingToArray () {

    const selectInputValue = document.querySelector('.input');
    const getInputValue = selectInputValue.value;
    selectInputValue.value = '';

    
    const selectDateInputValue = document.querySelector('.dateInput');
    const getDateValue = selectDateInputValue.value;

    const name = getInputValue;
    const dueDate = getDateValue;

    todoArray.push({name, dueDate});

    htmlingArray ();
}

function checkIfEnter (event) {

    if (event.key === 'Enter') {
        addingToArray ();
    }
}

const addButton1 = document.querySelector('.addButton');
addButton1.addEventListener('click', () => {
    addingToArray ();
});