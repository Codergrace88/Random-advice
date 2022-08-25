
// //declare var;fetch url; add events to window;fetchadvice; render advice
// const API_url = 'https://api.adviceslip.com/advice'
// const adviceOutputNum = document.querySelector('.advice-generator-number')
// const adviceOutputQuote = document.querySelector('.advice-generator-quote')
// const adviceButton = document.querySelector('.advice-gen-btn')


// const getAdvice = async () =>{
// 	const response = await fetch (API_url)
// 	const data = await response.json()
// 	//console.log(data)
// 	return data
// }

// const renderAdv = async (advObject) =>{
// 	const {id,advice}=advObject
// 	adviceOutputNum.textContent = `ADVICE ${id}`
// 	adviceOutputQuote.textContent = advice
// }

// const generateAdv = async () =>{
// 	const data = await getAdvice()
// 	const advice = data.slip

// 	renderAdv(advice)
// }

// window.addEventListener('DOMContentLoaded', ()=>{
// 	adviceButton.addEventListener('click', generateAdv)
// })
// //getAdvice()