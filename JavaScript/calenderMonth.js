(function($){
    $.widget('ui.listedMonth', {
        options : {
            data : null,
            template :  null,
            monthName: {
                0: "Januar",
                1: "Februar",
                2: "März",
                3: "Aprl",
                4: "Mai",
                5: "Juni",
                6: "Juli",
                7: "August",
                8: "September",
                9: "Oktober",
                10: "November",
                11: "Dezember"
            }
        },

        _create : function() {
            var self = this;

            if (typeof this.options.data === 'object' &&
                typeof this.options.data.current.length !== 'undefined') {
                self._setMonth();
            }
        },

        _init : function() {
            var self = this;

            this.element.on('click', 'div', function (event) {
                console.log("sfjdklfdskjlfd");
                self._trigger('click', event, $(this));
            });
        },

        _setMonth : function() {
            this.options.data.monthName = this.options.monthName[this.options.data.month];
            $(this.options.template).tmpl(this.options)
                .appendTo(this.element);
        }
    });
})(jQuery);

