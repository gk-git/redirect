module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2e48eff8e35f58ee6fb645290bf4d939'),
  },
});
