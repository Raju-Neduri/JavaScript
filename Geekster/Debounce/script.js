let i = 0;
function getData() {
  console.log("Fetching data " + i++);
}
getData();

const input = document.getElementById("search");

function search(query) {
  console.log("Searching for:", query);
}

const debouncedSearch = debounce((e) => search(e.target.value), 300);

input.addEventListener("input", debouncedSearch);
