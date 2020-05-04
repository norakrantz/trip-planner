const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');


app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json);







//ERROR HANDLERS
// catch 404 (i.e., no route was hit) and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// handle all errors (anything passed into `next()`)
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.error(err);
  res.send("Something went wrong: " + err.message);
});



//listen on port 3000

const PORT = 3000;

const init = async () => {
  app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
}

init();
