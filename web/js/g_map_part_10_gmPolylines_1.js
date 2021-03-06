/**
 * Collection de polylines
 * Author RNE
 * CanalTP 2013
 * @type @exp;Backbone@pro;Collection@call;extend
 */
var ctpPolylines = CanalTP.lib.map.collections.extend({
    model: ctpPolyline,
    collectionType: 'polylines',

    /**
     * Fonction permettant l'initialisation
     */
    initialize: function()
    {
        this.bind("add", function(){
            this.removeExcludedPoint();
        });
    },

    /**
     * Fonction permettant de setter l'option weight (strokeWeight de gm)
     * @param {Number} weight taille (grosseur) de la polyline
     */
    setWeight: function(weight)
    {
        this.weight = weight;
        _.each(this.models, CanalTP.jQuery.proxy(function(value){
            value.get('mapElement').setOptions({strokeWeight: this.weight});
        }), this);
    },

    /**
     * Fonction permettant de reset l'option weight
     */
    resetWeight: function()
    {
        _.each(this.models, CanalTP.jQuery.proxy(function(value){
            this.weight = value.previous('weight');
            value.get('mapElement').setOptions({strokeWeight: this.weight});
        }), this);
    },

    /**
     * Fonction permettant de récupérer le weight
     */
    getWeight: function()
    {
        return this.weight;
    },

    /**
     * Fonction permettant de setter l'option color (strokecolor de gm)
     * @param {String} color
     */
    setColor: function(color)
    {
        this.color = color;
        _.each(this.models, CanalTP.jQuery.proxy(function(value){
            value.get('mapElement').setOptions({strokeColor: this.color});
        }), this);
    },

    /**
     * Fonction permettant de reset l'option color
     */
    resetColor: function()
    {
        _.each(this.models, CanalTP.jQuery.proxy(function(value){
            this.color = value.previous('color');
            value.get('mapElement').setOptions({strokeColor: this.color});
        }), this);
    },

    /**
     * Fonction permettant de récupérer l'option color
     */
    getColor: function()
    {
        return this.color;
    },

    /**
     * Fonction permettant de setter l'option opacity (strokeOpacity de gm)
     * @param {Number} opacity
     */
    setOpacity: function(opacity)
    {
        this.opacity = opacity;
        _.each(this.models, CanalTP.jQuery.proxy(function(value){
            value.get('mapElement').setOptions({strokeOpacity: this.opacity});
        }), this);
    },

    /**
     * Fonction permettant de reset l'option opacity
     */
    resetOpacity: function()
    {
       _.each(this.models, CanalTP.jQuery.proxy(function(value){
            this.opacity = value.previous('opacity');
            value.get('mapElement').setOptions({strokeOpacity: this.opacity});
        }), this);
    },

    /**
     * Fonction permettant de récupérer l'opacity
     */
    getOpacity: function()
    {
        return this.opacity;
    },

    /**
     * Fonction permettant de setter l'option zIndex (zIndex de gm)
     * @param {Number} zIndex
     */
    setzIndex: function(zIndex)
    {
        this.zIndex = parseInt(zIndex);
        _.each(this.models, CanalTP.jQuery.proxy(function(value){
            value.get('mapElement').setOptions({zIndex: this.zIndex});
        }), this);
    },

    /**
     * Fonction permettant de reset l'option zIndex
     */
    resetzIndex: function()
    {
       _.each(this.models, CanalTP.jQuery.proxy(function(value){
            this.zIndex = value.previous('zIndex');
            value.get('mapElement').setOptions({zIndex: this.zIndex});
        }), this);
    },

    /**
     * Fonction permettant de récupérer le zIndex
     */
    getzIndex: function()
    {
        return this.zIndex;
    },

    /**
     * Fonction permettant de setter l'option Icons (zIndex de gm)
     * @param {Array} icons
     */
    setIcons: function(icons)
    {
        this.icons = null;
        if (parseFloat(navigator.appVersion.split("MSIE")[1]) > 8) {
            this.icons = icons;
            _.each(this.models, CanalTP.jQuery.proxy(function(value){
                value.get('mapElement').setOptions({icons: this.icons});
            }), this);
        }
    },

    /**
     * Fonction permettant de reset l'option icons
     */
    resetIcons: function()
    {
        if (parseFloat(navigator.appVersion.split("MSIE")[1]) > 8) {
            _.each(this.models, CanalTP.jQuery.proxy(function(value){
                this.icons = value.previous('icons');
                value.get('mapElement').setOptions({icons: this.icons});
            }), this);
        }
    },

    /**
     * Fonction permettant de récupérer le icons
     */
    getIcons: function()
    {
        return this.icons;
    }
});
