const obj = {a:1,b:2,c:3}
const keys  = Object.keys(obj)
const values  = Object.values(obj)
const entries = Object.entries(obj)
console.log(keys,values,entries)
for (const [keys,values] of entries){
  console.log(keys,values)
}