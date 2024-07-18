const express = require('express');
const {
  getAllStories,
  createStory,
  getStoryById,
  updateStory,
  deleteStory
} = require('../controllers/StoryControllers');
const router = express.Router();

// Get all mental health stories
router.get('/allstories', getAllStories);

// Create a new mental health story
router.post('/create', createStory);

// Get a specific mental health story by ID
router.get('/story/:id', getStoryById);

// Update a mental health story by ID
router.put('/story/:id', updateStory);

// Delete a mental health story by ID
router.delete('/story/:id', deleteStory);

module.exports = router;