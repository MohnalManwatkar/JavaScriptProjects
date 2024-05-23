
const form = document.getElementById('form');
const input = document.getElementById('task-input');
const list = document.getElementById("retrive-list");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    formValidation();
});

// check the input that input is given or not. If input is given then accept this input.
var formValidation = () => {
    if (input.value === '') {
        alert('Write something in the textbox.');
        console.log('Write something in the textbox.');
    } else {
        console.log('Success');
        acceptData();
    }
};

var data = [];  // given input is stored inside the data 

var acceptData = () => {
    data.push(input.value);  // input is push inside the data
    // json object convert into json string and this string store inside our local storage.
    localStorage.setItem('todos', JSON.stringify(data)); 
    console.log(data);
    createData(); // after accept the data retrive the data on the page
};

var createData = () => {
    list.innerHTML = '';
    // 
    data.forEach((item, index) => {
        list.innerHTML += `
        <li>
            ${item}
            <button onclick="updateList(${index})" class="btn">Update</button>
            <button onclick="deleteList(${index})" class="btn">Delete</button>
        </li>
        `;
    });
    input.value = "";
};

var updateList = (index) => {
    var newValue = prompt("Update the task:", data[index]);
    if (newValue) {
        data[index] = newValue;
        localStorage.setItem('todos', JSON.stringify(data));
        createData();
    }
};

var deleteList = (index) => {
    data.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(data));
    createData();
};

// Initialize the data from localStorage
// convert JSON strings into JavaScript objects 
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('todos')) {
        data = JSON.parse(localStorage.getItem('todos'));
        createData();
    }
});
