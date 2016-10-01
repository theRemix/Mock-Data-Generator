// instantiate states when user requests the state

(function(window) {
  // namespacing App
  window.app = window.app || {};

  // map "routes" to "states"
  class Router {

    constructor(containerId){
      this.container = document.getElementById(containerId);
      this.state = null;
    }

    // takes in a "route" and renders to the container
    navigate(route){
      if(this.state != null){
        this.state.unmount();
      }

      switch(route){
        case 'people':
          this.state = new app.states.People();
          break;
        case 'places':
          this.state = new app.states.Places();
          break;
        case 'spaceships':
          this.state = new app.states.Spaceships();
          break;
        default:
          this.state = new app.states.Default();
      }

      // wait for state to be rendered
      // then, append the element to the view
      this.state.rendered( (element) => {
        this.container.innerHTML = '';
        this.container.appendChild( element );
      });
    }
  }

  window.app.Router = new Router('container');

  // restore state on load
  let initialRoute = window.location.hash ? window.location.hash.substr(1) : '';
  window.app.Router.navigate( initialRoute );

}(window));
