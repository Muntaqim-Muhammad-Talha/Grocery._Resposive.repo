const cardJuiceSection = document.getElementById('juice');
const cardFoodSection = document.getElementById('foods');

const btnChooseFood = document.getElementById('choose-food');
btnChooseFood.addEventListener('click', function(){
    
    cardFoodSection.style.display = 'grid';
    cardJuiceSection.style.display = 'none';
})
const btnChooseJuice = document.getElementById('choose-juice');
btnChooseJuice.addEventListener('click', function(){
    cardJuiceSection.style.display = 'grid';
    cardFoodSection.style.display = 'none';
})