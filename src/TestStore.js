import {action, observable, decorate, extendObservable, runInAction} from "mobx"

const defaultState = {}
const defaultSelectState = [
	{title: "første", value: "en"},
	{title: "andre", value: "to"},
	{title: "tredje", value: "tre"}
]

export default class Test {
	constructor(state = defaultState) {
		extendObservable(
			this,
			{
				selectState: defaultSelectState,
				selected:    "en"
			},
			state
		)
	}

	getSelected() {
		const selected = localStorage.getItem("selected")
		if (selected) {
			runInAction(() => {
				this.selected = selected
			})
		}
	}

	setSelected(value) {
		runInAction(() => {
			this.selected = value
		})

		localStorage.setItem("selected", value)
	}


}

decorate(Test, {
	selected:    observable.shallow,
	setSelected: action.bound
})


