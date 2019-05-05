import React, { Component } from 'react';
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton/IconButton";
import CommentIcon from "@material-ui/icons/Comment";
import List from "@material-ui/core/List/List";

import styled from 'styled-components';

const StyledList = styled(List)`
	width: 100%;
	padding-top: 0 !important;
`;

const Icon = styled(ListItemSecondaryAction)`
	pointer-events: none;
`;

class PageList extends Component {
	render() {
		return (
			<StyledList>
				<ListItem role={undefined} dense button>
					<ListItemText primary="An Introduction" />
					<Icon>
						<CommentIcon />
					</Icon>
				</ListItem>
				<ListItem role={undefined} dense button>
					<ListItemText primary="The Middle Part" />
					<Icon>
						<CommentIcon />
					</Icon>
				</ListItem>
				<ListItem role={undefined} dense button>
					<ListItemText primary="Happily Ever After" />
					<Icon>
						<CommentIcon style={{ pointerEvents: 'none'}} />
					</Icon>
				</ListItem>
			</StyledList>
		)
	}
}

export default PageList;
