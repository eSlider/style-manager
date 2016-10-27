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
            var widget = this;
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
                            type:     'fieldSet',
                            children: [{
                                title:         "Size",
                                name:          "borderSize",
                                min:           0,
                                max:           10,
                                step:          1,
                                type:          "slider",
                                mandatory:     "/^\\d+$/",
                                mandatoryText: "Bitte nur Zahlen verwenden", // range:         "max",
                                // min:           0,
                                // max:           10,
                                value:         0,
                                css: { width: "100%"}
                            }, {
                                title:         "Color",
                                type:          "colorPicker",
                                name:          "borderColor",
                                value:         "#ff0000",
                                horizontal:    true, // mandatory:     "/^#[a-fA-F0-9]{6}$/",
                                mandatoryText: "Bitte Farbwähler nutzen",
                                css: { width: "100%"}

                            }, {
                                title:         "Opacity",
                                name:          "borderOpacity",
                                type:          "slider",
                                mandatory:     "/^\\d+$/",
                                mandatoryText: "Bitte nur Zahlen verwenden",
                                range:         "max",
                                min:           0.1,
                                max:           1,
                                value:         1,
                                step:          0.1,
                                css: { width: "100%"}

                            }]
                        }]
                    }, {
                        title:    "Background",
                        type:     "form",
                        children: [{
                            title:         "Size",
                            type:          "input",
                            name:          "backgroundSize",
                            value:         "",
                            mandatory:     "/^\\d+$/",
                            mandatoryText: "Bitte nur Zahlen verwenden"
                        }, {
                            title:         "Color",
                            type:          "colorPicker",
                            name:          "backgroundColor",
                            value:         "#ff0000",
                            horizontal:    true,
                            mandatory:     "/^#{1,1}[abcdefABCDEF0-9]{6,6}$/",
                            mandatoryText: "Bitte Farbwähler nutzen"
                        }, {
                            title:         "Opacity",
                            name:          "backgroundOpacity",
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
                            name:        "backgroundUrl",
                            value:       "",
                            placeholder: "URL"
                        }]
                    }, {
                        title:    "Graphic",
                        type:     "form",
                        children: [{
                            title: "Name",
                            type:  "input",
                            name:  "graphicName",
                            value: ""
                        }, {
                            type:     'fieldSet',
                            children: [{
                                title:         "Width",
                                type:          "input",
                                name:          "graphicWidth",
                                mandatory:     "/^\\d+$/",
                                mandatoryText: "Bitte nur Zahlen verwenden",
                                value:         0,
                                css:           {width: '50%'}
                            }, {
                                title:         "Height",
                                type:          "input",
                                name:          "graphicHeight",
                                mandatory:     "/^\\d+$/",
                                mandatoryText: "Bitte nur Zahlen verwenden",
                                css:           {width: '50%'}
                            }]
                        }, {
                            type:     'fieldSet',
                            children: [{
                                title:         "X-Offset",
                                name:          "graphicXOffset",
                                type:          "slider",
                                mandatory:     "/^\\d+$/",
                                mandatoryText: "Bitte nur Zahlen verwenden",
                                range:         "max",
                                min:           0,
                                max:           100,
                                value:         0,
                                step:          1,
                                css:           {
                                    width: '33%'
                                }
                            }, {
                                title:         "Y-Offset",
                                type:          "slider",
                                name:          "graphicYOffset",
                                mandatory:     "/^\\d+$/",
                                mandatoryText: "Bitte nur Zahlen verwenden",
                                range:         "max",
                                min:           0,
                                max:           100,
                                value:         0,
                                step:          1,
                                css:           {
                                    width: '33%'
                                }
                            }, {
                                title:         "Opacity",
                                name:          "graphicOpacity",
                                type:          "slider",
                                mandatory:     "/^\\d+$/",
                                mandatoryText: "Bitte nur Zahlen verwenden",
                                range:         "max",
                                min:           0,
                                max:           1,
                                value:         1,
                                step:          0.01,
                                css:           {
                                    width: '34%'
                                }
                            }]
                        }, {
                            title:       "External graphic",
                            type:        "input",
                            name:        "graphicUrl",
                            value:       "",
                            placeholder: "URL"
                        }]
                    }, {
                        title:    "Stroke",
                        type:     "form",
                        children: [{
                            type: 'fieldSet',
                            children:[{
                                title:         "Color",
                                type:          "colorPicker",
                                name:          "strokeColor",
                                value:         "#ff0000",
                                horizontal:    true,
                                mandatory:     "/^#{1,1}[abcdefABCDEF0-9]{6,6}$/",
                                mandatoryText: "Bitte Farbwähler nutzen",
                                css: {width: "30%"}

                            }, {
                                title:         "Opacity",
                                name:          "strokeOpacity",
                                type:          "slider",
                                mandatory:     "/^\\d+$/",
                                mandatoryText: "Bitte nur Zahlen verwenden",
                                range:         "max",
                                min:           0.1,
                                max:           1,
                                value:         1,
                                step:          0.1,
                                css: {width: "35%"}

                            }, {
                                title: "Width",
                                type:  "slider",
                                name:  "strokeSize",
                                min:   0,
                                max:   10,
                                step:  0.1,
                                value: 1,
                                css: {width: "35%"}
                            }]
                        }, {
                            type: 'fieldSet',
                            children: [
                                {
                                    title:   "Linecap",
                                    name:    "strokeLineCap",
                                    type:    "select",
                                    options: {
                                        round:  "round",
                                        square: "square",
                                        butt:   "butt"
                                    },
                                    value:   "round",
                                    css: {width: "50%"}
                                }, {
                                    title:   "Dashstyle",
                                    name:    "strokeDashStyle",
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
                                    value:   "Solid",
                                    css: {width: "50%"}

                                }
                            ]
                        }]
                    }, {
                        title:    "Fill",
                        type:     "form",
                        children: [{
                            type:     'fieldSet',
                            children: [{
                                title:         "Color",
                                type:          "colorPicker",
                                name:          "fillColor",
                                value:         "#ff0000",
                                mandatory:     "/^#{1,1}[abcdefABCDEF0-9]{6,6}$/",
                                mandatoryText: "Bitte Farbwähler nutzen",
                                css: {width: "50%"}

                            }, {
                                title:         "Opacity",
                                name:          "fillOpacity",
                                type:          "slider",
                                mandatory:     "/^\\d+$/",
                                mandatoryText: "Bitte nur Zahlen verwenden",
                                range:         "max",
                                min:           0.1,
                                max:           1,
                                value:         1,
                                step:          0.1,
                                css: {width: "50%"}

                            }]
                        }]
                    }, {
                        title:    "Misc",
                        type:     "form",
                        children: [{
                            title:         "Point Radius",
                            name:          "pointRadius",
                            type:          "slider",
                            mandatory:     "/^\\d+$/",
                            mandatoryText: "Bitte nur Zahlen verwenden",
                            range:         "max",
                            min:           0,
                            max:           10,
                            value:         0
                        }, {
                            title:   "Cursor",
                            name:    "cursor",
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
                            name:  "rotation",
                            type:  "input",
                            value: "Angle"
                        }, {
                            title:   "Display",
                            name:    "display",
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
                    text:  "Default",
                    click: function(e) {
                        var form = $(e.currentTarget).closest(".ui-dialog");
                        form.formData({
                            "border-size":      "0",
                            "border-opacity":   1,
                            "border-color":     "#ff0000",
                            "background-size":  null,
                            "background-color": "#ff0000",
                            "graphic-opacity": "0.5"
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
                        var form = $(e.currentTarget).closest(".ui-dialog");
                        widget._trigger('submit', null, {
                            form: form,
                            widget: widget
                        });
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