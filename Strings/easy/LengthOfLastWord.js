/*
    Дана строка, s состоящая из слов и пробелов, вернуть длину последнего слова в строке.

    Пример 1:
        Ввод: s = "Hello World"
        Вывод: 5
        Пояснение: Последнее слово — "World" длиной 5.

    Пример 2:
        Ввод: s = "fly me to the moon"
        Вывод: 4
        Пояснение: Последнее слово — "moon" длиной 4.

    Пример 3:
        Ввод: s = "luffy is still joyboy"
        Вывод: 6
        Пояснение: Последнее слово — "joyboy" длиной 6.
*/

function lengthOfLastWord(s) {
   let length = 0;
    let i = s.length - 1;
    
    while (i >= 0 && s[i] === ' ') {
        i--;
    }
    
    while (i >= 0 && s[i] !== ' ') {
        length++;
        i--;
    }
    return length
};

lengthOfLastWord("Hello World")