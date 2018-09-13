import fs from 'fs'
import { promisify } from 'util'
import curry2 from '../../../internal/curry2'

export const readFile = curry2 (promisify (fs.readFile))

export const readFileUtf8 = file => readFile (file) ('utf8')
