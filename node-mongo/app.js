const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./models/blog');
const couriers = require('./routes/couriers');
const path = require('path');
require('dotenv').config();

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_DOMAIN}/node-tuts?retryWrites=true&w=majority`
const app = express();
const PORT = process.env.PORT || 4000;


mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true })
.then((result)=>{
  app.listen(PORT,'localhost', () => {
    console.log(`app listening on port ${PORT}`);
    // console.log('aa' + result);
  })
}).
catch(error=>console.error(error))



app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  Blog.find()
  .then(result => {
    res.status(200).json(result);
  })
  .catch(err => {
    console.log(err);
  });
  })
  app.get('/books',(req,res)=>{
    console.log(db.collection("companies").find().limit(2));
res.json({'mssg':'asdfsdf sfs fsd f sf'})

  })

  app.get('/add-blog',(req,res) =>{
    const blog = new Blog({
      title: 'new blog',
      snippet:'asdfdfsdfsdfdsfsdfsdfsdfsdfsd',
      body: 'asdfadsfsdfsdfsdfsdfsd fsd fsd fsd fsd fsd fsd f sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf '
    });

    blog.save()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });

  })


  app.use('/api/couriers',couriers)