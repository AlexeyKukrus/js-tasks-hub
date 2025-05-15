// Poker. Part 1. CodeWars - https://www.codewars.com/kata/52ebe4608567ade7d700044a/train/javascript
const cardSuitsList = [ "c", "d", "h", "s" ]
const cardsValuesList = [ "A", "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K" ]

const quickSort = (arr) => {
    if (arr.length <= 1) return arr

    const pivot = arr[0];
    const left = arr.slice(1).filter(el => el < pivot)
    const right = arr.slice(1).filter(el => el >= pivot)

    return [...quickSort(left), pivot, ...quickSort(right)]
}

const encode = (input) => {
    const encodedCards = []
    for (item of input) {
        encodedCards.push(
            (cardsValuesList.length * cardSuitsList.indexOf(item[1])) + cardsValuesList.indexOf(item[0])
        )
    }
    const result = quickSort(encodedCards)
    return result
}
  
const decode = (input) => {
    const sortedInput = quickSort(input) 
    const decodedCards = []
    let cardSuit ;
    let cardValue ;

    for (item of sortedInput) {
        cardSuit = Math.floor(item / cardsValuesList.length)
        cardValue = item < 13 ? item : item - (cardsValuesList.length * cardSuit)
        decodedCards.push(`${cardsValuesList[cardValue]}${cardSuitsList[cardSuit]}`)
    }

    return decodedCards
}

console.log(decode([7, 22, 51])) // ['8c', 'Td', 'Ks']
console.log(decode([13, 30, 37])) // ['Ad','5h','Qh']
console.log(decode([7, 51, 22])) // ['8c', 'Td', 'Ks']
console.log(decode([13, 37, 30])) // ['Ad','5h','Qh']
console.log(decode([50, 6, 13,30, 37])) // ["7c", "Ad", "5h", "Qh", "Qs"]

console.log(encode(["5h", "7c", "Qh", "Qs", "Ad"])) // [6, 13, 30, 37, 50]
console.log(encode(['Td','8c','Ks'])) // [7, 22, 51]
console.log(encode(['Qh','5h','Ad'])) // [13, 30, 37]
console.log(encode(['8c','Ks','Td'])) // [7, 22, 51]
console.log(encode(['Qh','Ad','5h'])) // [13, 30, 37]

// Poker. Part 2. CodeWars - https://www.codewars.com/kata/52ef1c60a863b919ef00025f/train/javascript
const cardsValuesList = [ "A", "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K" ];

const reduceCards = (input) => {
  if (!Array.isArray(input)) return null;
  if (input.length === 0) return [];

  if (typeof input[0] === "string") {
    const values = input.map(card => card[0]);
    return values.sort((a, b) => cardsValuesList.indexOf(a) - cardsValuesList.indexOf(b));
  }

  if (typeof input[0] === "number") {
    const values = input.map(code => code % 13);
    return values.sort((a, b) => a - b);
  }

  return null;
};


console.log(reduceCards(['Td', 'Qd', '8c', 'Ac'])) // [ A, 8, T, Q ]
console.log(reduceCards(['8c', 'Td', 'Qd', 'Ac'])) // [ A, 8, T, Q ]
console.log(reduceCards(['Td', '5s', 'Kh', '7d'])) // [ 5, 7, T, K ]
console.log(reduceCards(['7d', '5s', 'Kh', 'Td'])) // [ 5, 7, T, K ]
console.log(reduceCards([0, 7, 22, 24])) // [ 0, 7, 9, 11 ]
console.log(reduceCards([24, 7, 22, 0])) // [ 0, 7, 9, 11 ]
console.log(reduceCards([25, 11, 8, 45])) // [ 6, 8, 11, 12 ]
console.log(reduceCards([25, 45, 8, 11])) // [ 6, 8, 11, 12 ]
