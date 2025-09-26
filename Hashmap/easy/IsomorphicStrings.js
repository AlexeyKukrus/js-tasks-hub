/*
    Даны две строки s и t, определите, являются ли они изоморфными.
    Две строки s и t изоморфны, если символы в s можно заменить, чтобы получить t.

    Все вхождения символа должны быть заменены другим символом с сохранением порядка символов. Два символа не могут соответствовать одному и тому же символу, но символ может 
    соответствовать самому себе.

    Пример 1:
        Ввод: s = "egg", t = "add"
        Вывод: true
        Объяснение: Строки s и tтможно сделать идентичными: Сопоставление 'e' с 'a'. Сопоставление 'g' с 'd'.

    Пример 2:
        Ввод: s = "foo", t = "bar"
        Вывод: false
        Объяснение: Строки s и t не могут быть идентичны, так как 'o' необходимо сопоставить с 'a' и 'r'.

    Пример 3:
        Ввод: s = "paper", t = "title"
        Вывод: true
*/

function isIsomorphic(s, t) {
    if (s.length !== t.length) return false

    const mapS = {};
    const mapT = {};

    for (let i = 0; i < s.length; i++) {

        if (mapS[s[i]] !== undefined) {
            if (mapS[s[i]] !== t[i]) {
                return false;
            }
        } 
        else if (mapT[t[i]] !== undefined) {
            return false;
        }
        else {
            mapS[s[i]] = t[i];
            mapT[t[i]] = s[i];
        }
    }
    
    return true;
};

console.log(isIsomorphic("badc", "baba"))