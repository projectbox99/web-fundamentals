import mongoose from 'mongoose';

class Category_schema extends mongoose.Schema {
	constructor() {
		super({
			name: { type: String, required: true }
		});
	}	// constructor()
}	// class Category_schema

export default mongoose.model('Category', new Category_schema);