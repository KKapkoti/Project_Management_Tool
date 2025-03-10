import mongoose from "mongoose";
import Project from "../models/projectModel.js";
import joi from "joi";

// Project Schema Validation
const projectSchema = joi.object({
    title: joi.string().min(3).max(30).required(),
    description: joi.string().required(),
});

// Task Schema Validation
const taskSchema = joi.object({
    title: joi.string().min(3).max(30).required(),
    description: joi.string().required(),
});

// GET all projects
export const getProjects = async (req, res) => {
    try {
        const projects = await Project.find({}, { task: 0, __v: 0, updatedAt: 0 });
        res.json(projects);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

// GET project by ID
export const getProjectById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) return res.status(404).json({ error: "Project not found" });
        res.json(project);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

// CREATE new project
export const createProject = async (req, res) => {
    const { error, value } = projectSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    try {
        const project = new Project(value);
        await project.save();
        res.status(201).json(project);
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
};

// UPDATE project
export const updateProject = async (req, res) => {
    const { error, value } = projectSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    try {
        const updatedProject = await Project.findByIdAndUpdate(req.params.id, value, { new: true });
        if (!updatedProject) return res.status(404).json({ error: "Project not found" });
        res.json(updatedProject);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

// DELETE project
export const deleteProject = async (req, res) => {
    try {
        await Project.findByIdAndDelete(req.params.id);
        res.json({ message: "Project deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

// ADD task to project
export const addTask = async (req, res) => {
    const { error, value } = taskSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    try {
        const project = await Project.findById(req.params.id);
        if (!project) return res.status(404).json({ error: "Project not found" });

        project.task.push(value);
        await project.save();
        res.json({ message: "Task added successfully", task: value });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

// UPDATE task
export const updateTask = async (req, res) => {
    const { error, value } = taskSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    try {
        const project = await Project.findOneAndUpdate(
            { _id: req.params.id, "task._id": req.params.taskId },
            { $set: { "task.$": value } },
            { new: true }
        );

        if (!project) return res.status(404).json({ error: "Task not found" });
        res.json({ message: "Task updated successfully", task: value });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

// DELETE task
export const deleteTask = async (req, res) => {
    try {
        const project = await Project.findByIdAndUpdate(
            req.params.id,
            { $pull: { task: { _id: req.params.taskId } } },
            { new: true }
        );

        if (!project) return res.status(404).json({ error: "Task not found" });
        res.json({ message: "Task deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};
