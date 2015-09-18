# Forecast View [![Build Status](https://travis-ci.org/47ronin/forecastview.svg?branch=master)](https://travis-ci.org/47ronin/forecastview) [![codecov.io](http://codecov.io/github/47ronin/forecastview/coverage.svg?branch=master)](http://codecov.io/github/47ronin/forecastview?branch=master) [![Dependencies](https://david-dm.org/47ronin/forecastview.svg)](https://david-dm.org/47ronin/forecastview)

> Five-day weather forecast screens optimized for digital signage (think hotel or company lobby displays). The screens scale for HD (720p), Full HD (1080p), and 4K (both 3840x2160 and 4096x2160).

[![Screenshot](screenshot.png?raw=true)](screenshot.png?raw=true)

### Features
- Daily high and low temperature range, humidity, sunrise/sunset times, and conditions summary
- The background image switches based on the current day’s summary from the [forecast.io](https://developer.forecast.io/) API
- If present in the JSON response, local weather alerts appear as a crawl in the footer

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.12.1.
- [Weather Icons][d289182e] by [Erik Flowers][f1a7bc2f]
- [HTML5 Marquee][e948216e] by [Aleks][0416f599]

  [d289182e]: https://github.com/erikflowers/weather-icons "Weather Icons"
  [f1a7bc2f]: https://github.com/erikflowers "Erik Flowers"
  [e948216e]: https://github.com/muchweb/html5-marquee "HTML5 Marquee"
  [0416f599]: https://github.com/muchweb "Aleks"

## Installation

Clone or fork this repository and ensure the following tools are available:
- [Node Package Manager](https://www.npmjs.com/) (NPM)
- [Grunt](http://gruntjs.com/)
- [Bower](http://bower.io/)

From within the project folder, run `npm install` then `bower install`. Grab some coffee :coffee: …this could take a while.

The `app/scripts/options.js` file contains two required variables for the application to function:
- `APIkey`: A free API key from [Forecast.io](https://developer.forecast.io/) is required to draw in the live JSON data. Replace the value `FORECAST_API_KEY`
- `targetGeo`: To show localized weather forecasts in a desired area, replace the latitude and longitude data

The default weather theme images are free stock photos from [Pexels](https://www.pexels.com/), and are located in the `app/images/` folder.

## Build & development

Run `grunt serve` for preview, make customizations **only** in the `app/` folder, and `grunt build` to build a release candidate. When you are ready, deploy the contents of the `dist/` directory to a webserver and have your digital media player fetch its URL.

## Author

- Name: Glenn Batuyong
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
- Replaced deprecated `marquee` for weather alerts with [HTML5 Marquee][e948216e] by [Aleks][0416f599]
- Rudimentary caching of API requests (experimental, unsure if working in deployment build)
- CSS transforms used to force hardware acceleration of alert scroller
