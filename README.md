# md-letter-avatar

AngularJS directive for Android-like Material Design avatars (uppercase letter(s) on solid background color)
Based on ngletteravatar by uttesh (http://uttesh.com/ngletteravatar/)

## Install

```
bower install dancol90/md-letter-avatar
```

## Usage


```
<md-letter-avatar data="Name Surname"/>
```

## Available options

Option | Default value | Description
-----|---------|------------
`color` | auto | Background color. Valid options are `auto` (palette color calculated hashing `data`), `random` (from palette), CSS color or palette index.
`length` | 1 | Maximum number of letter to display
`data` |  | Input text where to extract initials from.
`height` | 50px | Height of the generated SVG
`width` | 50px | Width of the generated SVG
`font-family` | HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica, Arial,Lucida Grande, sans-serif | 
`font-weight` | 400 | 
`font-size` | 30px | Font size used in generated SVG
`shape` | square  | Shape for the image. Valid options are `round` and `square`.
`border` | false | Specify the image border. Valid option are `default` (`5px solid white`), `none` and CSS-like border definition.

# License

The MIT License

Original Work Copyright (c) 2015 Uttesh Kumar T.H. http://www.uttesh.com
Modified Work Copyright (c) 2016 Daniele Colanardi

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

