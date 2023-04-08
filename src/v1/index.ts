import express from 'express'
import healthRouter from './health'

export const v1Router = express.Router()

v1Router.get('/health', healthRouter)
