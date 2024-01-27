function highlight() {
    //Write your code here
	const boldElements = document.querySelectorAll('strong');
	boldElements.forEach((element) => {
		element.style.color = 'green';
	});
}


function return_normal() {
    //Write your code hereconst bo
	const boldElements = document.querySelectorAll('strong');
	boldElements.forEach((element) =>{
		element.style.color = 'black';
	});
}
const link = document.getElementById('bold-high-link');
link.addEventListener('mouseover',highlight);
link.addEventListener('mouseout', return_normal);


