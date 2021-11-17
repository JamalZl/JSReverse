function ReverseS(str) {
    let newstr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      newstr+=str[i];
    }
    return newstr;
}
console.log(ReverseS("Ronaldo says: he he he Siuuuuuu"));