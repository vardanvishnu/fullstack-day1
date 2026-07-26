const form = document.getElementById("blogForm");

const title = document.getElementById("title");

const content = document.getElementById("content");

const message = document.getElementById("message");

form.addEventListener("submit", function(event){

    event.preventDefault();

    if(title.value.trim() === ""){

        message.innerHTML = "❌ Please enter Blog Title";

        message.style.color = "red";

        return;

    }

    if(content.value.trim() === ""){

        message.innerHTML = "❌ Please enter Blog Content";

        message.style.color = "red";

        return;

    }

    message.innerHTML = "✅ Blog Added Successfully!";

    message.style.color = "green";

    form.reset();

});