module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  cron: {
    enabled: true,
  },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'cdce9c0884577a23ddd2064786b48f5d'),
    },
  },
});
