/**
 * Pon tasks for dev
 * @module pon-task-dev
 * @version 1.0.0
 */

'use strict'

import define from './define'

const lib = define.bind(this)

Object.assign(lib, define, {
  define
})

const { mocha, coz, fmtjson, pondoc,  } = define

export default lib
export {
  mocha,
  coz,
  fmtjson,
  pondoc,
}