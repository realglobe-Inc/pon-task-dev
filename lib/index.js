/**
 * Pon tasks for dev
 * @module pon-task-dev
 * @version 1.0.14
 */

'use strict'

const define = require('./define')

let lib = define.bind(this)

Object.assign(lib, define, {
  define
})

module.exports = lib
