var DataDisplay = React.createClass({
	propTypes: {
		tableRows: React.PropTypes.array.isRequired
	},
	getInitialState() {
		return({
			tableRows: this.props.tableRows,
			changedRows: []
		});
	},
	changeHandler(event, rowId){
		var changed = this.state.changedRows;

		if(changed.indexOf(rowId) == -1)
		{
			changed.push(rowId);
			console.log(changed);
			this.setState({
				tableRows: this.props.tableRows,
				changedRows: changed
			});
		}
	},
	render(){
		
		return(
			<section>
				{this.state.tableRows.map((row, rindex) => 
					<div className="row" key={rindex} >
						{row.map( (text, cindex) =>
							<DataItem text={text} key={cindex} changeHandler={this.changeHandler} rowId={rindex}/>
						)}
						{
							this.state.changedRows.indexOf(rindex) != -1 ? 
							<div className="col-sm-2" key={rindex}><button className="btn btn-primary">Guardar Cambios</button></div> :
							null
						}
						
					</div>
				)}
			</section>
		);
	}
});