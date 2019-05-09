import React, { Component } from 'react';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TouchRipple from '@material-ui/core/ButtonBase/ButtonBase';

import PageList from './PageList';

import styled from 'styled-components';

const Wrapper = styled.div`
	display: inline-block;
	width: 100%;
`;

const Accordion = styled(ExpansionPanel)`
	margin-bottom: -1px;
	&:before {
			display: none;
		}
	&.expanded {
		margin: auto !important;
	}
	&:after {
		display: block;
		background: red;
		height: 4px;
	}
`;

const AccordionTitle = styled(ExpansionPanelSummary)`
	text-align: left;
	min-height: 56px !important;
	padding-left: 0 !important;
	&:hover {
		background: linear-gradient(to right, rgba(246,248,248,0) 0%,rgba(246,248,248,1) 30%);
	}
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
	padding-bottom: 0 !important;
`;

const Divider = styled.div`
	height: 1px;
	background: linear-gradient(to right, rgba(176,190,197,0) 0%,rgba(176,190,197,1) 100%);
	position: relative;
	bottom: 1px;
	margin-bottom: 0px;
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
					'Aggression',
					'Genemanship',
					'Family Planning',
					'Battle of the Generations',
					'Battle of the Sexes',
					'You scratch my back',
					'Memes: the new replicators',
					'Nice guys finish first',
					'The long reach of the gene'
				].map(name => (
					<React.Fragment key={name} >
						<Accordion elevation={0} square>
							<AccordionTitle expandIcon={<ExpandMoreIcon />}>
								<Typography variant="subtitle2">{name}</Typography>
							</AccordionTitle>
							<AccordionBody>
								<PageList />
							</AccordionBody>
						</Accordion>
						{ false && <Divider /> }
					</React.Fragment>
				))}
			</Wrapper>
		)
	}
}

export default ChapterList;
