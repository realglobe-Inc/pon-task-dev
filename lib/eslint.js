'use strict'

const {spawn:{npx}} = require('pon-task-command')

/**
 * ESLint task
 * @memberof module:pon-task-dev
 * @function eslint
 * @params {string} dirname
 * @param {Object} [options={}]
 * @returns {function}
 */
function eslint(dirname, options={}){
  const {
    ext = '.js,.jsx,.bud',
    cache = true,
    cacheLocation = 'node_modules/.cache/eslint/eslint.cache.json',
    fix = false,
  } = options
  return npx(
    'eslint',
    ...(fix? ['--fix']: []),
    ...(cache? ['--cache', '--cache-location',cacheLocation]: []),
    ...['--ext', ext],
    dirname
  )
}

module.exports = eslint
