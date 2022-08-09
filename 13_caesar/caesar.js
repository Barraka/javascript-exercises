const caesar = function(string,num) {
    let result=[];
    let temp=string.split("");
    if(Math.abs(num)>26) {
        let den=Math.floor(num/26);
        den*=26;
        num-=den;
    }
    temp.forEach(x=> {
        let currentChar=x.charCodeAt(0);
        let newChar=0;
        if(currentChar>=65 && currentChar<=90) {
            newChar=currentChar+num;
            if(newChar>90)newChar-=26;
            if(newChar<65)newChar+=26;
        }
        if(currentChar>=97 && currentChar<=122) {
            newChar=currentChar+num;
            if(newChar>122)newChar-=26;
            if(newChar<97)newChar+=26;
        }
        if(newChar)result.push(String.fromCharCode(newChar));
        else result.push(x);
    });
    return result.join("");

};

// Do not edit below this line
module.exports = caesar;
