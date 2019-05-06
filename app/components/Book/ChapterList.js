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
		margin: auto !important;
	}
`;

const AccordionTitle = styled(ExpansionPanelSummary)`
	text-align: left;
	min-height: 56px !important;
	&.expanded {
		min-height: 56px !important;
	}
	.expanded:not(.MuiButtonBase-root) {
		margin: 12px 0 !important;
	}
	.MuiIconButton-edgeEnd {
		margin-right: -23px;
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
				{[
					'Why are people?',
					'The Replicators',
					'Immortal Coils',
					'The Gene Machine',
					'Aggression: stability and the selfish machine',
					'Genemanship',
					'Family Planning',
					'Battle of the Generations',
					'Battle of the Sexes',
					'You scratch my back, I\'ll ride on yours',
					'Memes: the new replicators',
					'Nice guys finish first',
					'The long reach of the gene'
				].map(name => (
						<Accordion key={name} elevation={0} square>
							<AccordionTitle expandIcon={<ExpandMoreIcon />}>
								<Typography variant="subtitle2">{name}</Typography>
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
