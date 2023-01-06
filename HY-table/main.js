const search = document.querySelector(".input-group input");
const table_rows = document.querySelectorAll("tbody tr");

search.addEventListener("input", searchTable);

function searchTable() {
	table_rows.forEach((row, i) => {
		console.log(row.textContent);
	});
}

// 왜 에러가 나왓고 해결을 어떻게 했는지 설명하기~!!
// (".input-group input");
// ("input-group input");
