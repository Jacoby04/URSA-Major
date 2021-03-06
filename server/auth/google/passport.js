var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

//app.get("/login", passport.authenticate("google", {
//    scope: ["profile", "email"]
//}),

exports.setup = function (User, config) {
  passport.use(new GoogleStrategy({
      clientID: config.google.clientID,
      clientSecret: config.google.clientSecret,
      callbackURL: config.google.callbackURL
    },
    function(accessToken, refreshToken, profile, done) {
      if(profile._json.hd === "morris.umn.edu") {
          User.findOne({
              'google.id': profile.id
          }, function (err, user) {
              if (!user) {
                  user = new User({
                      name: profile.displayName,
                      email: profile.emails[0].value,
                      role: 'user',
                      username: profile.username,
                      provider: 'google',
                      google: profile._json
                  });
                  user.save(function (err) {
                      if (err) done(err);
                      return done(err, user);
                  });
              } else {
                  return done(err, user);
              }
          });
      }else{
          done(new Error("Need a Morris x500 to access page"));
      }
    }
  ));
//    passport.use(new GoogleStrategy({
//      clientID: config.google.clientID,
//      clientSecret: config.google.clientSecret,
//      callbackURL: config.google.callbackURL
//    }, function(token, refreshToken, profile, done){
//        if(profile._json.hd === "morris.umn.edu") {
//            return done;
//        }else{
//            done(new Error("Need a Morris x500 to access page"));
//        }
//    }));

};
