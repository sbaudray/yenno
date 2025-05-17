import Fastify from "fastify";

const { HOST = "localhost" } = process.env;

const fastify = Fastify();

fastify.get("/", async function () {
  return "Hello";
});

const start = async () => {
  try {
    await fastify.listen({ host: HOST, port: 3000 });
    console.log(`listening on ${HOST}:3000`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
