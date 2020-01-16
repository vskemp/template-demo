const http = require("http");
const express = require("express");
const app = express();

const server = http.createServer(app);
const PORT = 3000;

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

const blogData = [
    {
        title: "first blog post",
        content: "STUF STUF STUF STUF"
    },
    {
        title: "second blog post",
        content: "STUF STUF STUF STUF"
    },
    {
        title: "third blog post",
        content: "STUF STUF STUF STUF"
    }
];
// fnjdsfhjfhjf
app.get("/", (req, res) => {
    res.render("home", {
        locals: {
            pageTitle: "Home Page!",
            pageHeader: "It's the Home Page!"
        },
        partials: {
            header: "partials/header",
            nav: "partials/nav",
            footer: "partials/footer"
        }
    });
});

app.get("/blog", (req, res) => {

    // const blogHTML = [];
    // for (let post of blogData) {
    //     blogHTML.push(`<h2>${post.title}</h2>`);
    //     blogHTML.push(`<p>${post.content}</p>`)
    // }
    // const blogHTML = blogData.map((post) => {
    //     return `<h2>${post.title}</h2><p>${post.content}</p>`});
    
    res.render("blog", {
        locals: {
            pageTitle: "The Blog",
            // blogPosts: blogHTML.join(" ")
            blogPosts: blogData
        },
        partials: {
            header: "partials/header",
            nav: "partials/nav",
            footer: "partials/footer"
        }
    });
})

server.listen(PORT, () => {
    console.log(`Listening at ${PORT}`);
});