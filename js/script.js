const ingridientsList = document.querySelector('.ingridients-list');
const addIngridientBtn = document.querySelector('.add-ingridient-btn');
const ingridientName = document.querySelector('.ingridient-input-name');
const ingridientQuantity = document.querySelector('.ingridient-input-quantity');
const checklistBlock = document.querySelector('.checklist');
const printList = document.querySelector('.print-list-items');
const recipeForm = document.querySelector('.recipe-form');
const checkForm = document.querySelector('.checklist-form');
const recipeCardTitle = document.querySelector('.recipe-card-title');
const recipeCardSubtitle = document.querySelector('.recipe-card-subtitle');
const recipeCardTitleInput = document.querySelector('.recipe-input-title');
const recipeCardSubtitleInput = document.querySelector('.recipe-input-subtitle');
const recipeCardBtn = document.querySelector('.recipe-card-btn');

let counter = 0;

recipeCardBtn.addEventListener('click', (e) => {
	e.preventDefault();
	if(recipeCardTitleInput.value != '' && recipeCardSubtitleInput != '') {
		recipeCardTitle.innerHTML = recipeCardTitleInput.value;
		recipeCardSubtitle.innerHTML = recipeCardSubtitleInput.value;
		
		recipeCardTitleInput.classList.toggle('input-hide');
		recipeCardBtn.classList.toggle('input-hide');
		recipeCardSubtitleInput.classList.toggle('input-hide');

		ingridientName.classList.toggle('input-hide');
		addIngridientBtn.classList.toggle('input-hide');
		ingridientQuantity.classList.toggle('input-hide');
		

	} else {
		alert('Введите название и описание')
	}
})

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
					// location.reload();
				})

			});
		}

		ingridientsList.prepend(newIngridient);

	} else {
		alert('Введите название и количество')
	}
});