const sumOfNumbers = (x, y) => {
    let sum = 0
    for(let i = x; i <= y; i++){
        if(i%2 == 0 && i%3 == 0){
            sum+=i
        }
    }
    return sum
}
module.exports = sumOfNumbers