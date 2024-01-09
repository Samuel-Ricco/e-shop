export const TextCutter = (str:string)=>{
    if(str.length < 25){
        return str;
    }
    return str.substring(0,25) + "...";
}