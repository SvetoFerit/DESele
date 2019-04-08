module.exports = {
  port: process.env.PORT || 5000,
  requirements: {
    currency: process.env.CURRENCY || 'EUR',
    threshold: process.env.THRESHOLD || '0.05',
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret123',
  },
}
