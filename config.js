module.exports = {
  DATABASE_URL: (process.env.DATABASE_URL || 'postgres://test:test@localhost:5432/chinook'),
  HOST: (process.env.HOST || '127.0.0.1'),
  PORT: (process.env.PORT || '5000') 
}