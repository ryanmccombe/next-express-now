import React, { Component } from 'react';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import PageList from './PageList';

import styled from 'styled-components';

const Wrapper = styled.div`
	display: inline-block;
	width: 280px;
`;

const Accordion = styled(ExpansionPanel)`
	border-bottom: 1px ${props => props.theme.palette.border.light} solid;
	&:before {
			display: none;
		}
	&.expanded {
		margin: 0 !important;
	}
`;

const AccordionTitle = styled(ExpansionPanelSummary)`
	&.expanded {
		min-height: unset !important;
	}
	.expanded {
		margin-top: unset !important;
		margin-bottom: unset !important;
	}
`;

const AccordionBody = styled(ExpansionPanelDetails)`
	padding-top: 0 !important;
	padding-right: 0 !important;
	padding-left: 8px !important;
`;

class ChapterList extends Component {
	render() {
		return (
			<Wrapper>
				{['Chapter 1', 'Chapter 2', 'Chapter 3', 'Chapter 4'].map(name => (
						<Accordion key={name} elevation={0} square>
							<AccordionTitle expandIcon={<ExpandMoreIcon />}>
								<Typography>{name}</Typography>
							</AccordionTitle>
							<AccordionBody>
								<PageList />
							</AccordionBody>
						</Accordion>

				))}
				
			</Wrapper>
		)
	}
}

export default ChapterList;
