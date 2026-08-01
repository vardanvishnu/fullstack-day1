const form = document.getElementById("blogForm");
const blogList = document.getElementById("blogList");

// Load Blogs
function loadBlogs() {

    fetch("http://localhost:3000/blogs")
    .then(response => response.json())
    .then(data => {

        blogList.innerHTML = "";

        data.forEach(blog => {

            blogList.innerHTML += `

            <div class="blog-card">

                <h3>${blog.title}</h3>

                <p>Author : ${blog.author}</p>

                <button onclick="editBlog(${blog.id})">

                    Edit

                </button>

                <button onclick="deleteBlog(${blog.id})">

                    Delete

                </button>

            </div>

            `;

        });

    });

}

loadBlogs();

// Add Blog
form.addEventListener("submit", function(e){

    e.preventDefault();

    const title=document.getElementById("title").value;

    const author=document.getElementById("author").value;

    fetch("http://localhost:3000/blogs",{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({

            title:title,

            author:author

        })

    })

    .then(response=>response.json())

    .then(data=>{

        alert(data.message);

        form.reset();

        loadBlogs();

    });

});

// Delete Blog
function deleteBlog(id){

    fetch(`http://localhost:3000/blogs/${id}`,{

        method:"DELETE"

    })

    .then(response=>response.json())

    .then(data=>{

        alert(data.message);

        loadBlogs();

    });

}

// Edit Blog
function editBlog(id){

    const title=prompt("Enter New Title");

    const author=prompt("Enter New Author");

    fetch(`http://localhost:3000/blogs/${id}`,{

        method:"PUT",

        headers:{

            "Content-Type":"application/json"

        },

        body:JSON.stringify({

            title:title,

            author:author

        })

    })

    .then(response=>response.json())

    .then(data=>{

        alert(data.message);

        loadBlogs();

    });

}