var fs = require("fs")
var path = require("path")
var fileName = process.argv[2]
var filePath = path.join(__dirname,`./tableHtml/${fileName}.html`)

var data = require("./01.js")
var reg = /style="[^\"]*?"/g
var reg2 = /<\s*span\s*><o:p>(.*?)<\/o:p><\/\s*span\s*>/g

var replaceStr = `\n<Input v-model="" style="width:;" />\n`
var str1=data.replace(reg,"");
var str2=str1.replace(reg2,replaceStr);
fs.writeFile(filePath,str2,(err,res)=>{
	if(err){
		console.log("err",err)
	}else{
		console.log("\n")
		console.log("filepath",filePath)
		console.log("写入成功")
	}
})

// console.log("a",a)