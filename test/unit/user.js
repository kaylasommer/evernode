/* jshint expr:true */
'use strict';

var expect      = require('chai').expect,
    User        = require('../../server/models/user'),
    Lab         = require('lab'),
    lab         = exports.lab = Lab.script(),
    describe    = lab.describe,
    it          = lab.it;
    //before      = lab.before,
    //beforeEach  = lab.beforeEach;



describe('User', function(){

  describe('constructor', function(){
    it('should create a User object', function(done){
      var user = new User({username:'bob'});

      expect(user).to.be.instanceof(User);
      expect(user.username).to.equal('bob');
      done();
    });
  });

  describe('.register', function(){
    it('should register a new user', function(done){
      User.register({username:'bob', password:'1234', avatar:'https://www.apple.com/global/elements/flags/16x16/usa_2x.png'}, function(err){
        expect(err).to.be.null;
        done();
      });
    });
  });


});//end
