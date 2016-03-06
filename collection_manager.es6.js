'use strict';

class CollectionManager {
  constructor(config) {
    this.objects = [];
    if(config.display){
      this.object_display = config.display
      this.object_display.addEventListener('click', function(){
        this.object_display.style.display = 'none'
      }.bind(this))
    }
    this.list = new Vue({ 
      el: config.list, 
      data: { objects: this.objects },
      methods: {
        display: function(event){
          event.target.classList.toggle('display')
          event.target.parentNode.classList.toggle('display')
        }.bind(this)
      } 
    })
    this.name = config.name;
    var new_object = {};
    config.fields.forEach(function (property) {
      new_object[property] = null;
    });
    var manager = this
    
    this.add = function(event) {
      event.preventDefault();
      if(config.photo){
        var reader = new FileReader();
        reader.readAsDataURL(this.$el.querySelector('input[type=file]').files[0]);
        reader.addEventListener("load", function () {
          var new_object = {};
          config.fields.forEach(function (property) {
            new_object[property] = this[property];
          }.bind(this));
          new_object.photo = reader.result
          manager.objects.push(new_object);
          localStorage.setItem(config.name, JSON.stringify(manager.objects));
          alert((new_object.name || 'Object') + ' added')
        }.bind(this), false);
      } else {
          var new_object = {};
          config.fields.forEach(function (property) {
            new_object[property] = this[property];
          }.bind(this));
          manager.objects.push(new_object);
          localStorage.setItem(config.name, JSON.stringify(manager.objects));
          alert((new_object.name || 'Object') + ' added')
      }
    }

    this.form = new Vue({ 
      el: config.new_form, 
      data: new_object,
      methods: {
        add: this.add
      }
    });
  }

  restore() {
    var stored_objects = localStorage.getItem(this.name);
    if (stored_objects && stored_objects !== "undefined") {
      JSON.parse(stored_objects).forEach(function (object) {
        this.objects.push(object);
      }.bind(this));
    }
  }
}

window.CollectionManager = CollectionManager;
