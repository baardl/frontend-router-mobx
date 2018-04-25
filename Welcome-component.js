import React from "react"
import get from "lodash-es/get"
import {inject, observer} from "mobx-react"
import PropTypes from "prop-types"
import {action, decorate} from "mobx"
import uuid from "uuid"

class Welcome extends React.Component {
	componentDidMount() {
		this.props.test.getSelected()
	}

	handleSelect = e => {
		const selected = e.target.value
		this.props.test.setSelected(selected)
	}

	render() {
		return <main>
			<section className={"links"} >
				<select onChange={this.handleSelect.bind(this)}
				        value={this.props.test.selected}>
					{this.props.test.selectState.map(states => {
						return <option key={uuid.v4()} value={states.value}>{states.title}</option>
					})}
				</select>
			</section>

			<div>
				{this.props.test.selected}
			</div>

		</main>
	}
}

Welcome.propTypes = {
	test:  PropTypes.object.isRequired
}

decorate(Welcome, {
	addEntry:    action.bound,
	removeEntry: action.bound
})

export default inject('test')(observer(Welcome))

