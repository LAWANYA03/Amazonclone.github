const leftbtn=document.querySelector(".l-btn");
const rightbtn=document.querySelector(".r-btn");

rightbtn.addEventListener('click',function(event) {
    console.log('do0ne');
    const conent=document.querySelector('.product-slide');
    conent.scrolleft+=1100;
    event.preventDefault();

});
leftbtn.addEventListener('click',function(event){
    console.log('do0ne');
    const conent=document.querySelector('.product-slide');
    conent.scrolleft+=1100;
    event.preventDefault();

})

const backtop=document.querySelector(".backtop");

backtop.addEventListener("click",()=>{
    window,scrollTo({
top:0,
behavior:"smooth"
    });
})

const sidebar=document.querySelector(".sidebar");
const cross=document.querySelector(".fa-xmark");
const black=document.querySelector(".black");
const sidebtn=document.querySelector(".second-1");

sidebtn.addEventListener("click",()=>{
    sidebar.classList.add("active");
    cross.classList.add("active");
    black.classList.add("active");
})

cross.addEventListener("click",()=>{
    sidebar.classList.remove("active");
    cross.classList.remove("active");
    black.classList.remove("active");
})