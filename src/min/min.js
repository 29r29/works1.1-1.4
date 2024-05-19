const minimal = (x, y, z) => {
    let min
    if (Math.abs(x) < Math.abs(y)){
       min = Math.abs(x)
    }else{
       min = Math.abs(y)
    }
    if (Math.abs(z) < min){
       min = Math.abs(z)
    }
    return min
}
module.exports = minimal