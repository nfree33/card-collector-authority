$( ()=>{


console.log('js is connected')


// // //GRABBING ELEMENTS

// const $openBinder = $('.closed-binder')
// const $binder = $('.open-binder')
const $cardFront = $('.indexFront')
// // //EVENT LISTENERS
// $openBinder.on('click', (event)=>{
//     changeDisplayValue(event, $binder, 'block')
// })

$cardFront.on('click', (event)=>{
    $cardFront.innerHTML = `<img src={card.imgBack} style={{ width: '100%', height: '20vw', borderRadius: '10px' }} alt={card.name} class="indexBack"/>`

})




// // const flipCard = (event) => {
// //     $(event.currentTarget).toggleClass('card-back')
// // }


})
