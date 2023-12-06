module.exports = {
  extends: ['stylelint-config-standard-less', 'stylelint-config-recess-order'],
  overrides: [{
    files: ['**/*.less'],
    customSyntax: 'postcss-less'
  }],
  plugins: ['stylelint-order'],
  rules: {
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-order': ['width', 'height'],
  },
}