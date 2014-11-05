/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  },{
          provider: 'google',
          role: 'admin',
          name: 'Mitchell Finzel',
          email: 'finze008@morris.umn.edu',
          google: {
              email: 'finze008@morris.umn.edu',
              family_name: 'Finzel',
              gender: 'male',
              given_name: 'Mitchell',
              hd: 'morris.umn.edu',
              id: '112639306116346340748',
              link: "https://plus.google.com/112639306116346340748",
              locale: "en",
              name: "Mitchell Finzel",
              picture: "https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg",
              verified_email: true
          }
    }, {
          provider: 'google',
          role: 'admin',
          name: 'Jacob Opdahl',
          email: 'opdah023@morris.umn.edu',
          google: {
              email: 'opdah023@morris.umn.edu',
              family_name: 'Opdahl',
              gender: 'male',
              given_name: 'Jacob',
              hd: 'morris.umn.edu',
              id: '111717955914079275928',
              link: "https://plus.google.com/111717955914079275928",
              locale: "en",
              name: "Jacob Opdahl",
              picture: "https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg",
              verified_email: true
          }
      },
      function() {
      console.log('finished populating users');
    }
  );
});