var equ="";
function onef(){
  equ+=document.getElementById("one").value;
  console.log(equ);
  document.getElementById("input_box").innerHTML=document.getElementById("one").value;
}
function twof(){
    equ+=document.getElementById("two").value;
  console.log(equ);
  document.getElementById("input_box").innerHTML=document.getElementById("two").value;
}
function thrf(){
    equ+=document.getElementById("three").value;
  console.log(equ);
  document.getElementById("input_box").innerHTML=document.getElementById("three").value;
}
function fouf(){
    equ+=document.getElementById("fou").value;
  console.log(equ);
  document.getElementById("input_box").innerHTML=document.getElementById("fou").value;
}
function fivf(){
    equ+=document.getElementById("fiv").value;
  console.log(equ);
  document.getElementById("input_box").innerHTML=document.getElementById("fiv").value;
}
function sixf(){
    equ+=document.getElementById("six").value;
  console.log(equ);
  document.getElementById("input_box").innerHTML=document.getElementById("six").value;
}
function sevf(){
    equ+=document.getElementById("sev").value;
  console.log(equ);
  document.getElementById("input_box").innerHTML=document.getElementById("sev").value;
}
function eigf(){
    equ+=document.getElementById("eig").value;
  console.log(equ);
  document.getElementById("input_box").innerHTML=document.getElementById("eig").value;
}
function ninf(){
    equ+=document.getElementById("nin").value;
  console.log(equ);
  document.getElementById("input_box").innerHTML=document.getElementById("nin").value;
}
function zerf(){
    equ+=document.getElementById("zer").value;
  console.log(equ);
  document.getElementById("input_box").innerHTML=document.getElementById("zer").value;
}
function dotf(){
    equ+=document.getElementById("dot").value;
  console.log(equ);
  document.getElementById("input_box").innerHTML=document.getElementById("dot").value;
}
function addf(){
    equ+=document.getElementById("add").value;
  console.log(equ);
  document.getElementById("input_box").innerHTML=document.getElementById("add").value;
}
function subf(){
    equ+=document.getElementById("sub").value;

  console.log(equ);
  document.getElementById("input_box").innerHTML=document.getElementById("sub").value;
}
function mulf(){
    equ+=document.getElementById("mul").value;
  console.log(equ);
  document.getElementById("input_box").innerHTML=document.getElementById("mul").value;
}
function dif(){
    equ+=document.getElementById("di").value;
  console.log(equ);
  document.getElementById("input_box").innerHTML=document.getElementById("di").value;
}


function calculate(){
    var equ_list=equ.split(" ");

     var a=0;
     var b=0;
     var sum=0;
     var flag=0;

    for(let i=0;i<equ_list.length;i++){

        if(equ_list[i]=='+'){
              sum= parseInt(equ_list[i-1])+parseInt(equ_list[i+1]);
              equ_list[i+1]=sum;
        }else if(equ_list[i]=='-'){
            sum= parseInt(equ_list[i-1])-parseInt(equ_list[i+1]);
            equ_list[i+1]=sum;
      }else if(equ_list[i]=='*'){
        sum= parseInt(equ_list[i-1])*parseInt(equ_list[i+1]);
        equ_list[i+1]=sum;
       }
       else if(equ_list[i]=='/'){
        sum= parseInt(equ_list[i-1])/parseInt(equ_list[i+1]);
        equ_list[i+1]=sum;
       }
    }

   document.getElementById("input_box").textContent=sum;

}