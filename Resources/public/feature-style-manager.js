(function($) {

    /**
     * Style manager widget
     */
    $.widget('mapbender.featureStyleManager', {
        options: {},

        /**
         * Generate StyleManagerForm
         *
         * @param element jQuery object
         */
        genForm: function(element) {

            return element.generateElements({
                type:     "popup",
                title:    "Style manager",
                width:    '500px',
                children: [{
                    type:     "tabs",
                    children: [{
                        title:    "Border",
                        type:     "form",
                        children: [{
                            title:         "Size",
                            name:          "border-size",
                            type:          "input",
                            mandatory:     "/^\\d+$/",
                            mandatoryText: "Bitte nur Zahlen verwenden", // range:         "max",
                            // min:           0,
                            // max:           10,
                            // value:         0
                        }, {
                            title:         "Color",
                            type:          "colorPicker",
                            name:          "border-color",
                            value:         "#ff0000",
                            horizontal:    true,
                            mandatory:     "/^#[a-fA-F0-9]{6}$/",
                            mandatoryText: "Bitte Farbwähler nutzen"
                        }, {
                            title:         "Opacity",
                            name:          "border-opacity",
                            type:          "slider",
                            mandatory:     "/^\\d+$/",
                            mandatoryText: "Bitte nur Zahlen verwenden",
                            range:         "max",
                            min:           0.1,
                            max:           1,
                            value:         1,
                            step:          0.1
                        }]
                    }, {
                        title:    "Background",
                        type:     "form",
                        children: [{
                            title:         "Size",
                            type:          "input",
                            name:          "background-size",
                            value:         "",
                            mandatory:     "/^\\d+$/",
                            mandatoryText: "Bitte nur Zahlen verwenden"
                        }, {
                            title:         "Color",
                            type:          "colorPicker",
                            name:          "background-color",
                            value:         "#ff0000",
                            horizontal:    true,
                            mandatory:     "/^#{1,1}[abcdefABCDEF0-9]{6,6}$/",
                            mandatoryText: "Bitte Farbwähler nutzen"
                        }, {
                            title:         "Opacity",
                            name:          "background-opacity",
                            type:          "slider",
                            mandatory:     "/^\\d+$/",
                            mandatoryText: "Bitte nur Zahlen verwenden",
                            range:         "max",
                            min:           0.1,
                            max:           1,
                            value:         1,
                            step:          0.1
                        }, {
                            title:       "Image",
                            type:        "input",
                            name:        "background-url",
                            value:       "",
                            placeholder: "URL"
                        }]
                    }, {
                        title:    "Graphic",
                        type:     "form",
                        children: [{
                            title: "Name",
                            type:  "input",
                            name:  "graphic-name",
                            value: ""
                        }, {
                            type:     'fieldSet',
                            children: [{
                                title:         "Width",
                                type:          "input",
                                name:          "graphic-width",
                                mandatory:     "/^\\d+$/",
                                mandatoryText: "Bitte nur Zahlen verwenden",
                                css:           {width: '50%'}
                            }, {
                                title:         "Height",
                                type:          "input",
                                name:          "graphic-height",
                                mandatory:     "/^\\d+$/",
                                mandatoryText: "Bitte nur Zahlen verwenden",
                                css:           {width: '50%'}
                            }]
                        }, {
                            type:     'fieldSet',
                            children: [{
                                title:         "X-Offset",
                                name:          "graphic-xoffset",
                                type:          "input",
                                mandatory:     "/^\\d+$/",
                                mandatoryText: "Bitte nur Zahlen verwenden",
                                value:         0,
                                css:           {
                                    width: '50%'
                                }
                            }, {
                                title:         "Y-Offset",
                                type:          "input",
                                name:          "graphic-yoffset",
                                mandatory:     "/^\\d+$/",
                                mandatoryText: "Bitte nur Zahlen verwenden",
                                value:         0,
                                css:           {
                                    width: '50%'
                                }
                            }]
                        }, {
                            title:         "Opacity",
                            name:          "graphic-opacity",
                            type:          "slider",
                            mandatory:     "/^\\d+$/",
                            mandatoryText: "Bitte nur Zahlen verwenden",
                            range:         "max",
                            min:           0.1,
                            max:           1,
                            value:         1,
                            step:          0.1
                        }, {
                            title:       "External graphic",
                            type:        "input",
                            name:        "graphic-url",
                            value:       "",
                            placeholder: "URL"
                        }]
                    }, {
                        title:    "Stroke",
                        type:     "form",
                        children: [{
                            title:         "Color",
                            type:          "colorPicker",
                            name:          "stroke-color",
                            value:         "#ff0000",
                            horizontal:    true,
                            mandatory:     "/^#{1,1}[abcdefABCDEF0-9]{6,6}$/",
                            mandatoryText: "Bitte Farbwähler nutzen"
                        }, {
                            title:         "Opacity",
                            name:          "stroke-opacity",
                            type:          "slider",
                            mandatory:     "/^\\d+$/",
                            mandatoryText: "Bitte nur Zahlen verwenden",
                            range:         "max",
                            min:           0.1,
                            max:           1,
                            value:         1,
                            step:          0.1
                        }, {
                            title: "Width",
                            type:  "input",
                            name:  "stroke-size",
                            value: "100"
                        }, {
                            title:   "Linecap",
                            name:    "stroke-linecap",
                            type:    "select",
                            options: {
                                round:  "round",
                                square: "square",
                                butt:   "butt"
                            },
                            value:   "round"
                        }, {
                            title:   "Dashstyle",
                            name:    "stroke-dashstyle",
                            type:    "select",
                            options: {
                                Solid:           'Solid',
                                ShortDash:       'ShortDash',
                                ShortDot:        'ShortDot',
                                ShortDashDot:    'ShortDashDot',
                                ShortDashDotDot: 'ShortDashDotDot',
                                Dot:             'Dot',
                                Dash:            'Dash',
                                LongDash:        'LongDash',
                                DashDot:         'DashDot',
                                LongDashDot:     'LongDashDot',
                                LongDashDotDot:  'LongDashDotDot'
                            },
                            value:   "Solid"
                        }]
                    }, {
                        title:    "Fill",
                        type:     "form",
                        children: [{
                            title:         "Color",
                            type:          "colorPicker",
                            name:          "fill-color",
                            value:         "#ff0000",
                            mandatory:     "/^#{1,1}[abcdefABCDEF0-9]{6,6}$/",
                            mandatoryText: "Bitte Farbwähler nutzen"
                        }, {
                            title:         "Opacity",
                            name:          "fill-opacity",
                            type:          "slider",
                            mandatory:     "/^\\d+$/",
                            mandatoryText: "Bitte nur Zahlen verwenden",
                            range:         "max",
                            min:           0.1,
                            max:           1,
                            value:         1,
                            step:          0.1
                        }]
                    }, {
                        title:    "Misc",
                        type:     "form",
                        children: [{
                            title:         "Point Radius",
                            name:          "misc-pointradius",
                            type:          "slider",
                            mandatory:     "/^\\d+$/",
                            mandatoryText: "Bitte nur Zahlen verwenden",
                            range:         "max",
                            min:           0,
                            max:           10,
                            value:         0
                        }, {
                            title:   "Cursor",
                            name:    "misc-cursor",
                            type:    "select",
                            options: {
                                auto:        'auto',
                                'default':   'default',
                                crosshair:   'crosshair',
                                pointer:     'pointer',
                                move:        'move',
                                'n-resize':  'n-resize',
                                'ne-resize': 'ne-resize',
                                'e-resize':  'e-resize',
                                'se-resize': 'se-resize',
                                's-resize':  's-resize',
                                'sw-resize': 'sw-resize',
                                'w-resize':  'w-resize',
                                'nw-resize': 'nw-resize',
                                text:        'text',
                                wait:        'wait',
                                help:        'help'
                            },
                            value:   "pointer"
                        }, {
                            title: "Rotation (°)",
                            name:  "misc-rotation",
                            type:  "input",
                            value: "Angle"
                        }, {
                            title:   "Display",
                            name:    "misc-display",
                            type:    "select",
                            options: {
                                inline:         "inline",
                                "inline-block": "inline-block",
                                block:          "block",
                                none:           "none",
                            },
                            value:   "block"
                        }]
                    }]
                }],
                buttons:  [{
                    text:  "Fill",
                    click: function(e) {
                        var form = $(e.currentTarget).closest(".ui-dialog");
                        form.formData({
                            "border-size":      "0",
                            "border-opacity":   1,
                            "border-color":     "#ff0000",
                            "background-size":  null,
                            "background-color": "#ff0000"
                        });
                    }
                }, {
                    text:  "Reset",
                    click: function(e) {
                        var form = $(e.currentTarget).closest(".ui-dialog").find("form");
                        form.trigger("reset");
                    }
                }, {

                    text:  "Submit",
                    click: function(e) {
                        var form = $(e.currentTarget).closest(".ui-dialog")
                        console.log(data);
                    }
                }]
            });
        },

        /**
         * Set options
         *
         * @param options
         * @private
         */
        _setOptions: function(options) {
            this._super(options);
            this.refresh();
        },

        /**
         * Refresh generated elements
         */
        refresh: function() {
            this._trigger('refresh');
        },

        /**
         * Constructor
         *
         * @private
         */
        _create: function() {
            this._setOptions(this.options);
            this.genForm(this.element);
            return this;
        },

        destroy: function() {
            this.element.text("");
            $.Widget.prototype.destroy.call(this);
        }

    });

})(jQuery);