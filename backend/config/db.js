const mongoose = require('mongoose');

// Mongoose connection event listeners
mongoose.connection.on('error', (err) => {
  console.error('❌ MongoDB runtime error:', err.message);
});

mongoose.connection.on('disconnected', () => {
  console.warn('⚠️  MongoDB disconnected');
});

/**
 * Connect to MongoDB database using Mongoose.
 * Reads MONGODB_URI from environment variables.
 * Safe error handling and startup logging without exposing secrets.
 *
 * @returns {Promise<typeof mongoose | null>}
 */
const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri || !uri.trim()) {
    console.warn('⚠️  MONGODB_URI is not configured. Database connection skipped for local development.');
    return null;
  }

  try {
    const conn = await mongoose.connect(uri.trim());
    console.log('✅ MongoDB connected successfully');
    return conn;
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    return null;
  }
};

/**
 * Check whether MongoDB is currently connected.
 *
 * @returns {boolean}
 */
const isConnected = () => {
  return mongoose.connection.readyState === 1;
};

/**
 * Get human-readable MongoDB connection state.
 *
 * @returns {'disconnected' | 'connected' | 'connecting' | 'disconnecting'}
 */
const getConnectionState = () => {
  const states = {
    0: 'disconnected',
    1: 'connected',
    2: 'connecting',
    3: 'disconnecting',
  };
  return states[mongoose.connection.readyState] || 'disconnected';
};

module.exports = {
  connectDB,
  isConnected,
  getConnectionState,
};
