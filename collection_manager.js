'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CollectionManager = function () {
  function CollectionManager(config) {
    _classCallCheck(this, CollectionManager);

    this.objects = [];
    this.list = new Vue({ el: config.list, data: { objects: this.objects } });
    this.name = config.name;
    var new_object = {};
    config.fields.forEach(function (property) {
      new_object[property] = property;
    });
    var manager = this;

    this.form = new Vue({ el: config.new_form, data: new_object,
      methods: {
        add: function add(event) {
          event.preventDefault();
          var reader = new FileReader();
          reader.readAsDataURL(this.$el.querySelector('input[type=file]').files[0]);
          reader.addEventListener("load", function () {
            var new_object = {};
            config.fields.forEach(function (property) {
              new_object[property] = this[property];
            }.bind(this));
            if (config.photo) {
              new_object.photo = reader.result;
            }
            manager.objects.push(new_object);
            localStorage.setItem(config.name, JSON.stringify(manager.objects));
          }.bind(this), false);
        }
      }
    });
  }

  _createClass(CollectionManager, [{
    key: 'restore',
    value: function restore() {
      var stored_objects = localStorage.getItem(this.name);
      if (stored_objects && stored_objects !== "undefined") {
        JSON.parse(stored_objects).forEach(function (object) {
          this.objects.push(object);
        }.bind(this));
      }
    }
  }]);

  return CollectionManager;
}();

window.CollectionManager = CollectionManager;
