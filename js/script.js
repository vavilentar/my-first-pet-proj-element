const ingridientsList = document.querySelector('.ingridients-list');
const addIngridientBtn = document.querySelector('.add-ingridient-btn');
let ingridientName = document.querySelector('.ingridient-input-name');
let ingridientQuantity = document.querySelector('.ingridient-input-quantity');
const checklistBlock = document.querySelector('.checklist');
const printList = document.querySelector('.print-list-items');
const recipeForm = document.querySelector('.recipe-form')
const checkForm = document.querySelector('.checklist-form')

let counter = 0;

addIngridientBtn.addEventListener('click', (e) => {
	e.preventDefault();
	if (ingridientName.value != '' && ingridientQuantity.value != '') {
		const newIngridient = document.createElement('li');
		newIngridient.classList.add('ingridient');
		newIngridient.innerHTML = `${ingridientName.value}  -  ${ingridientQuantity.value}`;


		ingridientName.value = '';
		ingridientQuantity.value = '';
		++counter;

		if (counter === 1) {
			const newBtnCreateList = document.createElement('button');
			const newBtnPrintList = document.createElement('button');

			newBtnCreateList.classList.add('form-button', 'create-checklist-btn');
			newBtnCreateList.innerHTML = `Создать список`
			ingridientsList.prepend(newBtnCreateList);
			newBtnCreateList.addEventListener('click', (e) => {
				e.preventDefault();
				recipeForm.style = "display: none;"
				checkForm.style = "display: block;"
				let ingridientsList = [];
				const elems = document.querySelectorAll('.ingridient');
				elems.forEach((e) => {
					ingridientsList.push(e.innerHTML);
				})
				ingridientsList.reverse();

				ingridientsList.forEach((e) => {
					checklistBlock.innerHTML += `
					<div class="ingridient">
					<input type="checkbox" name="shopping-check">
					<label for="shopping-check">${e}</label>
				   	</div>
					   `
				})

				newBtnPrintList.classList.add('form-button', 'create-printlist-btn');
				// newBtnPrintList.innerHTML = `<a target="_blank" href="./pages/print-list.html">Версия для печати</a>`
				newBtnPrintList.innerHTML = `Версия для печати`

				checklistBlock.appendChild(newBtnPrintList);
				
				newBtnPrintList.addEventListener('click', () => {
					recipeForm.style = 'display: none'
					checkForm.style = 'display: block; background-color: #fff'
					checklistBlock.removeChild(newBtnPrintList);
					window.print();
				})

			});
		}

		ingridientsList.prepend(newIngridient);

	} else {
		alert('Введите название и количество')
	}
});