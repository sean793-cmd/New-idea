// src/config/lossControlConfig.ts

require('dotenv').config();

const lossControlConfig = {
    lossThreshold: parseFloat(process.env.LOSS_THRESHOLD) || 0.1, // Default threshold
    notificationEmail: process.env.NOTIFICATION_EMAIL || 'notifications@example.com', // Default email
    checkInterval: parseInt(process.env.CHECK_INTERVAL) || 60000, // Default to 1 minute
};

module.exports = lossControlConfig;
