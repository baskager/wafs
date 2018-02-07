console.log('global scope');
// create local scope
(function(){
  // initialise app
  var app = {
    init: (function(){
      console.log('local scope');
    }),
    // property
    rootElement: document.body
  };

  // handle routes and states
  var routes = {
    init:(function(){

    })
  }

  // render & toggle sections
  var sections = {
    toggle:(function(route){

    })
  }

  // start the application
  app.init();
})();
