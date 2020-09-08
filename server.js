const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors')
const schema = require ('./schema')
const app = express();
const path = require('path')

app.use(cors())

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

app.use(express.static('public'));
app.get('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'public','index.html'))
})

const PORT = process.env.PORT || 5000

app.listen(PORT,() => console.log(`Listening on port ${PORT}`));
