const counter=document.querySelector("#counter");
const btns= document.querySelectorAll('.btn');

let count=0;

btns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        const styles= e.currentTarget.classList
        // console.log(styles)

        if(styles.contains('increase')){
            count++;
           
        }else if(styles.contains('decrease')){
            count--
        }else{
            count=0
        }
        if(count>0){
            counter.style.color="green";
        }
        else if(count<0){
            counter.style.color="red";
        }
        else{
            counter.style.color="grey";
        }
        counter.textContent=count;
       
    })
})
