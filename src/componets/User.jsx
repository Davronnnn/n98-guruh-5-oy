import React from 'react';

class User extends React.Component {
	constructor(props) {
		super();
		console.log(props);
	}

	render() {
		return (
			<div>
				{this.props.name}
				Lorem ipsum, dolor sit amet consectetur adipisicing elit.
				Asperiores id, fugiat tenetur repellat quaerat sint commodi,
				inventore accusamus quam molestias aspernatur. Et odit animi
				architecto corrupti, quibusdam quos ducimus natus.
			</div>
		);
	}
}

export default User;
