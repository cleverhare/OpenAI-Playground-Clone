const express = require('express')
const app = express()
const path = require('path')
const { Configuration, OpenAIApi } = require("openai");
const port = 3000
require('dotenv').config()

app.set('view engine', 'pug')
app.use(express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'pug');
app.get('/', (req, res) => {
  res.render("../static/index")
})
app.post('/ai', async (req, res) => {
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
      });
      const openai = new OpenAIApi(configuration);
      
      const response = await openai.createCompletion({
        model: "text-davinci-002",
        prompt:req.body.text,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
    res.render(path.join(__dirname,"static/index"),{data: response.data.choices[0].text} )
//   res.render("../static/index")
  console.log(response.data.choices[0].text)
})

app.listen(port, () => {
  console.log(` app is listening on http://localhost:${port}`)
})