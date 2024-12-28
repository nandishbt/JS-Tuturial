

const form = document.querySelector('form')

const h1 = document.querySelector('h1')

form.addEventListener('submit' , (e)=>{
    e.preventDefault()

    const age = document.querySelector('#age')
    const weight = document.querySelector('#weight')

    const Numr = weight.value
    const Deno = age.value * age.value

    const ans = (Numr / Deno  )

    if(ans > 0){
            h1.textContent = `Your BMI Index is ${ans}`
    }

    





    


})



