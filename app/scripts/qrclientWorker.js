importScripts("jsqrcode/grid.js");
importScripts("jsqrcode/version.js");
importScripts("jsqrcode/detector.js");
importScripts("jsqrcode/formatinf.js");
importScripts("jsqrcode/errorlevel.js");
importScripts("jsqrcode/bitmat.js");
importScripts("jsqrcode/datablock.js");
importScripts("jsqrcode/bmparser.js");
importScripts("jsqrcode/datamask.js");
importScripts("jsqrcode/rsdecoder.js");
importScripts("jsqrcode/gf256poly.js");
importScripts("jsqrcode/gf256.js");
importScripts("jsqrcode/decoder.js");
importScripts("jsqrcode/qrcode.js");
importScripts("jsqrcode/findpat.js");
importScripts("jsqrcode/alignpat.js");
importScripts("jsqrcode/databr.js");

self.addEventListener('message', function(e) {
  var imageData = e.data;
  try {
    var width = imageData.width;
    var height = imageData.height;
    var result = qrcode.decode(width, height, imageData);
    self.postMessage(result);
  }
  catch(e) {
    // consume the error.
    // console.log(e); // comment out during debug because it is just plain irritating
    self.postMessage(undefined);
  }
}, false);
