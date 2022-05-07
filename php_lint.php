<?php

shell_exec("php linters/phpcbf.phar --standard=linters/phpcs.xml");

$separator = "================".PHP_EOL.PHP_EOL;

$pieces = [
    "PHP Codesniffer Result".PHP_EOL,
    shell_exec("php linters/phpcs.phar -s --standard=linters/phpcs.xml").PHP_EOL,
    $separator,
    "PHP Mess Detector".PHP_EOL,
    shell_exec("php linters/phpmd.phar src text linters/ruleset.xml").PHP_EOL,
    $separator,
    "PHP Copy Paste Detector".PHP_EOL,
    shell_exec("php linters/phpcpd.phar src").PHP_EOL,
    $separator,  
    "PHP Magic Number Detector".PHP_EOL,
    shell_exec("linters/vendor/bin/phpmnd src").PHP_EOL,
    $separator,  
];

$reportFile = "linters/reports/php_report.txt";
file_put_contents($reportFile, implode("", $pieces));

$fileContents = file_get_contents($reportFile);
if (count(explode(PHP_EOL, $fileContents)) <= 30) { // php_report.txt should only contain 30 lines if there are no errors reported while linting
    exit(0);
} else {
    exit(1);
}
// http://manpages.ubuntu.com/manpages/xenial/man1/phpcpd.1.html - configuration for phpcpd