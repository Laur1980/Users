const assert = require('assert');
const User =require('../src/user');

describe('Create records', () => {
    
    it('asserts 1+1', () => {
       assert(1+1 === 2); 
    });
    
    it('it saves a user',(done) =>{
        //assert(1 + 1 === 2);
        var joe = new User({
            name: 'Joe'
        });
        joe.save()
           .then(() => {
                //has the user been succesfully saved?
            assert(!joe.isNew);
            done();
            });
    });
    
});