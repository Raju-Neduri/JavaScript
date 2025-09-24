const containerEl = document.getElementsByClassName("container")[0];

let values = [
  "Lover",
  "Father",
  "Son",
  "Student",
  "Employee",
  "Indian",
  "Husband",
];

let careerIndex = 0;
let characterIndex = 0;

updateText();

function updateText() {
  const currentWord = values[careerIndex];
  const firstLetter = currentWord[0].toLowerCase();
  const article = ["a", "e", "i", "o", "u"].includes(firstLetter) ? "an" : "a";

  containerEl.innerHTML = `<h1>I am ${article} ${currentWord.slice(
    0,
    characterIndex
  )}</h1>`;

  characterIndex++;
  if (characterIndex === currentWord.length + 1) {
    careerIndex++;
    characterIndex = 0;
  }

  if (careerIndex === values.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 500);
}
