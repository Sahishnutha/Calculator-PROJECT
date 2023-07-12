//function add(){
   // let a=5;
    //let b=6;
    //let c=7;
  //  document.write(c);
//}
function add(){
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    let c=a+b;
    document.getElementById("b1").innerHTML="The Addition is :" +c;
}
function sub(){
  let a=parseInt(document.getElementById("n1").value);
  let b=parseInt(document.getElementById("n2").value);
  let c=a-b;
  document.getElementById("b2").innerHTML="The Subtraction is :" +c;
}
function multi(){
  let a=parseInt(document.getElementById("n1").value);
  let b=parseInt(document.getElementById("n2").value);
  let c=a*b;
  document.getElementById("b3").innerHTML="The Multiplication is :" +c;
}
function div(){
  let a=parseInt(document.getElementById("n1").value);
  let b=parseInt(document.getElementById("n2").value);
  let c=a/b;
  document.getElementById("b4").innerHTML="The Division is :" +c;
}
function greaterthan(){
  let a=parseInt(document.getElementById("n1").value);
  let b=parseInt(document.getElementById("n2").value);
  let c=a>b;
  document.getElementById("b5").innerHTML="The Greater is:" +c;
}
function smallerthan(){
  let a=parseInt(document.getElementById("n1").value);
  let b=parseInt(document.getElementById("n2").value);
  let c=a<b;
  document.getElementById("b6").innerHTML="The Smaller is :" +c;
}