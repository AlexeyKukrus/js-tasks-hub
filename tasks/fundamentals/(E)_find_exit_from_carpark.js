// CodeWars - https://www.codewars.com/kata/591eab1d192fe0435e000014/train/javascript
let carpark ;
carpark = [
    [1, 0, 0, 0, 2],
    [1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
]; // result = ["L4", "D1", "R4"];
carpark = [
    [2, 0, 0, 1, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0]
]; // result = ["R3", "D2", "R1"];
carpark = [
    [0, 2, 0, 0, 1],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0]
]; // result = ["R3", "D3"]; 
carpark = [
    [1, 0, 0, 0, 2],
    [0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
]; // result = ["L4", "D1", "R4", "D1", "L4", "D1", "R4"];
carpark = [[0, 0, 0, 0, 2]]; // result = [];
const findStart = (carpark) => {
    const info = {}
    const carparkWithoutUpstairs = [...carpark]
    for (item of carpark) {
        if (item.includes(2)) {
            info.startIdx = item.indexOf(2)
            info.carpark = carparkWithoutUpstairs
            info.floors = carparkWithoutUpstairs.length
            break
        } else {
            carparkWithoutUpstairs.shift() 
            continue
        }
    }
    return info
}

const countDownSteps = (moves) => {
    if (moves.length === 0) return [];

    const result = [];
    let [currentDir, currentCount] = [moves[0][0], Number(moves[0].slice(1))];

    for (let i = 1; i < moves.length; i++) {
        const dir = moves[i][0];
        const count = Number(moves[i].slice(1));

        if (dir === currentDir) {
            currentCount += count;
        } else {
            result.push(currentDir + currentCount);
            [currentDir, currentCount] = [dir, count];
        }
    }

    result.push(currentDir + currentCount);
    return result;
}

const findExit = (carpark) => {
    const route = []
    const startInfo = findStart(carpark)
    const currentCarpark = startInfo.carpark
    if (startInfo.floors === 1) {
        if (startInfo.startIdx < currentCarpark[0].length - 1) route.push(`R${(currentCarpark[0].length - 1) - startInfo.startIdx}`)      
    } else {
        let nextStair ;
        let prevStair = startInfo.startIdx;
        for (i = 0; i < currentCarpark.length; i++) {
            if (i === (startInfo.floors - 1)) {
                nextStair = 0
                if (prevStair < currentCarpark[i].length - 1) route.push(`R${(currentCarpark[i].length - 1) - prevStair}`)
            } else {
                nextStair = currentCarpark[i].indexOf(1)
                if (prevStair === nextStair) {
                    route.push("D1")
                    continue
                }
                nextStair > prevStair
                    ? route.push(`R${nextStair - prevStair}`)
                    : route.push(`L${prevStair - nextStair}`)

                route.push("D1")

            }
            prevStair = nextStair
        }
    }
    const result = countDownSteps(route)
    return result
}

console.log(findExit(carpark))