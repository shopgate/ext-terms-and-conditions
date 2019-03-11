# Shopgate Connect - Terms and Conditions Extension

Frontend Extension which displays Terms and Conditions on the Cart Page. Extension can be configured to only display terms and conditions on specific product Id's.

## Configuration
Add the Terms and conditions extension to your Shopgate Connect deployment config. 

```
(...)
    {
        "id": "@shopgate/terms-and-conditions",
        "version": "1.1.0"
    }
(...)
```

Set the following values in your Shopgate Connect Admin:
* checkboxValues - (array of Objects) used to hold your terms and conditions values.
    * text - (string) text for terms and conditions checkbox.
    * textColor - (string) hex value for text color of terms and conditions text.
* productSpecificCheckboxValues - (array of Objects) contains specific product terms and conditions information.
    * productId - (string) triggering product Id.
    * productCheckboxValues - (array of Objects) used to hold terms and conditions values for specific products.
        * text - (string) text for terms and conditions checkbox.
        * textColor - (string) hex value for text color of terms and conditions text.
* termsDialog - (string) text for modal dialog.

If the value checkBoxValues is left empty, checkout will be allowed and no checkboxes will be rendered.

## Example Config
```
   {
       "checkboxValues: [
           {
               "text": "Check this box to continue",
               "textColor": "#000"
           },
           {
               "text": "Actually, also check this box",
               "textColor": "#000"
           }
       ],
       "productSpecificCheckboxValues: [
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
       ],
       "termsDialog": "Please check both boxes to continue"
   } 
```
 
### Useful Additional Values
There are additional values that can be adjusted via the Shopgate Color Config in Guru. Ask support agent to update.

* Button background: cta
* Button font color: ctaContrast
* Disabled Button background: shade7
* Disabled Button font color: shade4
* Background color of terms and conditions wrapper: shade8
* Checked Checkbox fill: accent
* Unchecked Checkbox fill: shade 6

Color theme adjustments may effect additional components.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) file for more information.

## About Shopgate

Shopgate is the leading mobile commerce platform.

Shopgate offers everything online retailers need to be successful in mobile. Our leading
software-as-a-service (SaaS) enables online stores to easily create, maintain and optimize native
apps and mobile websites for the iPhone, iPad, Android smartphones and tablets.

## License

Shopgate Connect - Extension Boilerplate is available under the Apache License, Version 2.0.

See the [LICENSE](./LICENSE) file for more information.
