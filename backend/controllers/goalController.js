import asyncHandler from 'express-async-handler';
import Goal from '../models/goalModel.js';

const checkOwnership = (goal, userId) => {
    if (!goal) throw new Error('Goal not found');
    if (!req.user) throw new Error('User not found');
    if (goal.user.toString() !== userId) throw new Error('User not authorized');
}

// @desc    GET goals
// @route   GET /api/goals
// @access  Private
export const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find({ user: req.user.id });
    res.status(200).json(goals);
})

// @desc    Set goal
// @route   POST /api/goals
// @access  Private
export const setGoal = asyncHandler(async (req, res) => {
    const { text } = req.body;

    if (!text) {
        res.status(400);
        throw new Error('Please add a text field');
    }

    const goal = await Goal.create({ text, user: req.user.id });
    res.status(201).json(goal);
})

// @desc    Update goals
// @route   PUT /api/goals/:id
// @access  Private
export const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    checkOwnership(goal, req.user.id);

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updatedGoal);
})

// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
export const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    
    checkOwnership(goal, req.user.id);

    await goal.deleteOne();
    res.status(200).json({ id: req.params.id });
})