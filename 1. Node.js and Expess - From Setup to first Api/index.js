

import express from 'express';

const app = express()
const port = process.env.port || 5000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/contact', (req, res) => {
  res.send('Please Contact')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
