/*
    Даны две строки s и t, вернуть , если s является подпоследовательностью t, то вернуть true или false в противном случае .
    Подпоследовательность строки — это новая строка, которая образована из исходной строки путем удаления некоторых (может быть ни одного) символов без нарушения 
    относительного расположения оставшихся символов. (т. е. является подпоследовательностью, а не является)."ace""abcde""aec"

    Пример 1:
        Ввод: s = "abc", t = "ahbgdc"
        Вывод: true

    Пример 2:
        Вход: s = "axc", t = "ahbgdc"
        Выход: false
*/

function isSubsequence(s, t) {
    let substrCount = 0

    for (let i = 0; substrCount < s.length && i < t.length; i++) {
        if (s[substrCount] === t[i]) substrCount++
    }

    return substrCount === s.length
};

isSubsequence('axc', 'ahbgdc')