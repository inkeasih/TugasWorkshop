/TugasWorkshop / web / routes /  jus.js
/*
 * GET jus25 listing.
 */

var databaseUrl = "localhost/mydb";
var collections = ["jus25"];
var db = require("mongojs").connect(databaseUrl, collections);

exports.list = function(req, res){

  // mencari dan menampilkan semua pegawai
	db.jus25.find(function(err, jus25) {
  	res.render('jus', {listOfJus: jus25, title: 'Daftar surat'});
	});
