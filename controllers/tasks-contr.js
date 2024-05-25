import Task from '../models/Task.js'

const getAll = async (req, res, next)=>{
    try {
        const result = await Task.find()
      return res.json(result)
    } catch (error) {
       next(error)
    }
}
const addTask = async (req, res, next) => {
    try {
        const result = await Task.create(req.body);
        res.status(201).json(result)
    } catch (error) {
     next(error)   
    }
}
const delTask = async (req, res, next) => {
    try {
        const { _id } = req.params
        const result = await Task.findByIdAndDelete(_id);
        res.status(200).json({"message": "contact deleted"})
    } catch (error) {
        next(error)
    }
}
const changeTask = async (req, res, next) => {
    try {
        const { _id } = req.params
        const result = await Task.findByIdAndUpdate(_id, req.body)
        res.status(200).json(result);
    } catch (error) {
     next(error)   
    }
}
export default {
    getAll,
    addTask,
    delTask,
    changeTask
}