window.onload=init;

function init()
{
    console.log("window has loaded");
    state.i=0;
    state.j=0;
    state.k=0;
    state.l=0;
    state.m=0;
    state.n=0;
    
}

var state = {
    i : 0,
    j:0,
    k:0,
    l:0,
    m:0,
    n:0
};

function nextbody()
{
    console.log("inside function nextbody");
    console.log(state.i);
    var body=document.getElementById("body");
    if(state.i===0){
    body.setAttribute("class","body1");
        state.i++;
        console.log(state.i);
    }
    else
     if(state.i===1){
    body.setAttribute("class","body2");
         state.i++;
         console.log(state.i);
    }
    
}

function nexthair()
{
    console.log("inside function nexthair");
    console.log(state.j);
    var hair=document.getElementById("hair");
    if(state.j===0){
    hair.setAttribute("class","hair1");
        state.j++;
        console.log(state.j);
    }
    else
     if(state.j===1){
    hair.setAttribute("class","hair2");
         state.j++;
         console.log(state.j);
    }
    
}

function nextclothes()
{
    console.log("inside function nextclothes");
    
    console.log(state.k);
    var clothes=document.getElementById("clothes");
    
    if(state.k===0){
    clothes.setAttribute("class","clothes1");
        state.k++;
        console.log(state.k);
    }
    else
     if(state.k===1){
    clothes.setAttribute("class","clothes2");
         state.k++;
         console.log(state.k);
    }
    
}

function nextpower()
{
    console.log("inside function nextpower");
    
    console.log(state.l);
    var power=document.getElementById("power");
    
    if(state.l===0){
    power.setAttribute("class","superpower1");
        state.l++;
        console.log(state.l);
    }
    else
     if(state.l===1){
    power.setAttribute("class","superpower2");
         state.l++;
         console.log(state.l);
    }
    
}


function nextweapon()
{
    console.log("inside function nextweapon");
    
    console.log(state.n);
    var weapon=document.getElementById("weapon");
    
    if(state.n===0){
    weapon.setAttribute("class","weapon1");
        state.n++;
        console.log(state.n);
    }
    else
     if(state.n===1){
    weapon.setAttribute("class","weapon2");
         state.n++;
         console.log(state.n);
    }
    
}

function randSup() {
  const randomHeroUrl = getRandomData('hero');
  const container = document.querySelector('.hero-content');
  const newImg = document.createElement('img');
  newImg.setAttribute('src',randomHeroUrl);
  
  container.appendChild(newImg);
}

function getRandomData(type){
  return data[type][rn(data[type].length)];
}

const hero = ['weapon1.png',]

function rn(len) {
  return Math.floor(Math.random() * len);
}

const data = {
  hero
}
