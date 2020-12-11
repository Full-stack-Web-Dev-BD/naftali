const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const formSchema = new Schema({

	UID: {
		type: Schema.Types.ObjectId,
		required: true
	},
	formAccepted: {
		type: Boolean,
		default: false
	},

	firstName: String,
	firstNameStatus: {
		type: String,
		default: 'pending'
	},


	lastName: String,
	lastNameStatus: {
		type: String,
		default: 'pending'
	},


	dateOfBirth: String,
	dateOfBirthStatus: {
		type: String,
		default: 'pending'
	},


	cityOfBirth: String,
	cityOfBirthStatus: {
		type: String,
		default: 'pending'
	},


	citizenship: String,
	citizenshipStatus: {
		type: String,
		default: 'pending'
	},


	address: String,
	addressStatus: {
		type: String,
		default: 'pending'
	},


	streetName: String,
	streetNameStatus: {
		type: String,
		default: 'pending'
	},


	postCode: String,
	postCodeStatus: {
		type: String,
		default: 'pending'
	},


	city: String,
	cityStatus: {
		type: String,
		default: 'pending'
	},


	residendy: String,
	residendyStatus: {
		type: String,
		default: 'pending'
	},


	IDFront: String,
	IDFrontStatus: {
		type: String,
		default: 'pending'
	},


	IDBack: String,
	IDBackStatus: {
		type: String,
		default: 'pending'
	},


	addressProof: String,
	addressProofStatus: {
		type: String,
		default: 'pending'
	},


	selfieVerification: String,
	selfieVerificationStatus: {
		type: String,
		default: 'pending'
	},


	bankStatement: String,
	bankStatementStatus: {
		type: String,
		default: 'pending'
	},


	originOfFounds: String,
	originOfFoundsStatus: {
		type: String,
		default: 'pending'
	},


	foundsOriginExplanation: String,
	foundsOriginExplanationStatus: {
		type: String,
		default: 'pending'
	}
})

module.exports = Form = mongoose.model('Form', formSchema);