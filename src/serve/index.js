const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const axios = require('axios');
app.use(cors());
app.use(bodyParser.json());
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'xiaolong' && password === '123123') {
    const state = {
      code: 200,
      state: 'success'
    }
    res.send(state);
  } else {
    res.send('Invalid username or password');
  }
});
app.post('/songs', async (req, res) => {
  try {
    const response = await axios.get('https://music.163.com/api/playlist/detail?id=123123');
    const songs = response.data.playlist.tracks.map(song => ({
      id: song.id,
      name: song.name,
      artist: song.ar.map(artist => artist.name).join(', '),
    }));
    res.json({ songs });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch song list' });
  }
});


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
