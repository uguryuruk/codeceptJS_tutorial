# codeceptJS_tutorial
CodeceptJS test automation tutorial based on POM. There is a video tutorial as well.

## Overview

This repo has two page objects and test files. Our test web site url is https://www.turkiyemezunlari.gov.tr/Account/Login . We are testing four negative cases in each test file.

## Video Tutorial
Watch on [Youtube](youtube.com)

## How to Run

* To run all tests:  npx codeceptjs run
### Running Tests by Feature Name
* To run login tests: npx codeceptjs run --grep "login"
* To run signup tests: npx codeceptjs run --grep "signup"


