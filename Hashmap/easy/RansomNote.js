/*
    Даны две строки ransomNote и magazine, вернуть true если ransomNote можно построить используя буквы из magazine, а false в противном случае .
    Каждая буква в magazine может быть использована только один раз ransomNote.

    Пример 1:
        Ввод: ransomNote = "a", magazine = "b"
        Вывод: false

    Пример 2:
        Ввод: ransomNote = "aa", magazine = "ab"
        Вывод: false

    Пример 3:
        Ввод: ransomNote = "aa", magazine = "aab"
        Вывод: true
*/

function canConstruct(ransomNote, magazine) {
    const ransomNoteMap = {}
    const magazineMap = {}
    let arr = []

    arr = ransomNote.split('')
    for (item of arr) {
        ransomNoteMap[item] = ransomNoteMap.hasOwnProperty(item) ? ransomNoteMap[item] + 1 : 1;
    }

    arr = magazine.split('')
    for (item of arr) {
        magazineMap[item] = magazineMap.hasOwnProperty(item) ? magazineMap[item] + 1 : 1;
    }

     for (item in ransomNoteMap) {
        if (!magazineMap[item] || magazineMap[item] < ransomNoteMap[item]) {
            return false;
        }
    }
    return true
};

console.log(canConstruct("aa", "a"))