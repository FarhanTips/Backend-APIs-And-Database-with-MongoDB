

import express from 'express';

const app = express()
const port = process.env.port || 5000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})
const users = [
  { "id": 1, "name": "John Smith", "email": "john@example.com", "age": 25, },
  { "id": 2, "name": "Emily Johnson", "email": "emily@example.com", "age": 22, },
  { "id": 3, "name": "Michael Brown", "email": "michael@example.com", "age": 28, },
  { "id": 4, "name": "Sophia Williams", "email": "sophia@example.com", "age": 24, },
  { "id": 5, "name": "James Wilson", "email": "james@example.com", "age": 30, }
]
app.get('/users', (req, res) => {
  res.send(users)
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
