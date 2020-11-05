const caesar = function(str, num) {

  let encrypted = '';
  let key = num % 26;

  for (let letter of str) {

      if (letter.match(/[^a-zA-Z]/)) {
          encrypted += letter;

      } else {

          if (letter.charCodeAt() + key < 91 || (letter.charCodeAt() > 96 && letter.charCodeAt() + key < 123)) {
              encrypted += String.fromCharCode(letter.charCodeAt() + key);

          } else {
              encrypted += String.fromCharCode(letter.charCodeAt() + key - 26);
          }
        }
  }

  return encrypted;

  }

module.exports = caesar
