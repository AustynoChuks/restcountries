let moneyFormat = (num)=>{
    if(isNaN(Number(num)))return num;

    let s = parseInt(num).toString();
    let remainder = (parseFloat(num) - parseInt(num)) * 100;
    let len = s.length - 1;
    let stringValue = "";
    let start = 0;
    let shift = 1;
    while(len >= start){
        let concatS = (shift%3===0) ? ','+s[len]:s[len];
        stringValue = concatS + stringValue;
        len--;
        shift++;
    }
    let fraction = (remainder == 0) ? '00':remainder;
    return stringValue.replace(/^,/, '')+'.'+fraction;
}

module.exports.moneyFormat = moneyFormat