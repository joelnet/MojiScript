import fs from 'fs'
import { promisify } from 'util'
import curry from '../../../function/curry'

export const readFile = curry (2) (promisify (fs.readFile))

export const readFileUtf8 = file => readFile (file) ('utf8')
