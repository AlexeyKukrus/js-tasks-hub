/*
    Фраза является палиндромом , если после преобразования всех заглавных букв в строчные и удаления всех символов, кроме букв и цифр, она читается одинаково слева направо и 
    справа налево. К буквенно-цифровым символам относятся буквы и цифры.
    Если заданя строка s, является палиндромом - вернуть true, и false - если наоборот .

    Пример 1:
        Ввод: s = "A man, a plan, a canal: Panama"
        Вывод: true
        Пояснение: "amanaplanacanalpanama" — палиндром.

    Пример 2:
        Ввод: s = "race a car"
        Вывод: false
        Пояснение: "raceacar" не является палиндромом.
        
    Пример 3:
        Ввод: s = " "
        Вывод: true
        Пояснение: s — пустая строка "" после удаления небуквенно-цифровых символов.
        Поскольку пустая строка читается одинаково слева направо и справа налево, она является палиндромом.
 
*/

function isPalindrome(s) {
    const str = s.replace(/[^a-zA-Z0-9]/g, '')

    let last = str.length - 1
    let isPalindrome = true
    
    if (!str.length) return isPalindrome

    for (let first = 0; first <= last; first++) {
        if (str[first].toLowerCase() === str[last].toLowerCase()) {
            last--
        } else {
            isPalindrome = false
            break
        }
    }
    return isPalindrome
}

isPalindrome("A man, a plan, a canal: Panama")