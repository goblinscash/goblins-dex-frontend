const express = require("express");
const path = require("path");
const logger = require("morgan");
const helmet = require('helmet');
const app = express();

app.use(logger("dev"));

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      frameAncestors: ["'self'", 'https://*.onramper.com', 'https://onramper.com', 'https://www.onramper.com', 'https://localhost', 'http://localhost',"https://goblins.cash/", "https://dex.goblins.cash/"]
    }
  })
);

app.use(express.static(path.join(__dirname, "build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 3000;


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
