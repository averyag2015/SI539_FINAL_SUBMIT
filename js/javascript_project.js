///////////////////////SWAP BLEACHERS PHOTO///////////////////////////////////
function changeBleacher(){
  document.getElementById("img_bleacher").src='images/'+'bleachers_fade'+'.png';
  document.getElementById("img_bleacher").alt='second Bleachers image';
}
img_src=document.getElementById("img_bleacher");
img_src.addEventListener("click",changeBleacher);
console.log('test')
///////////////////////BLACK PARADE//////////////////////
function changeBlack(){
  let varId2='black_album_2';
  document.getElementById("img_black").src='images/'+varId2+'.png';
  document.getElementById("img_bleacher").alt='second MCR image';
}
img_src2=document.getElementById("img_black");
img_src2.addEventListener("click",changeBlack);
///////////////////////BRIDGE//////////////////////
function changeBridge(){
  let varId3='bridge2';
  document.getElementById("img_bridge").src='images/'+varId3+'.png';
  document.getElementById("img_bridge").alt='second Simon and Garfunkel image';
}
img_src3=document.getElementById("img_bridge");
img_src3.addEventListener("click",changeBridge);
///////////////////////FLEET//////////////////////
function changeFleet(){
  let varId4='fleetwood2';
  document.getElementById("img_fleet").src='images/'+varId4+'.png';
  document.getElementById("img_fleet").alt='second Fleetwood Mac image';
}
img_src4=document.getElementById("img_fleet");
img_src4.addEventListener("click",changeFleet);
///////////////////////HAIM//////////////////////
function changeHaim(){
  let varId5='haim2';
  document.getElementById("img_haim").src='images/'+varId5+'.png';
  document.getElementById("img_haim").alt='second HAIM image';
}
img_src5=document.getElementById("img_haim");
img_src5.addEventListener("click",changeHaim);
///////////////////////PHE//////////////////////
function changePhe(){
  let varId6='phe2';
  document.getElementById("img_phe").src='images/'+varId6+'.png';
  document.getElementById("img_phe").alt='second Bridgers image';
}
img_src5=document.getElementById("img_phe");
img_src5.addEventListener("click",changePhe);
///////////////////////EES//////////////////////
function changeEes(){
  let varId7='ees2';
  document.getElementById("img_ees").src='images/'+varId7+'.png';
  document.getElementById("img_ees").alt='second Fugees image';
}
img_src5=document.getElementById("img_ees");
img_src5.addEventListener("click",changeEes);
///////////////////////KC//////////////////////
function changeKc(){
  let varId8='kc2';
  document.getElementById("img_kc").src='images/'+varId8+'.png';
  document.getElementById("img_kc").alt='second KC image';
}
img_src5=document.getElementById("img_kc");
img_src5.addEventListener("click",changeKc);
