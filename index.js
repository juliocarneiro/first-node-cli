const http = require('./clientHttp')

http.get('/users/juliocarneiro')
.then(response => response.data)
.then(data => {
	console.log(data)
})