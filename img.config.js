const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngcrush = require('imagemin-pngcrush');
const imageminPngquant = require('imagemin-pngquant');
const imageminZopfli = require('imagemin-zopfli');
const imageminWebp = require('imagemin-webp');

(async() => {
  const files = await imagemin(['src/assets/images/**/*.{jpg,jpeg,png,svg}'],{
      destination: 'dist/assets/images',
      preserveDirectories: true,
      plugins: [
        imageminMozjpeg({quality: 70}),
        imageminPngcrush(),
        imageminPngquant(),
        imageminZopfli({more: true}),
        imageminWebp()
      ],
    }
  );
  console.log('Images optimized')
  //console.log(files);
})();

imagemin(['src/assets/images/author/*.{jpg,jpeg,png,svg}'], {
  destination: 'dist/assets/images/author',
  plugins: [
    imageminWebp({
      //   quality: 90
      //   ,
      //   resize: {
      //     width: 1000,
      //     height: 0
      //   }
    }),
  ],
}).then(() => {
  console.log("Images Converted Successfully!!!");
});

