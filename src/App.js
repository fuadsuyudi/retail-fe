import React from 'react';
import { connect } from 'react-redux';

import Guest from './layout/Guest';
import Admin from './layout/Admin';
import Retail from './layout/Retail';

function App(props) {
	if (props.isLogin && props.access) {
		if (props.layout === 'admin') {
			return <Admin />
		} else {
			return <Retail />
		}
	} else {
		return <Guest />
	}
}

const store = state => {
	return {
		...state.auth
	}
}

export default connect(store)(App);
