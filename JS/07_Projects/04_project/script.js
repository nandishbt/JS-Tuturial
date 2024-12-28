
let RandomNumber = parseInt(Math.random() * 100 + 1)
console.log(RandomNumber);



const button = document.querySelector('form')
const ramaining = document.querySelector('#rem')
const pre = document.querySelector('#pre')
const paras = document.querySelector('.paras')
const mes = document.querySelector('#mes')

button.addEventListener('submit' , (e)=>{

    e.preventDefault()

    const inp = document.querySelector('#inp').value

    if(inp == RandomNumber){
        paras.innerHTML = `Kuddos your guess is right ${inp}`
    }

    else{

        pre.innerHTML += ` ${inp}`;

        if(inp > RandomNumber){
            mes.innerHTML = `${inp} is greater than Mystery Number`
        }else if(inp < RandomNumber){
            mes.innerHTML = `${inp} is lesser than Mystery Number`
        }



        if(ramaining.textContent == 1){
            paras.innerHTML = `You Lost the Game , right answer is ${RandomNumber}`
        }
        
        ramaining.textContent -=1

        
        
    }

// console.log(inp);

})


