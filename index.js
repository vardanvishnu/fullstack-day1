const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Store blog posts
let blogs = [
    { id: 1, title: "HTML", author: "Admin" },
    { id: 2, title: "CSS", author: "Admin" }
];

// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to My Express Server");
});

// GET - View all blogs
app.get("/blogs", (req, res) => {
    res.json(blogs);
});

// POST - Add a new blog
app.post("/blogs", (req, res) => {

    const newBlog = {
        id: blogs.length + 1,
        title: req.body.title,
        author: req.body.author
    };

    blogs.push(newBlog);

    res.status(201).json({
        message: "Blog Added Successfully",
        blog: newBlog
    });

});

// PUT - Update a blog
app.put("/blogs/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const blog = blogs.find(blog => blog.id === id);

    if (!blog) {
        return res.status(404).json({
            message: "Blog not found"
        });
    }

    blog.title = req.body.title;
    blog.author = req.body.author;

    res.json({
        message: "Blog Updated Successfully",
        blog: blog
    });

});

// DELETE - Delete a blog
app.delete("/blogs/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const index = blogs.findIndex(blog => blog.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Blog not found"
        });
    }

    const deletedBlog = blogs.splice(index, 1);

    res.json({
        message: "Blog Deleted Successfully",
        blog: deletedBlog[0]
    });

});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});