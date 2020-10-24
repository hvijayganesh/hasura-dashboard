module.exports = {
  DATABASE_URL: (process.env.DATABASE_URL || 'postgres://test:test@localhost:5432/chinook'),
  HOST: (process.env.HOST || 'localhost'),
  PORT: (process.env.PORT || '5000') 
}