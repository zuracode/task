const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
const vowels = ["a", "e", "i", "o", "u"];

const countVowel = (word) => {
  return word.split("").reduce((acc, curr) => {
    if (vowels.includes(curr)) {
      return (acc += 1);
    }
    return acc;
  }, 0);
};

const findLongestWord = (sentence) => {
  const lowercasedSentense = sentence.toLowerCase();

  const wordsList = lowercasedSentense.split(" ").map((word) => {
    if (!alphabet.includes(word.charAt(word.length - 1))) {
      return word.slice(0, -1);
    }
    return word;
  });

  let maxLenWord = "";

  wordsList.forEach((word) => {
    if (word.length > maxLenWord.length) {
      maxLenWord = word;
    } else if (word.length === maxLenWord.length) {
      const countVowelPrev = countVowel(maxLenWord);
      const countVowelCurr = countVowel(word);

      if (countVowelCurr > countVowelPrev) {
        maxLenWord = word;
      }
    }
  });

  return maxLenWord;
};
