const firstCard = document.querySelector('.container')
// const btn1 =  document.querySelector('.btn-1')
const thankYouCard = document.querySelector('.containerone')
let rating = 0
const number = document.querySelector('#two')
// number.innerHTML=`You selected ${rating} out of 5`

// console.log(btn1.innerHTML)
let ratingButtons = document.querySelectorAll('.rating-btn')

ratingButtons.forEach((ratingBtn)=>{
    ratingBtn.addEventListener('click',(e)=>{
        rating=e.target.innerText
        // console.log('the button is clicked and the rating is ',rating)
        number.innerHTML=`You selected ${rating} out of 5`
    })
})

const submitButton = document.querySelector('.submit')

submitButton.addEventListener('click',()=>{
    if(rating){
        thankYouCard.classList.remove('hide')
        firstCard.classList.add('hide')
    } else{
        alert('please provide rating')
    }
    
})
let rateAgain = document.querySelector('.rate-again')

rateAgain.addEventListener('click',()=>{
    thankYouCard.classList.add('hide')
    firstCard.classList.remove('hide')
    rating=undefined
})



   