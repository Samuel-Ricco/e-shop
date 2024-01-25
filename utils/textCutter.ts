export const textCutter = (str:string)=>{
    if(str.length < 10){
        return str;
    }
    return str.substring(0,10) + "...";
}

export const textCutterCart = (str:string)=>{
    if(str.length < 80){
        return str;
    }
    return str.substring(0,80) + "...";
}

//TODO fare con css ellipsis