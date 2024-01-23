export const textCutter = (str:string)=>{
    if(str.length < 10){
        return str;
    }
    return str.substring(0,10) + "...";
}

//TODO fare con css ellipsis