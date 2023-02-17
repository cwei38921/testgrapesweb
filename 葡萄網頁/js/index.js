//打開/關閉 購物車
let openShopCart = document.getElementById('shop-cartcontent');
let shopCartbtn = document.getElementById('shop-cart-btn');
function showcart(){
    if(openShopCart.style.display == "none"){
         openShopCart.style.display="block";
    }
    else openShopCart.style.display="none";
}
shopCartbtn.onclick = showcart;

//計算價格傳到購物車
var fiveNormal = document.getElementById("graps-count0");
var twentyNormal = document.getElementById("graps-count1");
var fiveIce = document.getElementById("graps-count2");
var twentyIce = document.getElementById("graps-count3");
var valueArr = [];
var sum = document.getElementById("total");
var cardFiveNormal = document.getElementById('five-text');
var cardTwentyNormal = document.getElementById('twenty-text');
var cardFiveIce = document.getElementById('five-text-ice');
var cardTwentyIce = document.getElementById('twenty-text-ice');
var btnAddCart = document.getElementById("add-cart");
function getvalue(){
    total= 600*fiveNormal.value+650*fiveIce.value+2000*twentyNormal.value+2050*twentyIce.value;
    valueArr[0] = fiveNormal.value;
    valueArr[1] = twentyNormal.value;
    valueArr[2] = fiveIce.value;
    valueArr[3] = twentyIce.value;
    valueArr[4] = total;
    updateCard(valueArr[0],valueArr[1],valueArr[2],valueArr[3],valueArr[4]);
}
//更新到購物車上

function updateCard(a,b,c,d,e){
    if(a > 0){
        document.getElementById('five-normal').style.display = 'flex';
        cardFiveNormal.innerText = a;
    }else if(a == 0){
        document.getElementById('five-normal').style.display = 'none';
    }
    if(b > 0){
        document.getElementById('twenty-normal').style.display = 'flex';
        cardTwentyNormal.innerText = b;
    }else if(b == 0){
        document.getElementById('twenty-normal').style.display = 'none';
    }
    if(c > 0){
        document.getElementById('five-ice').style.display = 'flex';
        cardFiveIce.innerText = c;
    }else  if(c == 0){
        document.getElementById('five-ice').style.display = 'none';
    }
    if(d > 0){
        document.getElementById('twenty-ice').style.display = 'flex';
        cardTwentyIce.innerText = d
    }else if(d == 0){
        document.getElementById('twenty-ice').style.display = 'none';
    }
    sum.innerHTML = e;
    window.sessionStorage.setItem('fivenormal',valueArr[0]);
    window.sessionStorage.setItem('twentynormal',valueArr[1]);
    window.sessionStorage.setItem('fiveice',valueArr[2]);
    window.sessionStorage.setItem('twentyice',valueArr[3]);
    window.sessionStorage.setItem('price',valueArr[4]);
    
}

// 購物出上直接加減數量
var addBtn1 = document.getElementById('add-1');
var addBtn2 = document.getElementById('add-2');
var addBtn3 = document.getElementById('add-3');
var addBtn4 = document.getElementById('add-4');
var deleteBtn1 = document.getElementById('delete-1');
var deleteBtn2 = document.getElementById('delete-2');
var deleteBtn3 = document.getElementById('delete-3');
var deleteBtn4 = document.getElementById('delete-4');
addBtn1.onclick = function(){
    if(valueArr[0]<3){
        valueArr[0]++;
        valueArr[4]+=600;
        console.log(valueArr[0]); 
        updateCard(valueArr[0],valueArr[1],valueArr[2],valueArr[3],valueArr[4]);
        
    }
    // console.log(valueArr[0]);
};
deleteBtn1.onclick = function(){
    if(valueArr[0]>>0 ){
        valueArr[0]--;
        valueArr[4]-=600;
        console.log(valueArr[0]); 
        updateCard(valueArr[0],valueArr[1],valueArr[2],valueArr[3],valueArr[4]);   
    }
};
addBtn2.onclick = function(){
    if(valueArr[1]>=0 && valueArr[1]<15){
        valueArr[1]++;
        valueArr[4]+=2000;
        updateCard(valueArr[0],valueArr[1],valueArr[2],valueArr[3],valueArr[4]);
    }
    // console.log(valueArr[0]);
};
deleteBtn2.onclick = function(){
    if(valueArr[1]>0){
        valueArr[1]--;
        valueArr[4]-=2000;
        updateCard(valueArr[0],valueArr[1],valueArr[2],valueArr[3],valueArr[4]);    
    }
};
addBtn3.onclick = function(){
    if(valueArr[2]<3){
    valueArr[2]++;
    valueArr[4]+=650;
    updateCard(valueArr[0],valueArr[1],valueArr[2],valueArr[3],valueArr[4]);
}
// console.log(valueArr[0]);
};
deleteBtn3.onclick = function(){
    if(valueArr[2]>0 && valueArr[2]<=3){
        valueArr[2]--;
        valueArr[4]-=650;

        updateCard(valueArr[0],valueArr[1],valueArr[2],valueArr[3],valueArr[4]);    
    }
};
addBtn4.onclick = function(){
    if(valueArr[3]>=0 &&valueArr[3]<15){
        valueArr[3]++;
        valueArr[4]+=2050;
        updateCard(valueArr[0],valueArr[1],valueArr[2],valueArr[3],valueArr[4]);
    }
    // console.log(valueArr[0]);
};
deleteBtn4.onclick = function(){
    if(valueArr[3]>0){
        valueArr[3]--;
        valueArr[4]-=2050;
        updateCard(valueArr[0],valueArr[1],valueArr[2],valueArr[3],valueArr[4]);    
    }
};

btnAddCart.onclick = getvalue;

