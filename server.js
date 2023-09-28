const redis = require ('redis');
const redisclient = redis.createClient();

(async () => {
  await redisclient.connect();
})();

redisclient.on("ready", () => {
  console.log("Connected!");
});

redisclient.on('error', (err) => {
    console.error(err);
});
