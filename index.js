const express = require('express');
const cors = require('cors');
const tomatoRoutes = require('./routes/tomato');
const potatoRoutes = require('./routes/potato');
const cornRoutes = require('./routes/corn');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());  // Parse incoming JSON requests

// Use routes for each plant
app.use('/treatment/tomato', tomatoRoutes);
app.use('/treatment/potato', potatoRoutes);
app.use('/treatment/corn', cornRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Treatment recommendation API running on http://localhost:${port}`);
});













// // index.js
// const express = require('express');
// const cors = require('cors');

// const app = express();
// const port = 5000; // API will run on port 5000

// // Middleware
// app.use(cors());  // Enable Cross-Origin Resource Sharing (CORS)
// app.use(express.json());  // Parse incoming JSON requests

// // Sample plant disease treatment data
// const treatmentRecommendations = {
//   tomato: {
//     'Tomato___Bacterial_spot': {
//       treatment: ['Apply copper-based fungicides', 'Remove infected leaves'],
//       duration: 'Every 2 weeks',
//     },
//     'Tomato___Early_blight': {
//       treatment: ['Use fungicide sprays', 'Remove infected plant parts'],
//       duration: 'Once a week',
//     },
//   },
//   potato: {
//     'Potato___Early_blight': {
//       treatment: ['Apply fungicides', 'Practice crop rotation'],
//       duration: 'Once every 7 days',
//     },
//   },
//   corn: {
//     'Corn___Northern_Leaf_Blight': {
//       treatment: ['Remove infected leaves', 'Apply fungicide'],
//       duration: 'Weekly',
//     },
//   },
// };

// // Define the route for treatment recommendation
// app.get('/treatment/:plant/:disease', (req, res) => {
//   const { plant, disease } = req.params;

//   // Check if plant and disease exist in the data
//   if (!treatmentRecommendations[plant]) {
//     return res.status(404).json({ error: 'Plant not found' });
//   }

//   const plantTreatments = treatmentRecommendations[plant];
//   if (!plantTreatments[disease]) {
//     return res.status(404).json({ error: 'Disease not found' });
//   }

//   // Return the treatment recommendation
//   const treatmentData = plantTreatments[disease];
//   res.json({
//     disease,
//     treatment: treatmentData.treatment,
//     duration: treatmentData.duration,
//   });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Treatment recommendation API running on http://localhost:${port}`);
// });
