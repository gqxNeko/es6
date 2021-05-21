var obj = {
	a: 1,
	b: 2,
	method: () => {
		console.log(this.a)
	},
}
obj.method()
