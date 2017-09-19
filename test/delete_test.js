const User = require('../src/user');
const assert = require('assert');

describe('performing user delete operations', () => {
    
    var joe;
    
    beforeEach( (done) => {
        
        joe = new User({name:'Joe'});
        joe.save()
           .then(() => done() );
    });
    
    it('model instance remove', (done) => {
        
        joe.remove()
            .then(() => User.findOne({name:'Joe'}) )
            .then((user) => {
                
                assert(user === null);
                done();
                
            });
            
    });
    
    it(' class method remove', () => {
        //Removing many records with a given criteria
        User.remove({name:'Joe'})
            .then(() => User.findOne({name:'Joe'}))
            .then((user) => {
                
                assert(user === null);
                done();
            });
    });
    
    it('class method findOneAndRemove', () => {
        
        User.findOneAndRemove({name:'Joe'})
            .then(() => User.findOne({name:'Joe'}))
            .then((user) => {
                
                assert(user === null);
                done();
            
            });
        
    });
    
     it('class method findByIdAndRemove', () => {
         User.findByIdAndRemove(joe._id)
            .then(() => User.findOne({name:'Joe'}))
            .then((user) => {
                
                assert(user === {});
                done();
            
            });
        
    });
    
});