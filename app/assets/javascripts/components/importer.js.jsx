var Importer = React.createClass({
	propTypes: {
		headers: React.PropTypes.array.isRequired,
		data: React.PropTypes.array.isRequired
	},
	render() {
		return (
			<article className="Importer">
				<Header headers={this.props.headers} />
				<DataDisplay tableRows={this.props.data}/>
			</article>
		);
	}
});