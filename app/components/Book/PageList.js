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

const Icon = styled(ListItemSecondaryAction)`
	pointer-events: none;
	margin-top: 2px;
`;

const SuccessIcon = styled(CheckIcon)`
	color: ${props => props.theme.palette.success}
`;

class PageList extends Component {
	render() {
		return (
			<StyledList>
				<ListItem role={undefined} dense button>
					<ListItemText primary="A section with a long name that goes onto two lines" />
					<Icon>
						<SuccessIcon fontSize="small" />
					</Icon>
				</ListItem>
				<ListItem role={undefined} dense button>
					<ListItemText primary="The Middle Part" />
					<Icon>
						<UncheckIcon fontSize="small" />
					</Icon>
				</ListItem>
				<ListItem role={undefined} dense button>
					<ListItemText primary="Happily Ever After" />
					<Icon>
						<UncheckIcon fontSize="small" />
					</Icon>
				</ListItem>
			</StyledList>
		)
	}
}

export default PageList;
