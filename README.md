A node project must have a project.json. To create, simply run `npm init`.
Now let's add Express: `npm install --save express`. Notice the _node-modules_ package? Don't mess with it!

At this point you should have a _node-modules folder_ and a _package.json_.
_ _ _
__Time to use it!__

In the file.js include `var express = require('express');`.

To create pages, and then add some text you'd add
`app.get('/greeting', function(req, res){
  res.send("You found the greeting endpoint!");
});`
