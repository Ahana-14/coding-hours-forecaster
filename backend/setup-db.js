// Database setup script
// This script will create the database tables if they don't exist
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './src/models/User.js';
import Log from './src/models/Log.js';

dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL || '';
const ALLOW_NO_DB = process.env.ALLOW_NO_DB === 'true' || !!process.env.RENDER;

async function setupDatabase() {
  try {
    if (!DATABASE_URL) {
      if (ALLOW_NO_DB) {
        console.warn('⚠️ Skipping DB setup: DATABASE_URL not set and ALLOW_NO_DB=true');
        return;
      }
      console.error('❌ DATABASE_URL not set. Set it or enable ALLOW_NO_DB=true to skip.');
      process.exit(1);
    }
    console.log('🔌 Connecting to MongoDB...');
    await mongoose.connect(DATABASE_URL);
    console.log('✅ Connected to MongoDB');

    console.log('🚀 Ensuring indexes...');
    await User.init();
    await Log.init();
    console.log('✅ Indexes created');

    console.log('\n🎉 Database setup complete!');
    console.log('You can now start the server with: npm run dev');
  } catch (error) {
    console.error('❌ Error setting up database:', error.message);
    if (error.code === 'ECONNREFUSED') {
      console.error('\n💡 Make sure MongoDB is running and DATABASE_URL is correct');
    }
    process.exit(1);
  } finally {
    try { await mongoose.disconnect(); } catch (_) {}
  }
}

setupDatabase();



