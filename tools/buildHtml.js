import fs from 'fs';
import cheerio from 'cheerio';
import colors from 'colors';

/*esLint-disable no-console*/
fs.readFile('src/index.html', 'utf8', (err, marup) => {
  if(err){
    return console.log(err);
  }

  const $ = cheerio.load(marup);

  $('head').prepend('<link rel="stylesheet" href="styles.css">');

  fs.writeFile('dist/index.html', $.html(), 'utf8', function (err) {
    if(err){
      return console.log(err);
    }
    console.log('index.html written to /dist'.green);
  });
});
