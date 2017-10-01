const User = require('../src/user');
const assert = require('assert');

describe('Updating users in the database',() => {
    
    var joe;
    
    beforeEach((done),() => {
        joe = new User({name:'Joe'});
        joe.save()
            .then(()=> done());
    });
    
    it('instance set and save', () => {
        
        console.log(joe);
        
    });
    
});