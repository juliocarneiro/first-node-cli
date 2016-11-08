const axios = require('axios')
const config = require('./config')
const url = 'https://api.github.com/users/juliocarneiro'
const headers = {
	Authorization: 'token ${config.GITHUB_OAUTH_TOKEN}'
}

axios.get(url, { headers })
.then(response => response.data)
.then(data => {
	console.log(data.name)
	console.log(data.location)
	console.log(data.bio)
})