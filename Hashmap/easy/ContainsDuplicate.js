/*
    Даны целочисленный массив nums и целое число k. Верните true, если в массиве существуют два различных индекса i и j таких, что nums[i] == nums[j] и модуль разности 
    индексов abs(i - j) <= k.

    Подробное объяснение:
        Нужно проверить, есть ли в массиве два одинаковых числа, которые находятся достаточно близко друг к другу - на расстоянии не больше k.

    Ключевые условия:
        Два одинаковых числа → nums[i] == nums[j]
        Разные индексы → i ≠ j
        Близкое расположение → разница между индексами |i - j| ≤ k
*/


var containsNearbyDuplicate = function(nums, k) {
    const map = {}
    for (let i = 0; i < nums.length; i++) {
        if (
            map.hasOwnProperty(nums[i]) && 
            i - map[nums[i]] <= k
        ) {
           return true
        } else {
            map[nums[i]] = i
        }
    }
    return false
};


console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2))