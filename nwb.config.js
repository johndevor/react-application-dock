/* eslint-disable */

module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactApplicationDock',
      externals: {
        react: 'React',
        'react-dom': 'ReactDOM'
      }
    }
  }
}
