module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'cec13b6375856926e4089e6d630a74c1'),
  },
});
