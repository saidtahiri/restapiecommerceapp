const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema= new  mongoose.Schema({
  firstName:{
    type:String,
    required:[true,'Please enter your first name']
  },
  lastName:{
    type:String,
    required:[true,'Please enter your last name']
  },
  email:{
    type:String,
    required:[true,'Please enter your email'],
    unique:true
  },
  password:{
    type:String,
    required:[true,'Please enter the password'],
    select:false
  },

},{
  toJSON:{virtuals:true},
  toObject:{virtuals:true}
});

//show virtual property of display Name
UserSchema.virtual('full_name').get(function(){
  return this.firstName +' '+this.lastName
})



//Moongose Midlleware to encrypt the password
UserSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        next();
        
    }
    const salt =await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt);
})

module.exports = mongoose.model('user', UserSchema);