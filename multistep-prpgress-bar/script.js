const progress=document.querySelector('.progess');
const prevBtn=document.querySelector('.prev-btn');
const nextBtn=document.querySelector('.next-btn');
const iconsWrapper=document.querySelectorAll('.icon-wrapper');

console.log(progress,prevBtn,nextBtn,iconsWrapper);

let currentSelectedStep=1;
//set current step
//added addEventListener
nextBtn.addEventListener('click',()=>{
    if(currentSelectedStep<iconsWrapper.length){
        currentSelectedStep++;
    }
    handleUpdateStep();
})

prevBtn.addEventListener('click',()=>{
    if(currentSelectedStep>1){
        currentSelectedStep--;
    }
    handleUpdateStep();
})

function handleUpdateStep(){
    //foreach loop will work but see the conditon we will add .active to allbutton
    iconsWrapper.forEach((item,index)=>{
        if(index<currentSelectedStep){
            item.classList.add('active')
            console.log(item);
        }
        item.classList.remove('active');
        console.log(item);
      
    }) 
    //only one things to calculate the widhth
    //currentSelectedStep=1
    //(1-1)/(4-1)*100;
    progress.style.width=((currentSelectedStep-1)/(iconsWrapper.length-1))*100+"%";

    if(currentSelectedStep===1){
        prevBtn.disabled =true;
    }
    else if(currentSelectedStep===iconsWrapper.length){
        nextBtn.disabled=true;
    }
    else{
        prevBtn.disabled=false;
        nextBtn.disabled=false;
    }
}