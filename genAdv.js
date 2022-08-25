
const API_URL = 'https://api.adviceslip.com/advice'
const adviceOutputNum = document.querySelector('.advice-generator-number')
const adviceOutputQuote = document.querySelector('.advice-generator-quote')
const adviceButton = document.querySelector('.advice-gen-btn')

const randomAdvice = async () =>{
   const response =await  fetch(API_URL)
   const data = await response.json()
   const {slip} = data
   adviceOutputNum.textContent = `ADVICE #${slip.id}`
   adviceOutputQuote.textContent = slip.advice

   
   //console.log(data)
}
adviceButton.addEventListener('click', randomAdvice)
//randomAdvice()