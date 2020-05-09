const descriptionSelector = document.querySelector('.container .card-header .Description');
const reviewSelector = document.querySelector('.container .card-header .Review');
const characteristicsSelector = document.querySelector('.container .card-header .Characteristics');

const descriptionSelection = document.querySelector('.container #description ');
const reviewSelection = document.querySelector('.container #review');
const characteristicsSelection = document.querySelector('.container #characteristics');

descriptionSelector.addEventListener('click', function(){
	descriptionSelector.classList.add('selected');
	reviewSelector.classList.remove('selected');	 
	reviewSelection.classList.remove('show');
	characteristicsSelector.classList.remove('selected');	 
	characteristicsSelection.classList.remove('show');
	descriptionSelection.classList.add('show');
});

reviewSelector.addEventListener('click', function(){
	reviewSelector.classList.add('selected');	 
	reviewSelection.classList.add('show');
	descriptionSelector.classList.remove('selected');
	characteristicsSelector.classList.remove('selected');	 
	characteristicsSelection.classList.remove('show');
	descriptionSelection.classList.remove('show');
});

characteristicsSelector.addEventListener('click', function(){
	reviewSelector.classList.remove('selected');	 
	reviewSelection.classList.remove('show');
	descriptionSelector.classList.remove('selected');
	characteristicsSelector.classList.add('selected');	 
	characteristicsSelection.classList.add('show');
	descriptionSelection.classList.remove('show');
});