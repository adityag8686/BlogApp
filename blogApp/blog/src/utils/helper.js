export  default function dateToNormal(date){
    
    const toNormal = date.split("T");
    return toNormal[0];
}