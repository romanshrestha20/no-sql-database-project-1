const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

require('dotenv').config();
morgan('tiny');

const app = express();

const PORT = 8080;

// set the view engine to ejs

app.set('view engine', 'ejs');


// middleware

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());


// routes

app.get('/burgers', async (req, res) => {
    const url = process.env.url;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Cassandra-Token': process.env.ASTRA_DB_APPLICATION_TOKEN
        }
    };
    try {
        const response = await fetch(url, options);
        const json = await response.json();
        res.json(json);
    }catch (error) {
          console.error(error);
        }


    });
const notFound =(req, res, next)=> {
    res.status(404);
    const error = new Error("Not Found");
    next(error)

}
const errorHandler = (error, req, res) =>{
    res.status(res.statusCode || 500)
    res.json({
     message: error.message
    })
}


app.use(notFound)
app.use(errorHandler)


// runnning the server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}/burgers`);
});