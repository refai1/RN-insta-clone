import { ScrollView, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

export default class CommentList extends React.Component{
	static propTypes = {
		items: PropTypes.arrayOf(PropTypes.string).isRequired,
	};

	// accessing comments with indexes. not great but it'll work for now.
	// implement uuid when reusing this code elsewhere.

	renderItem = (item, index) => {
		return(
			<View key={index} style={styles.comment}>
				<Text>{item}</Text>
			</View>
		);
	};

	render() {
		const { items } = this.props;

		return <ScrollView>{items.map(this.renderItem)}</ScrollView>
	}
}

const styles = StyleSheet.create({
	comment: {
		marginLeft: 20,
		paddingVertical: 20,
		paddingRight: 20,
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: 'rgba(0,0,0,0.05)',
	},
});