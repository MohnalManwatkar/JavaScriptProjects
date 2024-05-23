var form = document.getElementById("form");
var input = document.getElementById("input");
var msg = document.getElementById("msg");
var posts = document.getElementById("posts")

//Adding Event Listner to the form
form.addEventListener('submit', (e) => {
    e.preventDefault()

    formValidation() // after submiting this function will call
})

var formValidation = () => {
    if (input.value === "") {
        msg.innerHTML = "message cannot be blank please write something"
        console.log('failure')
    } else {
        console.log('success')
        msg.innerHTML = "";
        acceptData()
    }
}

// Accepting the data 
let data = {};

var acceptData = () => {
    data['text'] = input.value
    console.log(data)

    createPost()
}

// Create post
var createPost = () => {
    posts.innerHTML += `
        <div>
            <p>${data.text}</p>
            <span class="options">
                <button onclick="updatePost(this)">Update</button>
                <button onclick="deletePost(this)">delete</button>
            </span>
        </div>
    `;
    input.value = ""; //after creating post input text value become empty. 
}

// Update Post
var updatePost = (e) => {
    console.log(e)
    input.value = e.parentElement.previousElementSibling.innerHTML
    console.log(input.value)

    e.parentElement.parentElement.remove() 
}

// Delete Post
var deletePost = (e) => {
    console.log(e)
    console.log(input.value)

    e.parentElement.parentElement.remove()
}