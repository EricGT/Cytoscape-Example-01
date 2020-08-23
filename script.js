// Code goes here

var CanvasApp = function () {
            var cy;
            var playground;

            return {
                init: function () {
                    var elem = document.createElement("div");
                    elem.id = 'cy';

                    playground = document.getElementById('playground');
                    playground.appendChild(elem);

                    cy = $(elem).cytoscape({
                        style: [
                            {
                                selector: 'node',
                                css: {
                                    // content is needed  to display name for node
                                    'content': 'data(name)',

                                    // background-image is needed to display svg image for node
                                    'background-image': 'glucose.svg',

                                    // shape is needed to give svg image for node a background area that will clip the image if the default of a circle is used.
                                    'shape': 'rectangle',

                                    // height and width are not needed to display node image
                                    // Without height and width, size of image is incorrect.
                                    'height': '51px',
                                    'width': '41px',

                                    // background-opacity is needed to hide the background shape the svg image is layered upon
                                    'background-opacity' : '0'
                                }
                            }
                        ],

                        elements: {
                            nodes: [
                                {data: {id: 'g', name: 'Glucose'}}
                            ],
                            edges: []
                        }
                    }).cytoscape('get');

                },

                destroy: function () {
                    cy.destroy();
                    cy = null;
                }
            }
        };

        var app = new CanvasApp();
