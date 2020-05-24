import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => (
	<input
		className="search"
		type="search"
		// プレースホルダーを汎用的にする
		placeholder={placeholder}
		// placeholder="search monsters"
		// 入力欄変わったら、それぞれに応じた処理をする
		onChange={handleChange}
		// onChange={(e) => {
		// 	this.setState({ searchField: e.target.value }, () => console.log(this.state));
		// 1文字目の入力が反映されてないのがわかる
		// console.log(this.state);
		// }}
	/>
);
