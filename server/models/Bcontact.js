let mongoose = require('mongoose');

//create a model class
let BcontactModel = mongoose.Schema({

    name: String,
    phone: Number,
    email: String

},
{
    collection: 'business_contacts'
});

module.exports = mongoose.model('Bcontact', BcontactModel);