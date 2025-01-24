var index=0; //ایندکس برای آرایه
let body=document.querySelector('body');
function changeColors(){ //تابع تغییر رنگ پس زمینه
    var colors=["red","blue","green","pink","purple","yellow","orange","brown","black","white"]; // آرایه ای از رنگ ها
    body.style.background=colors[index++];
    if(index>colors.length - 1){
        index=0;
    }
}