import React, { Component } from 'react';
import { View } from 'react-native';

import ListaItens from './src/component/ListaItens';

export default class App extends Component {
	render() {
		return (
			<View >
				<ListaItens />
			</View>
		);
	}
}
