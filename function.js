const arr = [{
    nama: 'a',
    umur: 11
}, {
    nama: 'b',
    umur: 12
}, {
    nama: 'c',
    umur: 13
}, {
    nama: 'd',
    umur: 14
}]

const saring = arr.filter(item => item.umur > 12)
console.log(saring)
console.log(arr)

const saring = arr.filter(item => {
    return item.umur > 12
})

const map = arr.map(item => {
    item.test = 'tess'
    item.umur = 2
    
    return item
})
console.log(map)
