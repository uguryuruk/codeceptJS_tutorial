/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://turkiyemezunlari.gov.tr/',
      show: true,
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file.js',
    signupPage: './pages/signup.js',
  },
  name: 'codeceptJS_tutorial'
}