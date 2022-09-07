const dateFormat = require('dateformat')
export class StringHelper {
    /**
     * replaces <br/> elements in text
     * @param { string } text 
     */
    static replaceHtml_Br(text) {
        if (text) {
            return text.replace(/<br\/?>/g, '');
        }

        return null;
    }

    static replaceDecimalSeparator(text,currentSeparator,newSeparator){
        if(text){
            //return text.replace(currentSeparator,newSeparator)
            return text.toString().replace(currentSeparator,newSeparator)

        }
        return null;
    }

    static replaceDecimalSeparatorInArray(arrText,currentSeparator,newSeparator){
      
        if(typeof arrText==="string"){// single string
            arrText=this.replaceDecimalSeparator(arrText,currentSeparator,newSeparator)
            return arrText;
        }
        else if(typeof arrText==="object")
        {
            for (let index = 0; index < arrText.length; index++) {                
                arrText[index]=this.replaceDecimalSeparatorInArray(arrText[index],currentSeparator,newSeparator)
            }
            return arrText;
        }
        return null;
    }

    static addTimestampToText(text) {
        let date = new Date()
        date = dateFormat(date, "HH_MM_ss_l")
        let newText = text + date
        return newText
    }
    static splitString(str,splitter,index){
    let result=str.split(`${splitter}`)
    return result[index]
}
}