import React, {Component} from "react"
import {inject, observer} from "mobx-react"
import PropTypes from "prop-types"
import {action, decorate} from "mobx"

class GithubProfile extends Component {
	componentDidMount() {
		this.props.github.fetchFromGithub("baardl")
	}

	handleSelect = e => {
		const selected = e.target.value
		this.props.test.setSelected(selected)
	}

	render() {
		return <div>
			<h3>Github profile</h3>
				{this.props.github.user}
			</div>
	}
}

GithubProfile.propTypes = {
	github:  PropTypes.object.isRequired
}

decorate(GithubProfile, {
	addEntry:    action.bound,
	removeEntry: action.bound
})

export default inject('github')(observer(GithubProfile))

