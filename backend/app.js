const express = require('express');

const PORT = 8000;

const app=express();

var multer = require('multer');

//images to be stored in uploads
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        const dir = './public/uploads/' + file.fieldname;        
        cb(null, dir);
    },
    filename: function(req, file, cb) {
        cb(null, Date.now()+'-'+file.originalname)
    }

})

//only .jpg, .jpeg, and .png files are allowed
const fileFilter = (req, file, cb)=>{
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/jgp' || file.mimetype == 'image/png')
    {
        cb(null,true);
    }
    else
    {
        cb(null,false);  
    }
}

const categoryAllowed =  [{name : 'travel', maxCount : 1}, {name : 'cars', maxCount : 1}, {name : 'animals', maxCount : 1}, {name : 'landscape', maxCount : 1}];

var upload = multer({
    storage:storage,
    fileFilter:fileFilter
}).fields(categoryAllowed)

app.get("/", (req,res)=>
{       
    res.send("Hello, server is up!")
})



app.post('/upload', function (req, res) {
    upload(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        // A Multer error occurred when uploading.        
        return res.status(500).send("Wrong category!");
      } else if (err) {
        // An unknown error occurred when uploading.        
        return res.status(500).send("Something wentwrong!");
      }
  
      // Everything went fine.
               
      if(Object.keys(req.files).length !== 0){
      return res.status(200).send("file uploadded successfully")
      }
      else{
        return res.status(500).send("couldn't upload the given file type");
      }      
    })

  })


app.listen(PORT, ()=>
{
    console.log("Server running at PORT 8000");
})