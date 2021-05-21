
function localMoney(item){
  const result = Object.entries(item).map(([key,value])=>
    [key,typeof value === 'number' ? `¥${value}`:value]
  )
  return Object.fromEntries(result)
}
const obj = {
  name:'xxx',
  balance:199.8,
  taken:3000
}
var newObject = localMoney(obj)
console.log(newObject)