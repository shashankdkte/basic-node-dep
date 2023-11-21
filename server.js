const express = require("express");
const app = express();

const PORT = 8000;

const path = require("path")
app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res)=>{ 
    res.set('Content-Type', 'text/html'); 
    res.status(200).render("index.html")
}); 


app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`)
})