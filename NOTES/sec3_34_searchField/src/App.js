import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchField: '',
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => this.setState({ monsters: users }));
	}

	render() {
		return (
			<div className="App">
				<input
					type="search"
					placeholder="search monsters"
					onChange={(e) => {
						this.setState({ searchField: e.target.value }, () => console.log(this.state));
						// 1文字目の入力が反映されてないのがわかる
						// console.log(this.state);
					}}
				/>
				<CardList monsters={this.state.monsters}>
					{/* props.childrenとして表示させたいものはコンポーネントの中に記述 */}
					{/* <h1>Yihua</h1> */}
				</CardList>
			</div>
		);
	}
}

export default App;
