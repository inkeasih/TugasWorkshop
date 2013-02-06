TugasWorkshop/ web / routes / index.js
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Nke Express+mongoDB' });
};

