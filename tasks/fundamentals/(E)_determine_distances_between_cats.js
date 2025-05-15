// CodeWars - https://www.codewars.com/kata/5869848f2d52095be20001d1/train/javascript
const DEFAULT_LINE = "------------"

const searchCats = (item, rowIdx, coords) => {
    item.split('').forEach((char, colIdx) => {
        if (char !== '-') {
            coords[char] = { x: rowIdx, y: colIdx };
        }
    });
};

const countDistance = (pair, coords) => {
    const verticalDistance = Math.abs(coords[pair[0]].x - coords[pair[1]].x);
    const horizontalDistance = Math.abs(coords[pair[0]].y - coords[pair[1]].y);
    return Math.sqrt(verticalDistance ** 2 + horizontalDistance ** 2);
};

const peacefulYard = (yard, minDistance) => {
    const coords = {};

    for (let i = 0; i < yard.length; i++) {
        if (yard[i] !== DEFAULT_LINE) {
            searchCats(yard[i], i, coords);
        }
    }

    const catsList = Object.keys(coords);

    if (catsList.length <= 1) return true;
    if (catsList.length === 2) {
        return countDistance(catsList, coords) >= minDistance;
    }

    return (
        countDistance([catsList[0], catsList[1]], coords) >= minDistance &&
        countDistance([catsList[1], catsList[2]], coords) >= minDistance &&
        countDistance([catsList[0], catsList[2]], coords) >= minDistance
    );
};

console.log(peacefulYard(["------------", "------------", "------------", "------------", "------------", "------------"], 10))
console.log(peacefulYard(["------------", "---M--------", "------------", "------------", "-------R----", "------------"], 6))
console.log(peacefulYard(["-----------L", "--R---------", "------------", "------------", "------------", "--M---------"], 4))
