const axios = require('axios')

axios.get('https://api.github.com/users/juliocarneiro')
.then(response => response.data.name)
.then(data => {
	console.log(data)
})