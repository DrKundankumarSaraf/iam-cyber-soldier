const path = require('path');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '.env') });

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { connectDB, isConnected, getConnectionState } = require('./config/db');

const app = express();

const PORT = process.env.PORT || 5000;
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5173';

// Security headers
app.use(helmet());

// CORS configuration
app.use(
  cors({
    origin: CLIENT_URL,
    credentials: true,
  })
);

// JSON request body parser with 10 KB limit
app.use(express.json({ limit: '10kb' }));

// Rate limiting for /api routes: 100 requests per 15 minutes
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many requests from this IP, please try again after 15 minutes',
  },
});

app.use('/api', apiLimiter);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'I AM CYBER SOLDIER API is running',
    timestamp: new Date().toISOString(),
  });
});

// Database health check endpoint
app.get('/api/health/db', (req, res) => {
  const connected = isConnected();
  const status = getConnectionState();

  res.status(connected ? 200 : 503).json({
    success: connected,
    connected,
    status,
    timestamp: new Date().toISOString(),
  });
});

// 404 handler for unknown routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Resource not found',
  });
});

// Central error-handling middleware
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(err);
  if (res.headersSent) {
    return next(err);
  }
  return res.status(500).json({
    success: false,
    message: 'Internal server error',
  });
});

// Start server
const startServer = async () => {
  if (process.env.MONGODB_URI && process.env.MONGODB_URI.trim()) {
    await connectDB();
  } else {
    console.warn('⚠️  MONGODB_URI is not configured. Database connection skipped for local development.');
  }

  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
};

startServer();

module.exports = app;
