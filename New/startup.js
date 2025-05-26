
let emp =new Object();
emp.id=1;
emp.employeeName = 'Ani';
emp.salary=200000;
emp.id=4;

function functionClick(){
    let pValue=document.getElementsByTagName('p')[0].innerHTML;
    let paraValue =document.getElementById('para2').innerHTML;
    let paraName=document.getElementsByName('paraName')[0].innerHTML;
    let paraClass=document.getElementsByClassName('paraClass')[0].innerHTML;
console.log(pValue);
console.log(paraValue);
console.log(paraName);
console.log(paraClass);
} 