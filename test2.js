console.log('start')
debugger
// then相当于同步代码
// 关于then的疑问
// 返回的promise.resolve是异步代码
Promise.resolve(1)
	.then((res) => {
		console.log(res)
		debugger
		// return Promise.resolve(2)
    return 2
	})
	.then((res) => {
		console.log(res)
		debugger
		return 3
	})
	.then((res) => {
		console.log(res)
		debugger
	})
console.log('pause')
debugger
Promise.resolve(5)
	.then((res) => {
		console.log(res)
		debugger
		return 6
	})
	.then((res) => {
		console.log(res)
		return 7
	})
	.then((res) => {
		console.log(res)
		debugger
		return 8
	})
	.then((res) => {
		console.log(res)
		debugger
		return 9
	})
	.then((res) => {
		console.log(res)
		debugger
	})
debugger
console.log('end')
