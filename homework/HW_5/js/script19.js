"use strict"

let paragraphNum = parseInt(prompt('Введіть кількість абзаців'))
for (let i = 1; i <= paragraphNum; i++){
	document.write(`<h5>Заголовок ${i}</h5>`);
	for (let a = 1; a <= paragraphNum; a++) {
		document.write(`<p>Розділ ${i}, параграф ${a}</p>`);
	}
}
      
