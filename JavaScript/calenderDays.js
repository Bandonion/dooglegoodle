(function($){
    $.widget('ui.listedDays', {
        options : {
            data : null,
            template :  null,
            list: null
        },

        _create : function() {
            var self = this;

            if (typeof this.options.data === 'object' &&
                typeof this.options.data.current.length !== 'undefined') {
                this._setDays();
            }

            console.log($(this.options.list));
            if (this.options.list !== null) {
                $(this.options.list).bind('listedMonthclick', function(event, rows) {
                        console.log("kjkljkljk", $(this.options.list));
                }
            )};
        },

        _init : function() {

        },

        _setDays : function() {
            for (var i = 0; i < this.options.data.prev.length; i++) {
                $(this.options.template).tmpl(this.options.data.prev[i])
                    .appendTo(this.element);
            }
            for (var i = 0; i < this.options.data.current.length; i++) {
                $(this.options.template).tmpl(this.options.data.current[i])
                    .appendTo(this.element);
            }
            for (var i = 0; i < this.options.data.next.length; i++) {
                $(this.options.template).tmpl(this.options.data.next[i])
                    .appendTo(this.element);
            }
        }
    });
})(jQuery);

