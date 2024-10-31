function generatePassword(length,includeLowercase,includeUppercase,includeNumbers,includeSymbols){
    const lowercaseChars="abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars="ABCEDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars="0123456789";
    const symbolChars="!@#$%^&*()_+=";
    let allowedChars="";
    let password="";

    allowedChars+=includeLowercase? lowercaseChars:""; //if includeLowercase is true (ternary operator case) lowercase will be included in string 
    allowedChars+=includeUppercase?uppercaseChars:"";//-otherwise "" will be included
    allowedChars+=includeNumbers?numberChars:"";
    allowedChars+=includeSymbols?symbolChars:"";
    if(length<=0){
        return `( Password length must be atleast 1 )`;
    }
    if(allowedChars.length===0)
    {
        return `(At least one set of characters needs to be selected)`;
    }
    for(let i=0;i<length;i++)
    {
        const randomIndex=Math.floor(Math.random()*allowedChars.length);
        password+=allowedChars[randomIndex];
    }
    return password;
}

const passwordLength=12;
const includeLowercase=true;
const includeUppercase=true;
const includeNumbers=true;
const includeSymbols=true;
const password=generatePassword(passwordLength,includeLowercase,includeUppercase,includeNumbers,includeSymbols);
console.log(`Generated  Password: ${password}` );
