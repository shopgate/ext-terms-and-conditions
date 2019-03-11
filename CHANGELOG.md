# Changelog
 All notable changes to this project will be documented in this file.
 The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).

### [1.1.0] - 2019-03-07
- Added support for specific product Id configurations. Example config:
```json
{
  "productSpecificCheckboxValues": [
    {
      "productId": "001",
      "productCheckboxValues": [
        {
          "text": "Required checkbox for 001",
          "textColor": "#000"
        }
      ]
    },
    {
      "productId": "002",
      "productCheckboxValues": [
        {
          "text": "Required checkbox for 002",
          "textColor": "#000"
        }
      ]
    }
  ]
}
```

### [1.0.1] - 2019-02-14
Updated peerDependencies.

### [1.0.0] - 2019-02-06
First version of the extension.
### Added
- Added Terms and Conditions Checkboxes that must be checked in order to checkout.
- You can configure an array of objects in the Shopgate Connect admin to display your desired text. Example config:
```json
{
  "text": "Value 1",
  "textColor": "#000"
},
```
- You can configure the dialog notice text for the modal that alerts a customer to confirm terms and conditions. Input type is string.

[1.0.0]: https://github.com/shopgate/ext-terms-and-conditions/compare/v0.0.1...v1.0.0
