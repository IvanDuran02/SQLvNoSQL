import Fastify from 'fastify';

const app = Fastify();


app.addHook('onRequest', (request, reply, done) => {
    reply.header("Access-Control-Allow-Origin", "*");
    reply.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    reply.header("Access-Control-Allow-Headers", "Content-Type");
    done();
});

app.get('/hello', (request, reply) => {
  reply.send('Hello, world!');
  console.log("Reply sent...")
});

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  console.log('App listening on port 3000');
});
