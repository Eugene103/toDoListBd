import express from 'express'
import tasksContr from '../../controllers/tasks-contr.js';

const tasksRouter = express.Router();

tasksRouter.get('/', tasksContr.getAll);
tasksRouter.post('/', tasksContr.addTask)
tasksRouter.delete('/:_id', tasksContr.delTask)
tasksRouter.put('/:_id', tasksContr.changeTask)

export default tasksRouter