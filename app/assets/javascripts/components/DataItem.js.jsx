var DataItem = React.createClass({
	propTypes: {
		text: React.PropTypes.string.isRequired,
		changeHandler: React.PropTypes.func.isRequired,
		rowId: React.PropTypes.number.isRequired
	},
	getInitialState() {
		return({
			text: this.props.text
		});
	},
	ValueChanged(event){
		this.props.changeHandler(event, this.props.rowId);
		this.setState({
			text: event.target.value
		});
	},
	render(){ 
		return(
			<section>
				<div className="col-sm-2">
					<input type="text" className="form-control" value={this.state.text} onChange={this.ValueChanged}/>
				</div>
			</section>
		);
	}
});