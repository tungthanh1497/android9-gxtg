// module.exports = [
//   {
//     name: "Linh Ca",
//     age: 16,
//     image:"http://kenh14cdn.com/2017/16105485-1455844831123077-5879960679786806858-n-1497890356348.jpg"
//   },
//   {
//     name: "Quân Kun",
//     age: 21,
//     image: "http://www.xaluan.com/images/news/Image/2014/02/15/quan-kun-_vn1.jpg"
//   },
//   {
//     name: "Lệ Rơi",
//     age: 27,
//     image:"https://i.ytimg.com/vi/tAKXiqwUC6Q/hqdefault.jpg"
//   }
// ];

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var hottieSchema = new Schema({
    name: String,
    age: Number,
    image: String
  }
);
var hottieModel = mongoose.model("Hottie", hottieSchema);

module.exports = hottieModel;
