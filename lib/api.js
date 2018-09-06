import fetch from 'isomorphic-unfetch'
import moment from 'moment'

export default {
	requestGetReadMe(payload) {
		return fetch(`https://api.github.com/repos/gmground/${payload}/readme`)
	},
	requestGetRepos() {
		return fetch('https://api.github.com/users/gmground/repos')
	},
	convertDate(date) {
		return moment(new Date(date)).format("YYYY-MM-DD a hh:mm") + ' created'
	}
}