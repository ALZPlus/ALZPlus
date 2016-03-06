'use strict';

class CollectionManager {
  constructor(config) {
    this.objects = [];
    this.list = new Vue({ 
      el: config.list, 
      data: { objects: this.objects },
      methods: {
        display: function(event){
          event.target.parentNode.classList.toggle('displayed')
        }
      } 
    })
    this.name = config.name;
    var new_object = {};
    config.fields.forEach(function (property) {
      new_object[property] = property;
    });
    var manager = this
    
    this.add = function(event) {
      event.preventDefault();
      var reader = new FileReader();
      reader.readAsDataURL(this.$el.querySelector('input[type=file]').files[0]);
      reader.addEventListener("load", function () {
        var new_object = {};
        config.fields.forEach(function (property) {
          new_object[property] = this[property];
        }.bind(this));
        if(config.photo){
          new_object.photo = reader.result
        }
        manager.objects.push(new_object);
        localStorage.setItem(config.name, JSON.stringify(manager.objects));
      }.bind(this), false);
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
