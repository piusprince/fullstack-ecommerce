module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'abff728093cd4d42c2ab76b702338eb2'),
  },
});
