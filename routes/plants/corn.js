const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

// Function to load the localized treatment data
const loadLocalizedData = (lang) => {
  const filePath = path.join(__dirname, `../../locales/${lang}.json`);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Language file ${lang}.json not found`);
  }
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
};

// Sample route for tomato plant
router.get('/:disease', (req, res) => {
  const { disease } = req.params;
  const lang = req.query.lang || 'en';  // Default to 'en' if no lang parameter is provided

  try {
    const localizedData = loadLocalizedData(lang);
    const cornTreatments = localizedData.corn;

    if (!cornTreatments[disease]) {
      return res.status(404).json({ error: `Disease not found for Corn in ${lang}` });
    }

    const treatmentData = cornTreatments[disease];
    res.json({
      disease,
      treatment: treatmentData.treatment,
      duration: treatmentData.duration,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
