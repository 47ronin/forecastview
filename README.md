# forecastview

Five-day weather forecast screens optimized for digital signage (think hotel or company lobby displays). The screens scale for HD (720p), Full HD (1080p), and 4K (both 3840x2160 and 4096x2160).

### Features
- The background image switches based on the current day’s summary from the [forecast.io](https://developer.forecast.io/) API
- If present in the JSON response, local weather alerts appear as a crawl in the footer

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.12.1.

## Installation

Clone or fork this repository and ensure the following tools are available:
- [Node Package Manager](https://www.npmjs.com/) (NPM)
- [Grunt](http://gruntjs.com/)
- [Bower](http://bower.io/)

From within the project folder, run `npm install` then `bower install`. Grab some coffee :coffee: …this could take a while.

The `app/scripts/options.js` file contains two required variables for the application to function:
1. `APIkey`: A free API key from [Forecast.io](https://developer.forecast.io/) is required to draw in the live JSON data. Replace the value `FORECAST_API_KEY`
2. `targetGeo`: To show localized weather forecasts in a desired area, replace the latitude and longitude data

The default weather theme images are free stock photos from [Pexels](https://www.pexels.com/), and are located in the `app/images/` folder.

## Build & development

Run `grunt serve` for preview, make customizations **only** in the `app/` folder, and `grunt build` to build a release candidate. When you are ready, deploy the contents of the `dist/` directory to a webserver and have your digital media player fetch its URL.

## Author

- Email: glenn@47ronin.com
- Twitter: https://twitter.com/gbatuyong
- GitHub: https://github.com/47ronin

### Solutions to initial challenges
- Used Angular.forEach to parse the API JSON response arrays into local ones
- (Clumsy) Reassigned local array variables back to $scope since they couldn't be done within the forEach
- Used CSS flexbox to get panels the same height, regardless of content length
- Used linear-gradient to overlay color on full-screen imagary, then shuffled div arrangement to get dynamic background images
- Adjusted Gruntfile to include Weather Icons in dist build
- Nested divs to call ng-view and maintain a sticky footer within the Bootstrap framework
- Replaced deprecated `marquee` for weather alerts with [HTML5-Marquee](https://github.com/muchweb/html5-marquee) by [Aleks](https://github.com/muchweb)
- Rudimentary caching of API requests (experimental, unsure if working in deployment build)
