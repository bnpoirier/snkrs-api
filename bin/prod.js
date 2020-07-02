#!/usr/bin/env node
const debug = require('debug')('snkrs:server');
const http = require('http');

const app = require('../app');
const config = require('../config');

http.createServer(app).listen(config.PORT);


