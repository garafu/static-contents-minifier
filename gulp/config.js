module.exports = {
  path: {
    input: "./src",
    output: "./dist"
  },
  uglify: {

  },
  sass: {
    outputStyle: "compressed" //"expanded"
  },
  imagemin: {
    gif: {
    //   interlaced: true,
      optimizationLevel: 3    // 1-3 を指定。 3が一番最適化を行う。 デフォルト 1。
    },
    jpeg: {
    //   progressive: true
    },
    png: {
      optimizationLevel: 7    // 0-7 を指定。 7が一番最適化を行う。 デフォルト 3。
    },
    svg: {
      plugins: [{
        // removeViewBox: false
      }]
    }
  }
};