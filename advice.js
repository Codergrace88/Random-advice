// const API_URL= 'https://api.adviceslip.com/advice'
// const adviceNumber = document.querySelector('.advice-generator-number')
// const adviceQuote = document.querySelector('.advice-generator-quote')
// const fetchBtn = document.querySelector('.advice-gen-btn')
// const fetchAdvice= async () =>{
//     const response = await fetch(API_URL)
//     const data = await response.json()
//     return data
// }

// const renderAdv = (adviceObj)=>{
// const {id,advice} = adviceObj
// adviceNumber.textContent =`ADVICE ${id}`
// adviceQuote.textContent=advice
// }

// const generateNewAdvice= async () =>{
//     const data = await fetchAdvice()
//     const advice = data.slip
//     renderAdv(advice)
// }


// window.addEventListener('DOMContentLoaded',()=>{
//     fetchBtn.addEventListener('click', generateNewAdvice)
// })