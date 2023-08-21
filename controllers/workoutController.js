const Workout =require('../models/workoutModel')
const mongoose = require('mongoose')

// get all worktous
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({createdAt: -1})

  res.status(200).json(workouts)
}

// get a sigle workout
const getWorkout = async (req, res) => {
  const { id } = req.params
  
  checkId(id, res)

  const workout  = await Workout.findById(id)

  checkWorkout(workout)

  res.status(200).json(workout)
}

// create new workout
const createWorkout = async (req, res) => {
  const {title, reps, load} = req.body

  const emptyFields = []

  if (!title) {
    emptyFields.push('title')
  }
  if (!load) {
    emptyFields.push('load')
  }
  if (!reps) {
    emptyFields.push('reps')
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({error: 'Please fill in all the fields', emptyFields})
  }

  // add doc to db
  try {
    const workout = await Workout.create({title, reps, load}) 
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({error: error.message}) 
  }
}

// delete a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params

  checkId(id, res)

  const workout = await Workout.findOneAndDelete({_id: id})

  checkWorkout(workout)

  res.status(200).json(workout)
}

// update a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params

  checkId(id, res)

  const workout = await Workout.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  checkWorkout(workout)

  res.status(200).json(workout)
}


const checkId = (id, res) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such workout. Invalid id provided'})
  }
}

const checkWorkout = (workout, res) => {
  if (!workout) {
    return res.status(404).json({error: 'No such workout'})
  }
}

module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout
}
