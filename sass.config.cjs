var sass = require('sass');
var fs = require('fs');

// Configs
var configs = {
	name: 'Sass',
	files: ['app.scss'],
	pathIn: 'src/assets/styles/scss',
	pathOut: 'dist/assets/css',
	indentType: 'space',
	indentWidth: 2,
  //outputStyle:'compressed',
	minify: false,
	sourceMap: false
};

// Banner
var banner = '';

var getOptions = function (file, filename, minify) {
	return {
		file: `${configs.pathIn}/${file}`,
		outFile: `${configs.pathOut}/${filename}`,
		sourceMap: configs.sourceMap, sourceMapContents: configs.sourceMap,
		indentType: configs.indentType,
		indentWidth: configs.indentWidth,
		outputStyle: configs.minify ? 'compressed' : 'expanded'
	};
};

var writeFile = function (pathOut, fileName, fileData, printBanner = false) {
  // Create the directory path
  fs.mkdir(pathOut, { recursive: true }, function (err) {
    // If there's an error, throw it
    if (err) throw err;

    // Write the file to the path
    fs.writeFile(`${pathOut}/${fileName}`, fileData, function (err) {
      if (err) throw err;

      var data = fs.readFileSync(`${pathOut}/${fileName}`);
      var fd = fs.openSync(`${pathOut}/${fileName}`, 'w+');
      var insert = printBanner ? new Buffer.from(banner + '\n') : '';
      fs.writeSync(fd, insert, 0, insert.length, 0);
      fs.writeSync(fd, data, 0, data.length, insert.length);
      fs.close(fd, function (err) {
        if (err) throw err;
        console.log(`Compiled ${pathOut}/${fileName}`);
      })
    })
  })
}

var parseSass = function (file, minify) {
  var filename = `${file.slice(0, file.length - 5)}${minify ? '.min' : ''}.css`;
  sass.render(getOptions(file, filename, minify), function (err, result) {

  // If there's an error, throw it
  if (err) throw err;

    // Write the file
    writeFile(configs.pathOut, filename, result.css);

    if (configs.sourceMap && !configs.sourceMapEmbed) {
      // Write external sourcemap
      writeFile(configs.pathOut, filename + '.map', result.map, false);
    }
  });
};

configs.files.forEach(function (file) {
  parseSass(file);
  if (configs.minify) {
    parseSass(file, true);
  }
});