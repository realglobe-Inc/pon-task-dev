'use strict'

const pon = require('pon')
const {mocha} = require('pon-task-dev')

;(async () => {
  const run = pon({
    'test:mocha': mocha('test/*_test.js')
  })

  run('myTask01')
}).catch((err) => console.error(err))
