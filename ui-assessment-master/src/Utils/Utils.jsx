
export function getPercentual(successfull, total){    
    return ((successfull / total)  * 100).toFixed(2);
}

export function fromTimestampToDate(timestamp){
    return new Date(timestamp).toLocaleDateString();
}