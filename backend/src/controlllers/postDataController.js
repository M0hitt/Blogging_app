// postDataController.js
import  connection  from '../config/dbConfig.js';

export function getAllPosts(req, res) {
  const sql = 'SELECT * FROM posts';
  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error executing the query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(results);
  });
}

export function createPost(req, res) {
  const data = req.body;
  const sql = 'INSERT INTO posts (title, content, created_at) VALUES (?, ?, ?)';
  const values = [data.title, data.content, data.timestamp];
  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error executing the query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json({ message: 'Data saved successfully!' });
  });
}

export function deletePost(req, res) {
  const Id = req.params.id;
  const sql = 'DELETE FROM posts WHERE id = ?';
  connection.query(sql, [Id], (err, result) => {
    if (err) {
      console.error('Error deleting data:', err);
      res.status(500).json({ error: 'Error deleting data' });
    } else {
      console.log(`Data with ID ${Id} deleted successfully.`);
      res.sendStatus(204);
    }
  });
}

export function updatePost(req, res) {
  const Id = req.params.id;
  const data = req.body;
  const sql = 'UPDATE posts SET title = ?, content = ? WHERE id = ?';
  const values = [data.title, data.content, Id];
  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error Updating data:', err);
      res.status(500).json({ error: 'Error Updating data' });
    } else {
      console.log(`Data Updated!`);
      res.sendStatus(204);
    }
  });
}
