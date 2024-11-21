const express = require('express');
const router = express.Router();

// Sample treatment data for corn plant
const cornTreatments = {
  'Corn___Northern_Leaf_Blight': {
    treatment: ['Remove infected leaves', 'Apply fungicide'],
    duration: 'Weekly',
  },
};

// Define the route for corn treatment recommendation
router.get('/:disease', (req, res) => {
  const { disease } = req.params;

  if (!cornTreatments[disease]) {
    return res.status(404).json({ error: 'Disease not found for Corn' });
  }

  const treatmentData = cornTreatments[disease];
  res.json({
    disease,
    treatment: treatmentData.treatment,
    duration: treatmentData.duration,
  });
});

module.exports = router;
