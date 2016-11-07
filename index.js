const axios = require('axios')

axios.get('https://api.github.com/users/juliocarneiro')
.then(response => response.data)
.then(data => {
	console.log(data.name)
	console.log(data.location)
	console.log(data.bio)
})