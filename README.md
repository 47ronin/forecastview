# forecastview

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.12.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

### Features
- The background images switch based on the current day’s icon, as reported by forecast.io’s API
- National Weather Service alerts as a crawl in the footer

### Solutions to initial challenges
- API JSON response array parsing then assigning
- Getting local array results back into $scope
- Used CSS flexbox to get panels the same height, regardless of content length
- Used linear-gradient to overlay color on full-screen imagary, then shuffled div arrangement to get dynamic background images
- Adjusting Gruntfile to include Weather Icons in dist build
- Nested divs to call ng-view and maintain a sticky footer
