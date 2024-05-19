const countOfWordsBeginsWithK = (str) => {
    let count = 0
    let words = str.split(' ')
    for (let i = 0; i < words.length; i++){
        if(words[i].charAt(0) == 'к' || words[i].charAt(0) == 'К') {
            count++
        }
    }
    return count
}
module.exports = countOfWordsBeginsWithK