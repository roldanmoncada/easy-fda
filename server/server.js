const express = require("express");
const morgan = require("morgan");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const { authMiddleware } = require('./utils/auth')

const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");
const cors = require("cors");

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions)); // Use this after the variable declaration
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
//}



// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });
};


// Call the async function to start the server
startApolloServer(typeDefs, resolvers);
