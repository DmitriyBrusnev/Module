/**
 * Создать массив всех перестановок символов из строки
 * @param { string } str - Набор символов
 * @returns { string[] } Массив всех перестановок без повторений
 */
function getPermutations(str) {
    const result = [];

    const permute = (letters, answer = '') => {
        if (letters.length === 0) {
            result.push(answer)
        } else {
            for (let i = 0; i < letters.length; i++) {
                const curr = letters.split('').slice();
                const next = curr.splice(i, 1);
                permute(curr.slice().join(''), answer.concat(next))
            }
        }
    }

    permute(str)

    return result.filter((e, i) => result.indexOf(e) === i).sort();
}

console.log(getPermutations('ABС'));
