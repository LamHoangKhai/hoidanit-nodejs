const getHomepage = (req, res) => {
  res.send("Hello ExpressJS2");
};

const getAbc = (req, res) => {
  res.render("example.ejs");
};



module.exports = {
  getHomepage,
  getAbc,
};
