import * as debug from 'debug'
import * as Koa from 'koa'

import * as jsonMiddleware from 'koa-json'
import * as loggerMiddlerware from 'koa-bunyan-logger'

import errorMiddleware from './middleware/error'
import requestMiddleware from './middleware/request'

import routeMiddleware from './route'

import conf from './conf'

const app = new Koa()
const d = debug('kickstarter:root')

// Register middleware
app.use(jsonMiddleware())
app.use(loggerMiddlerware())
app.use(requestMiddleware())
app.use(errorMiddleware())

// Registers routes via middleware
app.use(routeMiddleware())

d('current environment: %s', conf.get('env'))
d('server started at port: %d', conf.get('port'))
app.listen(conf.get('port'))