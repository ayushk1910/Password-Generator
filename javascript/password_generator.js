// datasets 
 const upperSet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 const lowerSet="abcdefghijklmnopqrstuvwxyz";
 const numberSet="0123456789";
 const characterSet="~!@#$%^&&8()_+/";
//selectors
const len=document.getElementById("range");
const upper=document.getElementById("upper");
const lower=document.getElementById("lower");
const numbers=document.getElementById("num");
const button=document.getElementById("button_generate");
const character=document.getElementById("special");
const display_box=document.getElementById("display_box");



const getRandomdata= (dataSet)=>{
     return dataSet[Math.floor(Math.random()*dataSet.length)]
 }


const generatePassword=(password="") =>{
     if(upper.checked){
         password=password+getRandomdata(upperSet);
     }
     if(lower.checked){
         password=password+getRandomdata(lowerSet);
     }
     if(numbers.checked){
         password=password+getRandomdata(numberSet);
     }
     if(character.checked){
         password=password+getRandomdata(characterSet);
     }
     if(password.length<len.value){
        return generatePassword(password);
     }
     console.log(password);
    return password;
}

function trim_password(pass,num){
      let ans=pass.substr(0,num);
      return ans;
}


function generate(){
    let ans=generatePassword();
    if(ans.length>len.value){
        ans=trim_password(ans,len.value);

    }
    console.log(ans);
    display_box.innerHTML=ans;


}

button.addEventListener('click',generate);



