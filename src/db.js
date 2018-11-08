const mongoose = require('mongoose');

// add your schemas
// use plugins (for slug)
// register your model

const UserSchema = new mongoose.Schema({
  username: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, unique: true, required: true},
  skateboard_id: {type: mongoose.Schema.Types.ObjectId, ref:'skateboardSchema'}
});

const skateboardSchema = new mongoose.Schema({
  station_id: {type: mongoose.Schema.Types.ObjectId, ref:'UserSchema'}
});

const stationSchema = new mongoose.Schema({

});


mongoose.model('User', UserSchema);
mongoose.model('Skateboard', skateboardSchema);
mongoose.model('Station', stationeSchema);
mongoose.connect('mongodb://localhost/....');