# forecastview

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.12.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

### Features
- The background image switches based on the current day’s summary from the [forecast.io](https://developer.forecast.io/) API
- If present in the JSON response, weather alerts appear as a crawl in the footer

### Solutions to initial challenges
- Used Angular.forEach to parse the API JSON response arrays into local ones
- (Clumsy) Reassigned local array variables back to $scope since they couldn't be done within the forEach
- Used CSS flexbox to get panels the same height, regardless of content length
- Used linear-gradient to overlay color on full-screen imagary, then shuffled div arrangement to get dynamic background images
- Adjusted Gruntfile to include Weather Icons in dist build
- Nested divs to call ng-view and maintain a sticky footer within the Bootstrap framework
- Replaced deprecated `marquee` for weather alerts with [HTML5-Marquee](https://github.com/muchweb/html5-marquee) by Aleks (@muchweb)
