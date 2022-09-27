# codeceptJS_tutorial
CodeceptJS test automation tutorial based on POM. There is a video tutorial as well.

## Overview

This repo has two page objects and test files. Our test web site url is https://www.turkiyemezunlari.gov.tr/Account/Login . We are testing four negative cases in each test file.

## Video Tutorial
Watch on [Youtube](https://www.youtube.com/watch?v=ikzgygsnTs8&t=581s&ab_channel=YuruktheDeveloper)

## How to Run

* To run all tests:  npx codeceptjs run
### Running Tests by Feature Name
* To run login tests: npx codeceptjs run --grep "login"
* To run signup tests: npx codeceptjs run --grep "signup"

## BUSINESS RULES
(bold points are done in the tutorial)
### LOGIN SCREEN
* **User have to fill the required form inputs**.
* **User shall not pass whether username is empty or wrong**
* **User shall not pass whether password is empty or wrong**
* User shall not pass if username exist but password is wrong
### SIGNUP SCREEN
* **User have to fill the required form inputs.**
* **User have to check GDPR checkbox.**
* User have to check “I certify that my information is true”.
* User can view the GDPR text.
* Two passwords should match
* User have to select one of the credential types and then enter an id number

