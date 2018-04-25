import React, {Component} from "react"
import {inject, observer} from "mobx-react"
import PropTypes from "prop-types"
import {action, decorate} from "mobx"
import ProcessListRow from "./ProcessListRow";

class ShareprocProcesses extends Component {
	componentDidMount() {
		console.log("Search for processes");
		this.props.shareproc.searchForProcesses("baardl")
	}

	handleSelect = e => {
		const selected = e.target.value
		this.props.shareproc.setFetching(selected)
	}

    fetchProcesses() {
        this.props.shareproc.setFetching(true);
    }

	render() {

        const isFetching = this.props.shareproc.fetchingProcesses;
        if (isFetching) {

            return (<div>

                <button onClick={this.fetchProcesses.bind(this)}>Fetch processes again</button>
                <h3>Shareproc processes</h3>

                Loading.....<br/>
            </div>);
        } else {
        	return (
            <div>

                <button onClick={this.fetchProcesses.bind(this)}>Fetch processes again</button>
                <h3>Shareproc processes</h3>
                Processes:
                <ul className="ProcessesList">
                    {this.props.shareproc.processes.map((process, i) =>
                        <ProcessListRow key={i} process={process}/>
                    )}
                </ul>
            </div>
			);

		}
	}
}

ShareprocProcesses.propTypes = {
	shareproc:  PropTypes.object.isRequired
}

decorate(ShareprocProcesses, {
	addEntry:    action.bound,
	removeEntry: action.bound
})

export default inject('shareproc')(observer(ShareprocProcesses))

