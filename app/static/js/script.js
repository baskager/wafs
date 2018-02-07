// create local scope
(function(){
  'use strict'
  // initialise app
  const app = {
    init: function(){
      // global app stuff
      routes.init()
    }
  }

  // handle routes and states
  const routes = {
    init: function(){
      // what's in the hash
      var route = window.location.hash
      route != '' ? sections.toggle(route) : window.location.hash = '#start-scherm'

      window.addEventListener("hashchange", function(event) {
        route = window.location.hash
        sections.toggle(route)
      })
    }
  }

  // render & toggle sections
  const sections = {
    toggle: function(route) {
      // show active route
      console.log(route);
      }
    }

  // start the application
  app.init()
})()
