import React, { Component } from 'react';
import styled from 'styled-components';
import Typography from "@material-ui/core/Typography/Typography";
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Logo from '../SVGs/Logo';


const Wrapper = styled.div`
	margin-top: 20px;
	text-align: right;
`;

const Inner = styled.div`
	width: 280px;
	display: inline-block;
	text-align: left;
	padding-left: 12px;
	padding-right: 12px;
`;

const StyledLogo = styled(Logo)`

`;

const BookTitle = styled(Typography)`
	display: inline-block;
	margin-leftx: 12px;
	position: relative;
	bottom: 0px;
`;

const Dropdown = styled(Select)`
	right: 4px;
	bottom: 20px;
	background: ${props =>  props.theme.palette.background.offWhite};
	.MuiOutlinedInput-input {
		padding: 8px;
		padding-right: 28px;
	}
`;

class Title extends Component {
	render() {
		return (
			<Wrapper>
					<Inner>
						{ false && <StyledLogo /> }
						<BookTitle variant="h1" as="h2">
							The Selfish Gene
						</BookTitle>
						
						{ false && (
							<Dropdown
								value={10}
								input={<OutlinedInput name="age" id="outlined-age-simple" />}
							>
								<MenuItem value={10}>4.22</MenuItem>
								<MenuItem value={20}>4.23</MenuItem>
								<MenuItem value={30}>4.24</MenuItem>
							</Dropdown>
						)}

					</Inner>
			</Wrapper>
		);
	}
}

export default Title;
