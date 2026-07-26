const express = require("express");

const app = express();

const PORT = 3000;

// Middleware
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to My Express Server");
});

// GET Route
app.get("/blogs", (req, res) => {

    const blogs = [
        {
            id: 1,
            title: "Learning HTML"
        },
        {
            id: 2,
            title: "Learning CSS"
        },
        {
            id: 3,
            title: "Learning JavaScript"
        }
    ];

    res.json(blogs);

});

// POST Route
app.post("/blogs", (req, res) => {

    const blog = req.body;

    console.log(blog);

    res.status(201).json({
        message: "Blog Added Successfully",
        blog: blog
    });

});

// Start Server
app.listen(PORT, () => {

    console.log(`Server running at http://localhost:${PORT}`);

});
