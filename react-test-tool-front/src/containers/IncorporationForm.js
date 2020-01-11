import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class IncorporationForm extends React.Component {
	constructor() {
		super();
		this.state = {
			name: '',
			subCatagory: [{ name: '', price: '', customize: [] }],
		};
	}

	handleMainItemNameChange = evt => {
		this.setState({ name: evt.target.value });
	};

	handlesubCatagoryNameChange = idx => evt => {
		const subCatagory = this.state.subCatagory.map((subCatagory, sidx) => {
			if (idx !== sidx) return subCatagory;
			return { ...subCatagory, name: evt.target.value };
		});

		this.setState({ subCatagory: subCatagory });
	};

	handlesubCatagoryPriceChange = idx => evt => {
		const subCatagory = this.state.subCatagory.map((subCatagory, sidx) => {
			if (idx !== sidx) return subCatagory;
			return { ...subCatagory, price: evt.target.value };
		});

		this.setState({ subCatagory: subCatagory });
	};

	gjj = evt => {
		const customize = this.state.subCatagory[0].customize.map((customize, sidx) => {
			//if (f !== sidx) return customize;
			return { ...subCatagory[0].customize, name: evt.target.value };
			console.log(customize)
		});

		this.setState({ customize: customize });
	};

	handleSubmit = evt => {
		const { name, subCatagory } = this.state;
		//alert(`Incorporated: ${name} with ${shareholders.length} shareholders`);
		console.log(this.state);
	};

	handleAddsubCatagory = () => {
		this.setState({
			subCatagory: this.state.subCatagory.concat([{ name: '', price: '', customize: [] }]),
		});
	};

	handleRemovesubCatagory = idx => () => {
		this.setState({ subCatagory: this.state.subCatagory.filter((s, sidx) => idx !== sidx) });
	};

	addNewCust = idx => () => {
		this.state.subCatagory[idx].customize.push({ name: '', price: '' });
		const subCatagory = this.state.subCatagory;
		this.setState({ subCatagory: subCatagory });
	};

	

	render() {
		return (
			//<form onSubmit={this.handleSubmit}>
			<form>
				<h4>Hotel Name</h4>
				<input
					type="text"
					placeholder="Enter Hotel Name"
					value={this.state.name}
					onChange={this.handleMainItemNameChange}
				/>

				<h4>subCatagory</h4>

				{this.state.subCatagory.map((subCatagory, idx) => (
					<div className="subCatagory" key={idx}>
						<input
							type="text"
							placeholder={`Enter Dish  #${idx + 1} name`}
							value={subCatagory.name}
							onChange={this.handlesubCatagoryNameChange(idx)}
						/>
						<input
							type="number"
							placeholder={`subCatagory #${idx + 1} price`}
							value={subCatagory.price}
							onChange={this.handlesubCatagoryPriceChange(idx)}
						/>
						<button
							type="button"
							onClick={this.handleRemovesubCatagory(idx)}
							className="small"
						>
							Delete
						</button>
						<button type="button" onClick={this.addNewCust(idx)} className="small">
							is cust availble?
						</button>
						{subCatagory.customize.map((gj, f) => (
							<div key={f}>
								<input
									type="text"
									placeholder={`subCatagory #${f + 1} price`}
									value={gj.name}
									key={gj.key}
									onChange={this.gjj(f)}
								/>
							</div>
						))}
					</div>
				))}
				<button type="button" onClick={this.handleAddsubCatagory} className="small">
					Add new Subcat
				</button>
				<button type="button" onClick={this.handleSubmit}>
					Add menu to item
				</button>
			</form>
		);
	}
}

export default IncorporationForm;