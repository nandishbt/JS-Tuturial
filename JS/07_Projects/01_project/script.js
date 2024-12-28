const h1 = document.querySelector('h1')

h1.textContent = "BG Color Changer"

const boxes = document.querySelectorAll('.box')
const main = document.querySelector('.main')
const button = document.querySelector('button')



boxes.forEach((box)=>{
   
    box.addEventListener('click',()=>{
        const computedStyles = window.getComputedStyle(box);
        // box.style.backgroundColor 
        const color = computedStyles.backgroundColor;
        // console.log(color);
            main.style.backgroundColor = color
    })
    
})

button.addEventListener('click',()=>{

    boxes.forEach((box)=>{
        box.style.backgroundColor = genRandomColor()
    })
 

})



function genRandomColor(){
    const arr = []

    for(var i = 0;i<3;i++){
   const random = Math.round( Math.random() * 255)

   arr.push(random)



    }

//    console.log(arr);

   let str = `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`

//    console.log(str);

    return str
}

// console.log(boxes);


