# sass-smacss
SMACSS based SASS modules
https://smacss.com/

![Bower, SMACSS, SASS](https://raw.githubusercontent.com/leongaban/github_images/master/bower-jack-sass.png)

### SMACSS is a style guide for writing and organizing SASS modules.
*******

Main sass module: `sass > main_web.scss`

<strong>The layout tree below, the module layouts imports all sectional styles from the layouts folder:</strong>

```
/*=================================================================
Master Stylesheet 
===================================================================

stylesheets/
|
|-- modules/            	    # Partials
|   |-- _reset       	    	# Minimal reset
|   |-- _base           	    # Imports all the modules
|   	|-- _animation      	    # CSS animations
|   	|-- _colors         	    # Colors
|   	|-- _fonts          	    # Fonts
|   	|-- _mixins         	    # Imports all mixins & global vars
|
|   |-- _defaults       	    # Global Defaults
|   |-- _buttons         	    # Buttons styles
|   |-- _fonts         	    	# Fonts styles
|   |-- _inputs          	    # Inputs styles
|   |-- _layout         	    # Layout Views
|   	|-- header
|   	|-- home
|   	|-- footer
|   	...
|
|   |-- _svg					# For SVG background images
|   |-- _queries				# Reponsive media queries
|
|-- vendors/            	    # CSS or from other projects
|   |-- _normalize      	    # http://necolas.github.io/normalize.css v3.0.2
|   ...
|
`-- main_web				    # Primary Sass file
*/


@import "vendors/normalize"; 	// Normalize stylesheet
@import "modules/reset";		// Reset stylesheet
@import "modules/base";			// Load base files
@import "modules/defaults";		// Default elements
@import "modules/inputs";		// Inputs & Selects
@import "modules/buttons";		// Buttons
@import "modules/layout";		// Load Layouts
@import "modules/svg";			// Load SVG
@import "modules/queries";		// Media Queries
```

<strong>Next are the normalize and reset modules. Base module imports the mixins, colors and other less frequently updated settings/modules:</strong>

```
@import "mixins";
@import "colors";
@import "fonts";
@import "animation";
```

<strong>Defaults.scss is where all main non-custom elements are set:</strong>

```
/* Start of styles | Defaults
====================================================
==================================================== */

html, body { width: 100%; height: 100%; } 

body {
	overflow-x: hidden;
    // font-family: 'Ubuntu', sans-serif; // <- choose your body font
	font-weight: 300;
    font-size: em(16);
    color: #666;
	background: $body;
}

...
```

<strong>Then modules such as inputs, tables, buttons etc should follow:</strong>
```
@import "modules/inputs";	// Inputs & Selects
@import "modules/buttons";	// Buttons
```

<strong>Next comes the layout module which starts importing your layouts:</strong>
```
/* Layouts
====================================================
==================================================== */

// Header
@import "../layouts/header";

// Add whatever views you want here...

// Footer
@import "../layouts/footer";

```

<strong>Finally the styles for your svg or png background image file and media queries are setup.</strong>
```
@import "modules/svg";			// Load SVG
@import "modules/queries";		// Media Queries
```

<strong>In the svg module it's recommended to just add the class name to svg file, and where ever that class is used (icons or layouts 
etc...) set the height width and other properties.</strong>

```
// Profile | profile.scss
.green_phone_icon,
.remove_info,
.dropdown_arrow,

// Reports | reports.scss
.check_green,
.check_red,
.css-label,

// Errors | alerts.scss
.lost_man {
	background-size: 1600px 1600px;
	background-image: url(/static/img/dashboard/icons.svg), none;
}
```

<strong>Example class using the SVG background image in an example profile.scss layout module:</strong>
```
.green_phone_icon {
	float: left;
	width: 24px;
	height: 24px;
	margin: 5px 10px;
	background-position: -50px -150px;
}
```
