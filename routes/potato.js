const express = require('express');
const router = express.Router();

// Sample treatment data for potato plant
const potatoTreatments = {
  'Potato___Early_blight': {
    treatment: ['Apply fungicides', 'Practice crop rotation'],
    duration: 'Once every 7 days',
  },
};

// Define the route for potato treatment recommendation
router.get('/:disease', (req, res) => {
  const { disease } = req.params;

  if (!potatoTreatments[disease]) {
    return res.status(404).json({ error: 'Disease not found for Potato' });
  }

  const treatmentData = potatoTreatments[disease];
  res.json({
    disease,
    treatment: treatmentData.treatment,
    duration: treatmentData.duration,
  });
});

module.exports = router;
