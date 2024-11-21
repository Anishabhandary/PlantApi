const express = require('express');
const router = express.Router();

// Sample treatment data for tomato plant
const tomatoTreatments = {
  'Tomato___Bacterial_spot': {
    treatment: ['Apply copper-based fungicides', 'Remove infected leaves'],
    duration: 'Every 2 weeks',
  },
  'Tomato___Early_blight': {
    treatment: ['Use fungicide sprays', 'Remove infected plant parts'],
    duration: 'Once a week',
  },
};

// Define the route for tomato treatment recommendation
router.get('/:disease', (req, res) => {
  const { disease } = req.params;

  // Check if the disease exists in the tomato data
  if (!tomatoTreatments[disease]) {
    return res.status(404).json({ error: 'Disease not found for Tomato' });
  }

  const treatmentData = tomatoTreatments[disease];
  res.json({
    disease,
    treatment: treatmentData.treatment,
    duration: treatmentData.duration,
  });
});

module.exports = router;
