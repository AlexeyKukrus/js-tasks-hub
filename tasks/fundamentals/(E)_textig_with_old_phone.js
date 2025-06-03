// Texting with an old-school mobile phone. CodeWars - https://www.codewars.com/kata/5ca24526b534ce0018a137b5/train/javascript
const sendMessage = (message) => {
  let arr = message.split('');
  let keys = [];
  let newKey = '';
  let lastKey = '@';
  let upperCase = false;
  let temp = [];
  
  for(let i = 0; i<arr.length;i++){
    temp = getNextKey(arr[i],arr[i+1],lastKey,upperCase);
    newKey = temp[0];
    upperCase = temp[1];
    
    keys.push(newKey);
    lastKey = newKey;
  }
  return keys.join``;
}

function getNextKey(letter,nextLetter,lastKey,upperCase){
  let lowLayerKeyboard = [' ','.,?!','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz','\'-+='];
  let highLayerKeyboard = ['0','1','2','3','4','5','6','7','8','9','*','#'];
  let key = '';
  
  for(let i = 0, n = 0; i<lowLayerKeyboard.length; i++){
    if(lowLayerKeyboard[i].includes(letter.toLowerCase())){
      n = lowLayerKeyboard[i].indexOf(letter.toLowerCase()) + 1;
      if (i == 10) key = '*'.repeat(n);
      else key = String(i).repeat(n);
      break;
    }
  }
  if (key == '') {
    for(let i = 0; i<highLayerKeyboard.length;i++){
      if(highLayerKeyboard[i].includes(letter)){
        key = highLayerKeyboard[i] + '-';
        break;
      }
    }
  }
  if(/[A-Z]/g.test(letter) && !upperCase) {
        key = '#' + key;
        upperCase = true;
  }
  if(/[a-z]/g.test(nextLetter) && upperCase && nextLetter != undefined) {
        key = key + '#';
        upperCase = false;
  }
  if (key[0] == lastKey[lastKey.length-1]){
        key = ' ' + key;
  }
  
  return [key,upperCase];
}


console.log(sendMessage("hey")); // "4433999"
console.log(sendMessage("one two three")); // "666 6633089666084477733 33"
console.log(sendMessage("Hello World!")); // "#44#33555 5556660#9#66677755531111"
console.log(sendMessage("Def Con 1!")); // "#3#33 3330#222#666 6601-1111"
console.log(sendMessage("A-z")); // "#2**#9999"
console.log(sendMessage("1984")); // "1-9-8-4-"
console.log(sendMessage("Big thanks for checking out my kata")); // "#22#444 4084426655777703336667770222443322255444664066688 806999055282"