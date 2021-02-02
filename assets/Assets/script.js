// Arrays needed for password generator//
var lowerCase = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
var upperCase = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'Q',
  'P',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = [
  '~',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '+',
  ':',
  '<',
  '>',
  '?',
  '{',
  '}',
  '|',
  '/',
  '*',
  '-',
  '.'
];

var pword = '';

var upperSelection = false;
var lowerSelection = false;
var numberSelection = false;
var specialSelection = false;

function generate() {
  var confirmLength = '';
  while (isNaN(confirmLength) || confirmLength < 8 || confirmLength > 124) {
    confirmLength = prompt(
      'Exactly how long would you like the password to be? (Choose between 8 and 124 characters)'
    );
    if (confirmLength === null) {
      break;
    }

    if (confirmLength) {
      if (confirm('Would you like to use numbers?') == true) {
        numberSelection = true;
      }

      if (confirm('Would you like to use special characters?') == true) {
        specialSelection = true;
      }

      if (confirm('Would you like to use uppercase characters?') == true) {
        upperSelection = true;
      }

      if (confirm('Would you like to use lowercase characters?') == true) {
        lowerSelection = true;
      }
      if (
        numberSelection === false &&
        specialSelection === false &&
        lowerSelection === false &&
        upperSelection === false
      ) {
        alert('Please select at least one valid character');
      }
    }
    var characters = '';
    characters += numberSelection ? number : '';
    characters += specialelection ? specialChar : '';
    characters += lowerSelection ? lowerCase : '';
    characters += upperSelection ? upperCase : '';

    pword = password(confirmLength, characters);

    document.getElementById('password').innerHTML = pwd;
  }

  function password(l, characters) {
    var pword = '';
    for (var i = 0; i < l; ++i) {
      pword += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pword;
  }
  function copyPassword() {
    document.getElementById('password').select();
    document.execCommand('copy');
    alert('The password has been copied to your clipboard!');
  }
}
