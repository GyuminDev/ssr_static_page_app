import fetch from 'isomorphic-unfetch'

export default {
	requestGetReadMe(payload) {
		return fetch(`https://api.github.com/repos/gmground/${payload}/readme`)
	},
	requestGetRepos() {
		return fetch('https://api.github.com/users/gmground/repos')
	}
}