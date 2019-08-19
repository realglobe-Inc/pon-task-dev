'use strict'

const mocha = require('pon-task-mocha')
const fmtjson = require('pon-task-fmtjson')
const coz = require('pon-task-coz')
const pondoc = require('pon-task-pondoc')
const eslint = require('./eslint')

const subPacks = {
  mocha, coz, fmtjson, pondoc,eslint,
}

/**
 * Define task
 * @memberof pon-task-dev
 * @function define
 * @param {Object} [options={}] - Optional settings
 * @returns {function} Defined task
 */
function define (options = {}) {
  const subTasks = Object
    .keys(options)
    .reduce((subTasks, name) => Object.assign(subTasks, {
      [name]: subPacks[name](...(options[name] || []))
    }), {})

  function task (ctx) {
    return Promise.all([
      Object.keys(subTasks).map((name) => subTasks[name](ctx))
    ])
  }

  return Object.assign(task, subTasks)
}

module.exports = Object.assign(define, subPacks, {subPacks})
