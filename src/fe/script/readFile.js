function readFile(file,callback){
  const fileReader = new FileReader()
  fileReader.onload=async function(e){
    callback(e.target.result)
  }
  fileReader.onerror=function(e){
    console.error('读取文件错误！')
  }
  fileReader.readAsArrayBuffer(file)
}