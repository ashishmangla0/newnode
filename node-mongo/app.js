const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");

//swagger
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');


const couriers = require('./routes/couriers');
const path = require('path');
const search = require('./routes/search');
require('dotenv').config();

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_DOMAIN}/udaantest?retryWrites=true&w=majority`
const app = express();
const PORT = process.env.PORT || 4000;




//Swagger Configuration
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Employee API',
      version: '1.0.0'
    }
  },
  apis: ['api.js', 'routes/*.js'],
}







mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(PORT, 'localhost', () => {
      console.log(`app listening on port ${PORT}`);
      // console.log('aa' + result);
    })
  }).
  catch(error => console.error(error))

app.use(cors());
app.use(express.json());
app.use('/static', express.static(path.join(__dirname, 'public')))



app.use('/couriers', couriers);
app.use('/search', search)