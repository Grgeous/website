function addition(){
    let x=0;
    x=document.getElementById('add1').value;
    let z=0;
    z=document.getElementById('add2').value;
    ans1= Number(x) + Number (z);
    document.getElementById('sum').value=ans1;
    if (x==false) {
        alert("x cannot be empty");
        } else {
        alert("z cannot be empty");

        }
}
function substraction(){
    let j=0;
    j=document.getElementById('sub1').value;
    let e=0;
    e=document.getElementById('sub2').value;
    ans2= Number(j) - Number (e);
    document.getElementById('subs').value=ans2;
    if (j==false) {
    alert("This feild");
    } else {
        alert("e cannot be empty");
    }

} 
function multiplication(){
    let t=0;
    t=document.getElementById('multiply1').value;
    let r=0;
    r=document.getElementById('multiply2').value;
    ans3= Number(t) * Number (r);
    document.getElementById('prod').value=ans3;
    if (t==false) {
        alert("This feild");
        } else {
            alert("r cannot be empty");
        }
    
    } 

function division(){
    let o=0;
    o=document.getElementById('div1').value;
    let v=0;
    v=document.getElementById('div2').value;
    ans4= Number(o) / Number (v);
    document.getElementById('quotient').value=ans4;
    if (o==false) {
        alert("This feild");
        } else {
            alert("v cannot be empty");
        }
    
}
//letage = prompt ("How old are you?,100");
//alert(age);

let isboss=confirm("Are you the boss?");
if(isboss==true){
    alert("Welcome boss!");
}
else {
    alert("Get lost");
}