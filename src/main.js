import css from './css/index.css'
import less from './css/indexless.less'
import scss from './css/indexscss.scss'

console.log("this is main.js")

let arr = [1, 2, 3, 4]
let result = arr.filter(item => item % 2 === 0).map(item => item * 3)
console.log(result)