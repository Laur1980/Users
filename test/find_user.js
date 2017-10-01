const User = require('../src/user.js');
const assert = require('assert');

describe('Reading users from the database', () => {
    
     var joe;
    
    beforeEach( (done) => {
        
        joe = new User({
            name:'Joe'
        });
        joe.save()
            .then(() => done());
    });
    
    it('finds all users with the name of Joe ', (done) => {
        User.find({name:'Joe'})
            .then((users) => {
            
                console.log(users[0]._id);
                console.log(joe._id);
                assert(users[0]._id.toString() === joe._id.toString());
                done();
            
            });
    });
    
    if('find a user by the id',(done) => {
        
        User.findOne({_id: joe._id})
            .then((user) => {
                console.log("user name: "+joe.name);
                console.log("user _id: "+joe._id);
                assert((user.name === 'Gogu') && !(user._id === joe._id));
                done()
            
            });
              
    });
    
});