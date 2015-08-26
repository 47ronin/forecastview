# forecastivew

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.12.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

### Design

CSS flexbox utilized to get the daily weather summary panels rendered at the same height. The background images switch based on the current day’s icon, as reported by forecast.io’s API.

### Solutions to initial challenges
- API JSON response array parsing then assigning
- Getting local array results back into $scope
- Used CSS flexbox to get panels the same height, regardless of content length
- Used linear-gradient to overlay color on full-screen imagary, then shuffled div arrangement to get dynamic background images
- Adjusting Gruntfile to include Weather Icons in dist build
- Nested divs to call ng-view and maintain a sticky footer
