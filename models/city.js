import mongoose from 'mongoose';

class City_schema extends mongoose.Schema {
	constructor() {
		super({
			name: { type: String, required: true }
		});
	}	// constructor()
}	// class City_schema

export default mongoose.model('City', new City_schema);