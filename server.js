const http = require("http");

// Helper function to generate the basic page structure with content
function generatePage(content) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Node.js Project</title>
    <style>
        body { 
        font-family: Arial, sans-serif; 
        margin: 0; 
        padding: 0; 
        
        }
        .nav-bar {
            display: flex;
            background-color: #333;
            padding: 10px 0;
            justify-content: center;
        }
        .nav-bar ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
        }
        .nav-bar li {
            margin: 0 15px;
        }
        .nav-bar a {
            color: white;
            text-decoration: none;
            font-weight: bold;
        }
        .content {
            
            height: 100vh; 
            width: 100vw;   
            padding: 20px;
            text-align: center;
            background: linear-gradient(90deg,rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%);        }
    </style>
</head>
<body>
    <header class="nav-bar">
        <nav>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    <div class="content">
        ${content}
    </div>
</body>
</html>
`;
}


const app = http.createServer((req, res) => {
    // Set the Content-Type header once at the start
    res.setHeader('Content-Type', 'text/html');

    let pageContent = "<h1>404 Page Not Found</h1><p>The requested URL was not found on this server.</p>";

    if (req.url === "/home") {
        pageContent = "<h1>Welcome to the Home Page!</h1><p>This is the main page content.</p>";
        statusCode = 200;

    } else if (req.url === "/about") {
        pageContent = "<h1>About Us</h1><p>We are a cool Node.js application.</p>";
        statusCode = 200;

    } else if (req.url === "/contact") {
        pageContent = "<h1>Contact Us</h1><p>Email us at info@example.com</p>";
        statusCode = 200;
    }

    // Write the complete HTML page and end the response
    res.write(generatePage(pageContent));
    res.end();
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});