// Declare variables below to save the different sections (divs) of your story//
let FirstButton = document.querySelector(".option-one");
let SecondButton = document.querySelector(".option-two");
let PutInScreen = document.querySelector(".option-one-screen");
let KeepItScreen = document.querySelector(".option-two-screen");
let BoyOne = document.querySelector(".boy-one");
let BoyTwo = document.querySelector(".option-one-end");
let Money = document.querySelector(".money");
let Lonely=document.querySelector(".option-two-end");
let StoryOpen=document.querySelector(".story-opening");


//When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!

FirstButton.onclick=function(){
PutInScreen.style.display="block";
    StoryOpen.style.display="none";
};

BoyOne.onclick=function(){
BoyTwo.style.display="block";
BoyTwo.style.backgroundColor="lightblue";
       PutInScreen.style.display="none";
};


//INSERT_VARIABLE.onclick=function(){
SecondButton.onclick=function(){
KeepItScreen.style.display="block";
    StoryOpen.style.display="none";
};


Money.onclick=function(){
Lonely.style.display="block";
Lonely.style.backgroundColor="gray";
};
