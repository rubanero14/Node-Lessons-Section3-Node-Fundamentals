const path = require('path');
// console.log(require.main.filename);
// the code above will print => C:\Users\User\Documents\GitHub\Node-Lessons-Section3-Node-Fundamentals\app.js

// console.log(path.dirname(require.main.filename));
// the code above will print => C:\Users\User\Documents\GitHub\Node-Lessons-Section3-Node-Fundamentals
module.exports = path.dirname(require.main.filename);