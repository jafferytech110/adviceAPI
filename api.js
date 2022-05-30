//declaring variables to be used later
let adviceNumber = document.querySelector('.advice-number')
let advicePara = document.querySelector('.advice-para')
let newAdvice = document.querySelector('#advice-new')

// async await fetch
async function getAdvice() {
    let response = await fetch("https://api.adviceslip.com/advice")
    return await response.json()
    
}

getAdvice()
.then(data => {
    adviceNumber.innerText = `advice # ${data.slip.id}`
    advicePara.innerText = `"${data.slip.advice}"`
})

newAdvice.addEventListener('click',(e)=>{
    e.preventDefault()
    getAdvice()
})


