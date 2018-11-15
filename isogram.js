


export const isIsogram = (string) => {
    
    if(string === '')
        return true

   const lowerCaseString = string.toLowerCase()
   const noDashString = lowerCaseString.replace(/[-]/g, '')
   const cleanString = noDashString.replace(/[' ']/g, '')

   const stringArray = cleanString.split('')
   
   const checkDupes = ((current, index) => stringArray.indexOf(current) === index)
   
   if(stringArray.every(checkDupes)) {
    return true
   }else{
    return false
   }




    
    
} 
