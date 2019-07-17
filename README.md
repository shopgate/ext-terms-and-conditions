# Shopgate Connect - Terms and Conditions Extension

Frontend Extension which displays Terms and Conditions on the Cart Page. Extension can be configured to only display terms and conditions on specific product Id's.

## Configuration
Add the Terms and conditions extension to your Shopgate Connect deployment config. 

```
(...)
    {
        "id": "@shopgate/terms-and-conditions",
        "version": "1.1.1"
    }
(...)
```

Set the following values in your Shopgate Connect Admin:
* checkboxValues - (array of Objects) contains specific product terms and conditions information.
    * displayOn - (string) triggering product Id or all proudcts (triggering string to list for all products)
    * productCheckboxValues - (array of Objects) used to hold terms and conditions values for specific products.
        * text - (string) text for terms and conditions checkbox.
        * textColor - (string) hex value for text color of terms and conditions text.
* termsDialog - (string) text for modal dialog.

If the value checkBoxValues is left empty, checkout will be allowed and no checkboxes will be rendered. For variant products, only add the base product id. Support for terms and conditions specific to a variant product is not supported.

## Example Config
```
{
  "checkboxValues": [
    {
      "displayOn": "all products",
      "productCheckboxValues": [
        {
          "text": "all products text",
          "textColor": "#741416"
        }
      ]
    },
    {
      "displayOn": "001",
      "productCheckboxValues": [
        {
          "text": "001 text",
          "textColor": "#741416"
        }
      ]
    },
    {
      "displayOn": "002",
      "productCheckboxValues": [
        {
          "text": "002 text",
          "textColor": "#741416"
        }
      ]
    },
  ],
  "termsDialog": "You must agree with all terms and conditions of sale to check out."
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
