class A{
  methodA(){}
  methodB(){}
}
function Test(){

}
Test.prototype.methodA = function (){}
Test.prototype.methodB = function (){}
console.log(Object.keys(A.prototype))
console.log(Object.keys(Test.prototype))
