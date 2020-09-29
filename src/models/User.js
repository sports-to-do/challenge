const {
    Schema,
    model
} = require('mongoose');
const bcrypt = require('bcryptjs');


const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

});


UserSchema.methods.encrypPassword = async password => {
    const salt = await bcrypt.getSalt(10);
    return await bcrypt.hash(password, salt);
};

UserSchema.methods.matchPassword = function (password) {
    return await bcrypt.compare(password, this.password);

};


module.exports = model('User', UserSchema);