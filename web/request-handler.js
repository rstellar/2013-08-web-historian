var path = require('path');
module.exports.datadir = path.join(__dirname, "../data/sites.txt"); // tests will need to override this.

module.exports.handleRequest = function (req, res) {
  console.log(exports.datadir);

  //set up a router
  //user parsing of url to judge where to route 
  //AJAX calls to responed according to request type; PUT, GET, POST, DELET
  //Refer to other project for hints on router set up.
  //Consider using Shao's modular setup recommendation
  //
};
