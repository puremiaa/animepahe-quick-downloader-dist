// const s = `let xizovi = 5;let gaxazacadu = setInterval(function(){$("a.redirect").attr("href","#xokehogoxe").html(xizovi + " seconds");if (xizovi < 1) {clearInterval(gaxazacadu);$("a.redirect").attr("href","https://kwik.si/f/9LxhtyCgNBQR").html("Continue");}xizovi--;}, 1000);`

// const a = s.split('"');
// const l = a.find((e) => e.startsWith("https://kwik"));
// console.log(l);

const currentUrl = "https://kwik.si/f/8JO0Ngb2V64C";
let a = currentUrl.split("/");
const index = a.indexOf("f");
a[index] = "d";
const downloadUrl = a.join("/");
console.log(downloadUrl);
