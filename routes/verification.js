const express = require('express');
const router = express.Router();


router.post('/verify-user', (req, res) => {
    const { userName } = req.body;
  
    // Add your OTP verification logic here
    // For this example, let's assume the expected OTP is '1234'
    if (userName === '1234') {
      res.json({ success: true, message: 'User is valid' });
    } else {
      res.json({ success: false, message: 'User  is invalid' });
    }
  });
  
  module.exports = router;