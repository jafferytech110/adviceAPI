//declaring variables to be used later
let adviceNumber = document.querySelector('.advice-number')
let advicePara = document.querySelector('.advice-para')
let newAdvice = document.querySelector('#advice-new')

// async await fetch
async function getAdvice() {
    let response = await fetch("https://api.adviceslip.com/advice")
    return await response.json()
    
}

//calling api function
getAdvice()
.then(data=>{
    changeAdviceContent(data)
})

//changing content of advice
function changeAdviceContent(data) {
    adviceNumber.innerText = `advice # ${data.slip.id}`
    advicePara.innerText = `"${data.slip.advice}"`
}

//handling event
newAdvice.addEventListener('click',(e)=>{
    getAdvice()
    .then(data=>{
        changeAdviceContent(data)
    })
})



