let n=5;
let str="zarf"
let str1="";
let alfabe="abcçdefgğhıijklmnoöprsştuüvyz"
let index=0;
for(let i=0;i<str.length;i++){
for(let j=0;j<29;j++){
if(str[i]==alfabe[j]){
    index=n+j;
    if(j+n>28){
        index=j+n-29;
    }

    str1+=alfabe[index];
}
}
}
console.log(str1)