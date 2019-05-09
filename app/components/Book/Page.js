import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components'

const Wrapper = styled.div`
	margin: 3em;
`;

const Paragraph = styled(Typography)`
	margin-bottom: 1.25em !important;
`;

class Page extends Component {
	render() {
		return (
			<Wrapper>
				<Typography variant="overline" display="block">
					The Selfish Gene - Introduction
				</Typography>
				<Typography variant="h2" as="h1" gutterBottom>
					Immortal Coils
				</Typography>
				<Typography variant="subtitle1" gutterBottom>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a sollicitudin dolor, in mollis dolor.
					Aliquam vitae dapibus dui. Donec in felis quis eros pretium gravida. Suspendisse erat nibh, accumsan sed
					libero in, gravida euismod sem.
				</Typography>
				<Typography variant="h4" as="h2" gutterBottom style={{ marginTop: '2em' }}>
					Subheader
				</Typography>
				<Paragraph variant="body1" gutterBottom>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a sollicitudin dolor, in mollis dolor.
						Aliquam vitae dapibus dui. Donec in felis quis eros pretium gravida. Suspendisse erat nibh, accumsan sed
						libero in, gravida euismod sem. Nam sit amet dui at magna posuere gravida sodales ac elit. Donec molestie
						tortor efficitur, accumsan quam ut, ullamcorper orci. Aenean at eros non justo iaculis condimentum.
						Quisque at placerat orci.
				</Paragraph>
				<Paragraph variant="body1" gutterBottom>
						Nullam sit amet maximus felis. Phasellus suscipit justo a massa posuere, quis commodo metus congue.
						Phasellus at dictum lectus. Sed consectetur erat non ligula rutrum lobortis. Nam vel tortor eget risus
						convallis scelerisque nec at nunc. Nullam ornare id mi eget sagittis. Phasellus consequat luctus odio,
						egestas fermentum justo fringilla id. Aliquam eget urna ipsum. Duis imperdiet lacus eget ipsum ornare auctor.
						Mauris libero ipsum, vulputate eu iaculis non, porta ac ante. Morbi gravida leo turpis, ut lobortis ex
						convallis quis. Pellentesque semper sem tortor, at posuere leo blandit vitae. Nullam ac porttitor justo,
						suscipit lacinia mi.
				</Paragraph>
				<Paragraph variant="body1" gutterBottom>
						Ut sed maximus nisi. Quisque tempus aliquam lorem, at auctor sem molestie id. Duis molestie magna at
						enim elementum, non pulvinar neque suscipit. Morbi pulvinar pretium cursus. Vestibulum quis tempus neque.
						Pellentesque elementum lacus ut nibh finibus, in efficitur tortor scelerisque. Phasellus ullamcorper finibus
						efficitur. Donec eleifend quam eros, vitae egestas urna viverra et. Praesent luctus lectus vel risus varius
						ornare. Nunc aliquet nunc purus, eget porttitor elit iaculis id.
				</Paragraph>
				<Paragraph variant="body1" gutterBottom>
						Cras nec sem in dui maximus feugiat ac porta ligula. Donec at sagittis nunc. Praesent
						interdum metus quis nisi rhoncus, a vehicula ligula pretium. Integer quis nisl vel
						felis interdum volutpat. Curabitur porta eu turpis ac mollis. In sit amet orci scelerisque,
						fermentum eros in, faucibus lorem. In in ultrices leo, id commodo felis. Nulla volutpat nec nisi
						non aliquet. Donec volutpat orci sit amet rhoncus suscipit. Pellentesque maximus leo a massa laoreet,
						ut imperdiet lectus suscipit.
				</Paragraph>
				<Paragraph variant="body1" gutterBottom>
						Proin lacinia interdum erat, et semper neque iaculis sed. Nam nec turpis vitae libero mollis
						tempus. Aenean neque velit, fringilla et elit eu, placerat sagittis massa. Vestibulum imperdiet
						sem a lorem tincidunt egestas. Pellentesque tortor sem, imperdiet vel feugiat ac, consequat in est.
						Vestibulum imperdiet, sem quis finibus euismod, magna magna eleifend diam, eget viverra ante nibh
						vel magna. Donec maximus viverra quam vitae placerat. Morbi imperdiet interdum ligula dapibus dictum.
						In condimentum feugiat congue.
				</Paragraph>
			</Wrapper>
		)
	}
}

export default Page;
