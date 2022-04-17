const fs = require('fs');
const { exec } = require('child_process');
const cssReportFile = `linters/reports/css_report.txt`;
const jsReportFile = `linters/reports/js_report.txt`;

exec('npx stylelint assets/styles/ --config linters/.stylelintrc', function (err, stdout, stderr) {
    let cssReportNumberOfLines;
    let jsReportNumberOfLines;
    
    let content = `Stylelint report
        ${stdout}
==============
    `;
    cssReportNumberOfLines = content.split(/\r?\n/).length;
  
    fs.writeFile(cssReportFile, content, (err) => {
        // throws an error, you could also catch it here
        if (err) throw (err);

        // callback hell. execute eslint after writing to css_report.txt
        exec('npx eslint assets/app.js assets/js -c linters/.eslintrc.json --ext .js,.vue --fix', function (err, stdout, stderr) {
    
            let content = `ESLint report
                ${stdout}
==============
            `;
            jsReportNumberOfLines = content.split(/\r?\n/).length;

            fs.writeFile(jsReportFile, content, (err) => {
                // throws an error, you could also catch it here
                if (err) throw (err) ;

                if (cssReportNumberOfLines <=4 && jsReportNumberOfLines <=4) {
                    process.exit(0);
                } else {
                    process.exit(1);
                }
            });
        });        
    });
});