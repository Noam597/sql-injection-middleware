function sqlSyntax(value){
    
    if(value === undefined || value === null){
        return false
    }

    let sql_characters =/((\w|\d|\s)+)?[;='"]((\w|\d|\s)+)?/gi
  
    if(sql_characters.test(value)){ 
          return true 
    } 

    let sql_comment =/((\w|\d|\s)+)?--|#((\w|\d|\s)+)? /gi
      if(sql_comment.test(value)){ 
       return true
    }

     let sql_union = /((\w|\d)+)?(\s([\n]|'|")?)union([(\s)]+\w)([\n])?/gi
    if(sql_union.test(value)){ 
     return true
     }

     return false
}





function detectSqlInjection(req,res,next){

    let unclean = false


    const formValues = req.body; 

    if(sqlSyntax(req.orginalUrl) === true){
        unclean = true
    }
  
    for (const [key,value] of Object.entries(formValues)) {
  
        if(sqlSyntax(value) === true){
            unclean = true
        }
      
        }  
        if(unclean === true){
           return res.status(403).json({
            message:"SQL Injection Detected"
          })
        }else{
          next()
        }
}

module.exports = detectSqlInjection