import React, { Component } from 'react';

import Link from 'next/link'

class Page2 extends Component {
	render() {
		return (
			<div>
				Hey
				<Link href="/">
					<a>Home</a>
				</Link>
			</div>
		)
	}
}

export default Page2;
