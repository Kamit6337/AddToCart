const environment = {
  MONGO_DB_URI: process.env.MONGO_DB_URI,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  JWT_EXPIRES_IN: Number(process.env.JWT_EXPIRES_IN),
  SALT_ROUND: Number(process.env.SALT_ROUND),
};

export default environment;
