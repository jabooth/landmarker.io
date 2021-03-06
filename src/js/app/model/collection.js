var _ = require('underscore');
var Backbone = require('../lib/backbonej');

"use strict";


exports.CollectionLabels = Backbone.Model.extend({

    urlRoot: "collections",

    url: function () {
        return this.get('server').map(this.urlRoot);
    },

    parse: function (json, options) {
        if (!options.parse) {
            return;
        }
        return {labels: json};
    }

});
