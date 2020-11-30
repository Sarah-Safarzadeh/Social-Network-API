const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction,
} = require('../../controllers/thought-controller');

// GET all and POST at /api/thoughts
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);

// GET one, PUT, and DELETE at /api/thoughts/<userId>
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// Reactions
router.route('/:id/reactions').post(createReaction);
router.route('/:id/reactions/:reactionId').delete(deleteReaction);

module.exports = router;