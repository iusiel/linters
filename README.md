# LINTERS

Linters that I will be using in my projects.

## Linters available
1. PHP CodeSniffer - https://github.com/squizlabs/PHP_CodeSniffer
1. PHP Mess Detector - https://phpmd.org/
1. PHP Copy Paste Detector - https://github.com/sebastianbergmann/phpcpd
1. PHP Magic Number Detector - https://github.com/povils/phpmnd
1. Stylelint - https://stylelint.io/
1. ESLint - https://eslint.org/

## Installation
1. Create "linters" directory inside your project.
1. Clone repository inside "linters" directory".
1. Run "composer install" and "yarn install" inside the "linters" directory
```
cd linters
composer install
yarn install
```

## Usage
1. To run the php lint, run "php linters/php_lint.php"
```
php linters/php_lint.php
```
1. View the generated report at linters/reports/php_report.txt
1. To run the css and js lint, run "node linters/js_css_lint.js"
```
node linters/js_css_lint.js
```
1. View the generated report at linters/reports/js_report.txt and linters/reports/css_report.txt

## Configuration
1. Most configuration can be done by editing the **linters/php_lint.php** and **linters/js_css_lint.js** files.
1. The following files are also configuration files that are used by some of the linters
    1. linters/phpcs.xml - for php codesniffer
    1. linters/ruleset.xml - for php mess detector
    1. linters/.eslintrc.json - for eslint
    1. linters/.stylelintrc - for stylelint
1. The default configuration assumes you are using symfony 6, but updating the configuration to suit the framework that you want to use should be easy.




