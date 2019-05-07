import React, { Component } from 'react';
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton/IconButton";
import CheckIcon from "@material-ui/icons/CheckBox";
import UncheckIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import List from "@material-ui/core/List/List";

import styled from 'styled-components';

const StyledList = styled(List)`
	width: 100%;
	padding-top: 0 !important;
`;

const StyledListItem = styled(ListItem)`
	&:hover {
		background-color: unset !important;
		background: linear-gradient(to right, rgba(246,248,248,0) 0%, rgba(246,248,248,1) 30%);
	}
`;

const Icon = styled(ListItemSecondaryAction)`
	pointer-events: none;
	margin-top: 2px;
`;

const SuccessIcon = styled(CheckIcon)`
	color: ${props => props.theme.palette.success}
`;

class PageList extends Component {
	render() {
		const showCheckbox = true;
		
		return (
			<StyledList>
				{[{
					title: 'Immortal Coils',
					isComplete: true,
				}, {
					title: 'Family Planning'
				}, {
					title: 'The Replicators'
				}].map(page => (
					<StyledListItem role={undefined} dense button key={page.title}>
						<ListItemText primary={page.title} />
						{ showCheckbox && (
							<Icon>
								{ page.isComplete ? (
									<SuccessIcon fontSize="small" />
								) : (
									<UncheckIcon fontSize="small" />
								)}
							</Icon>
						)}
					</StyledListItem>
				))}
			</StyledList>
		)
	}
}

export default PageList;
