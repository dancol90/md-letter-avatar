/**
 * md-letter-avatar
 * @version v1.0.0 * @link https://github.com/dancol90/md-letter-avatar
 * @author Daniele Colanardi <daniele@coolnamehere.it>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
'use strict';

angular.module('mdLetterAvatar', [])

.constant('defaults', {
    length:     1,
    textColor:  '#ffffff',
    color:      'auto',
    border:     '5px solid white',
    radius:     '50%',
    height:     '50px',
    width:      '50px',
    fontSize:   '30px',
    fontWeight: 400,
    fontFamily: 'HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica, Arial,Lucida Grande, sans-serif',
    palette:    ["#E57373", "#F06292", "#BA68C8", "#9575CD", "#7986CB", "#64B5F6", "#4FC3F7", "#4DD0E1", "#4DB6AC", "#81C784", "#AED581", "#DCE775", "#FFF176", "#FFD54F", "#FFB74D", "#FF8A65", "#A1887F", "#E0E0E0", "#90A4AE"],
})

.directive('mdLetterAvatar', ['defaults', function(defaults) {
    return {
        restrict: 'E',
        scope: {
            palette: '=palette',
            data: '@'
        },
        link: function(scope, element, attrs) {
            scope.$watch('data', function(newValue) {

                var params = {
                    length:     attrs.length     || defaults.length,
                    data:       attrs.data       || '',
                    color:      attrs.color      || defaults.color,
                    textColor:  defaults.textColor,
                    height:     attrs.height     || defaults.height,
                    width:      attrs.width      || defaults.width,
                    fontSize:   attrs.fontSize   || defaults.fontSize,
                    fontWeight: attrs.fontWeight || defaults.fontWeight,
                    fontFamily: attrs.fontFamily || defaults.fontFamily,
                    border:     attrs.border,
                    shape:      attrs.shape,
                    palette:    scope.palette || defaults.palette
                };

                var color = '';

                if (isNaN(params.color)) {
                    if (params.color == 'random')
                        color = params.palette[Math.floor(Math.random() * params.palette.length)];
                    else if (params.color == 'auto')
                        color = params.palette[getHash(params.data) % params.palette.length];
                    else if (params.color.charAt(0) == '#')
                        color = params.color;
                } else {
                    color = params.palette[params.color];
                }

                var svg = createSVGTag(params.width, params.height, color);
                
                svg.append(createTextTag(params));
                
                if(params.border)
                    svg.css("border", params.border === 'default' ? defaults.border : params.border);
                
                if(params.shape === 'round')
                    svg.css("border-radius", defaults.radius);

                
                element.html('<img src="' + getInlineData(svg) + '" height="100%" width="100%" />');
            });
        }
    };
}]);

function getInlineData(svg) {
    return 'data:image/svg+xml;base64,' + window.btoa(
        unescape(encodeURIComponent(
            angular.element('<div>').append(svg.clone()).html()
        ))
    );
}

function getHash(text){
    return text.split('').reduce(function(h, v) { console.log(v, h); return (h*37 + v.charCodeAt()) & 0xff; }, 0);
}

function getInitials(text, count) {
    var words = text.split(/[\s.,;\-_]/);
    // TODO: handle when words.length < count
    var ret = words.reduce(function(initials, word) { return initials + word.charAt(0); }, '') || '';
    return ret.substr(0, count).toUpperCase();
}

function createSVGTag(width, height, color){
    return angular
        .element('<svg></svg>')
        .attr({
            'xmlns': 'http://www.w3.org/2000/svg',
            'pointer-events':'none',
            'width': width,
            'height': height
        })
        .css({
            'background-color': color,
            'width': width,
            'height': height,
        });
}

function createTextTag(params){
    return angular
        .element('<text text-anchor="middle"></text>')
        .html(getInitials(params.data, params.length))
        .attr({
            'x': '50%',
            'y': '50%',
            'dy' : '0.35em',
            'pointer-events':'auto',
            'fill': params.textColor,
        })
        .css({
            'font-family': params.fontFamily,
            'font-weight': params.fontWeight,
            'font-size': params.fontSize,
        });
}