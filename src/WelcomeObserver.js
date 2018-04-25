import React, {Component} from "react"
// import get from "lodash-es/get"
import {inject, observer} from "mobx-react"
import PropTypes from "prop-types"
import {action, decorate} from "mobx"

class WelcomeObserver extends Component {
    componentDidMount() {
        this.props.test.getSelected()
    }

    render() {
        return <div>
            <h3>Observed</h3>
            {this.props.test.selected}
        </div>

    }
}

WelcomeObserver.propTypes = {
    test:  PropTypes.object.isRequired
}

decorate(WelcomeObserver, {
    addEntry:    action.bound,
    removeEntry: action.bound
})

export default inject('test')(observer(WelcomeObserver))

