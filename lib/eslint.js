/**
 * ESLint task
 * @function eslint
 */
'use strict'

const {spawn:{npx}} = require('pon-task-command')

function eslint(dirname, options={}){
  const {
    ext = ['.js,.jsx'],
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
