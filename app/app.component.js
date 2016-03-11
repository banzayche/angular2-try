// Component schema !!!
// app.AppComponent =
//     ng.core.Component({
//     })
//     .Class({
//     });

(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<h1>My First Angular 2 App</h1>'
    })
    .Class({
      constructor: function() {console.log(arguments)}
    });
})(window.app || (window.app = {}));