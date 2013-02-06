var databaseUrl = "localhost/mydb";
var collections = ["jus25"];
var db = require("mongojs").connect(databaseUrl, collections);

// mencari surat bernama Asysyura
db.jus25.find({name: "Asysyura"}, function(err, jus25) {
  if( err || !jus25) console.log("Tidak ada surat dengan nama Asysyura");
  else jus25.forEach( function(emps) {
    console.log(emps);
  });
});

// menyimpan data surat baru: AzZukhruf
db.jus25.save({name : "AzZukhruf", ayat : "89", arti: "perhiasan", gol: "makkiyah"}, function(err, saved) {
  if( err || !saved ) console.log("Surat 'AzZukhruf' gagal disimpan");
  else console.log("Data surat 'AzZukhruf' tersimpan");
});

// mengupdate data surat: AdDukhan
db.jus25.update({name : "AdDukhan"}, {$set: {ayat: "59"}}, function(err, updated) {
  if( err || !updated ) console.log("Data 'AdDukhan' gagal diperbaharui");
  else console.log("Data 'AdDukhan' berhasil diperbaharui");
});

// menyimpan data surat baru: AlJaatsiyah
db.jus25.find({name: "AlJaatsiyah"}, function(err, jus25) {
  if( err || !jus25) console.log("Tidak ada surat dengan nama AlJaatsiyah");
  else jus25.forEach( function(emps) {
    console.log(emps);
  });
});

// menyimpan data surat baru: AlAhqaf
db.jus25.find({name: "AlAhqaf"}, function(err, jus25) {
  if( err || !jus25) console.log("Tidak ada surat dengan nama AlAhqaf");
  else jus25.forEach( function(emps) {
    console.log(emps);
  });
});

