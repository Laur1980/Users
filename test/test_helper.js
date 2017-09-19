const mongoose = require('mongoose'); 
 
mongoose.Promise = global.Promise;//ES6 promise implementation

var uri = 'mongodb://localhost/users_test';

    var promise = mongoose.connect(uri, {
      useMongoClient: true
    });
    promise.once('open', () => console.log('Good to go!'))
           .on('error', (error) => {

                console.warn('Warning',error);

            }); 

//before(() => {
//   
//    
//});

/*
//This "cleares out" the db before each test is performed by mocha
beforeEach( (done) => {
    
    mongoose.connection.collections.users.drop(() => {
        done();//ready to run the next text after the "drop" has taken effect
    });
    
});
*/
//beforeEach( (done) => {
//    mongoose.connection.collections.users.drop(() => {
//        //Ready to run the next test!
//        done();
//    });
//} );