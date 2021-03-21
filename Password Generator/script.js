const characterAmountRange = document.getElementById("characterAmountRange");
const characterAmountNumber = document.getElementById("characterAmountNumber");
const form = document.getElementById("passwordGeneratorForm");
const passwordDisplay = document.getElementById("passwordDisplay");
const includeUppercaseElement = document.getElementById("includeUppercase");
const includeSymbolsElement = document.getElementById("includeSymbols");
const includeNumbersElement = document.getElementById("includeNumbers");

const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122);
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90);
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57);
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64).concat(
    arrayFromLowToHigh(91, 96).concat(arrayFromLowToHigh(123, 126))
  )
);

characterAmountNumber.addEventListener("input", syncCharacterAmount);
characterAmountRange.addEventListener("input", syncCharacterAmount);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const includeUppercase = includeUppercaseElement.checked;
  const includeNumbers = includeNumbersElement.checked;
  const includeSymbols = includeSymbolsElement.checked;
  const characterAmount = characterAmountNumber.value;
  const password = generatePassword(
    characterAmount,
    includeUppercase,
    includeNumbers,
    includeSymbols
  );
  passwordDisplay.innerText = password;
});

function generatePassword(
  characterAmount,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
  let charCode = LOWERCASE_CHAR_CODES;
  if (includeUppercase) charCode = charCode.concat(UPPERCASE_CHAR_CODES);
  if (includeSymbols) charCode = charCode.concat(SYMBOL_CHAR_CODES);
  if (includeNumbers) charCode = charCode.concat(NUMBER_CHAR_CODES);

  const passwordCharacters = [];
  for (let i = 0; i < characterAmount; i++) {
    const characterCode = charCode[Math.floor(Math.random() * charCode.length)];
    passwordCharacters.push(String.fromCharCode(characterCode));
  }
  return passwordCharacters.join("");
}

function arrayFromLowToHigh(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}

function syncCharacterAmount(e) {
  const value = e.target.value;
  characterAmountNumber.value = value;
  characterAmountRange.value = value;
}
