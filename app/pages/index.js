import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { incrementCount } from "../redux/store";

class Index extends Component {
	render() {
		const { count, incrementCount } = this.props;
		
		return (
			<Fragment>
				<div>Hello From NextJS</div>
				<button onClick={incrementCount}>
					Clicked {count} time(s)
				</button>
			</Fragment>
		)
	}
}

const mapStateToProps = state => ({
	count: state.count,
});

export default connect(mapStateToProps, { incrementCount })(Index);
