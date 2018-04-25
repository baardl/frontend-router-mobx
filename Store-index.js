import TestStore from "./test"

// All our stores are listed here
function createStores(state, token) {

	return {
		test: new TestStore(),
	}
}

// Initialize actions and state
export default (typeof window !== "undefined" ? createStores(window.__STATE) : createStores)

