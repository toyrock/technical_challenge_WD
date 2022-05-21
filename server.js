const express = require('express')

const app = express();

app.use(express.json())


app.get('/', (req, res) => {
    res.send('hoi')
  })

const phoneRoutes = require("./routes/phones.routes")
app.use("/phones", phoneRoutes)

app.listen(3000);