// this core module path is needed to sending html template to frontend modularly
const path = require("path");

const rootDir = require("../util/path");

const express = require("express");

const adminData = require("./admin");
const { title } = require("process");

const router = express.Router();

router.get("/", (req, res, next) => {
  // console.log('In another middleware!');
  // res.setHeader('Content-Type', 'text/html');
  // res.send(`<h1>Hello from Express JS</h1>`);

  /* 
        path.join will be passed 3 params, 
        i.e.: (file directory, up and level(if file in different sibling folder),
        folder, filename), where the the path will be result of concatenation of these params.
        File Directory or __dirname param will point to the parent folder directory of the file its being used from,
        means that if the filename is in different folder than its being called from, needed 4 params and the second param will be
        up one level syntax('../' or './' or, '..' or '.' without forward slash '/' still acceptable), 
        where it gives an absolute path 

        Using utility function, we can further refactor the code above by combining __dirname & '..' using path.dirname, 
        the filename can be accessed by using 3 ways, 
        1. Directly accessing the file like this => // res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
        2. Can be accessed by by manually constructing filename like this => const HomePageHTML = `${rootDir}/views/shop.html`;
        3. Or using path.join method like below;
    */
  // create filepath using file name
  // const HomePageHTML = path.join(rootDir, "views", "shop.html");

  // console.log("shop.js", adminData.products);
  // Inject HTML file to client
  // res.sendFile(HomePageHTML);
  
  /*
        This .render() now renders/injects Pug files to browser, similar to .sendFile does for HTML and just have to pass
        filename as arguement without .pug extension as Express will append .pug to it as we are using Pug as main
        templating engine in app.js file
  */
  const products = adminData.products;

  // Injecting pug file to browser for rendering and passing dynamic data into object as 2nd arguement to be rendered there
  res.render('shop', {
    // passing data as key:value pair with key name can be assigned any name and easier to identify
    products: products,
    docTitle: 'Shop',
    path: '/',
  });
});

module.exports = router;
