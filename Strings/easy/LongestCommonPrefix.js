/*
    Напишите функцию для поиска самой длинной общей префиксной строки среди массива строк.
    Если общего префикса нет, вернуть пустую строку "".
    
    Пример 1:
        Ввод: strs = ["flower","flow","flight"]
        Вывод: "fl"

    Пример 2:
        Ввод: strs = ["dog","racecar","car"]
        Вывод: ""
        Пояснение: среди входных строк нет общего префикса.
*/

function longestCommonPrefix(strs) {
    if (!strs.length) return "";
    
    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (i === strs[j].length || strs[j][i] !== char) {
                return strs[0].substring(0, i);
            }
        }
    }
    
    return strs[0];
};

longestCommonPrefix(["flower","flow","flight"])

