const search = document.querySelector(".input-group input");
const table_rows = document.querySelectorAll("tbody tr");

search.addEventListener("input", searchTable);

function searchTable() {
	table_rows.forEach((row, i) => {
		let table_data = row.textContent.toLowerCase();
		let search_data = search.value.toLowerCase();

		row.classList.toggle('hide', table_data.indexOf(search_data) < 0);
		row.style.setProperty('--delay', i / 25 + 's')
	})
	document.querySelectorAll('tbody tr:not(.hide)').forEach((visible_row, i) => {
		visible_row.style.backgroundColor = (i % 2 == 0) ? 'transparent' : '#0000000b';
	});
}

// 0/25 = 0s
// 1/25 = 0.04s
// 2/25 = 0.08s
// 3/25 = 0.12s

