import { Schema, model } from "mongoose";
import {fixSaveError, fixUpdateSettings} from './hooks.js'

const taskSchema = new Schema({
    text: {
        type: String,
        require: [true, 'Plz write u tasks']
    },
    date: {
        type: Date,
        require: true   
    }

})
taskSchema.pre('findOneAndUpdate', fixUpdateSettings)
taskSchema.post("findOneAndUpdate", fixSaveError)
taskSchema.post('save', fixSaveError)

const Task = model('task', taskSchema)

export default Task