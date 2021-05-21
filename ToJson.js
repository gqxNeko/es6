function toJSON(item) {
	if (typeof item !== 'object') {
		if (typeof item === 'string') {
			return `"${item}"`
		} else {
			return item
		}
	} else {
		if (Array.isArray(item)) {
			return `[${item
				.map((it) => toJSON(it))
				.join(',')}]`
		} else {
			return `{${Object.entries(item)
				.map(([key, value]) =>toJSON(key) +':'+ toJSON(value))
        .join(',')
				}}`
		}
	}
}
console.log(toJSON(1))
console.log(toJSON('abc'))
console.log(toJSON([[2,{name:'hi'}],'1', 3, { name: 'zhangsan', age: 18 }]))
console.log(typeof toJSON([[2,{name:'hi'}],'1', 3, { name: 'zhangsan', age: 18 }]))