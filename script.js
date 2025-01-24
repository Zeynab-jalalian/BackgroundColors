var index=0;
function changeColors(){
    var colors=["red","blue","green","yellow","purple","pink","black","white","brown","orange"];
    document.querySelector('body').style.background = colors[index++];
    if(index>colors.length - 1){
        index=0;
    }
}