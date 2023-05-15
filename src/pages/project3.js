import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { useState } from 'react';

async function fetchWebApi(endpoint, method, body) {
  const token = 'BQBG82LRFg6obodG6pE1aIqvQSA37NbmdjSJJEUOoasoCjW-pfNNjnsFv0wAQag1OeKbnXzVxiN36QgMf29dWXHhmGIyWAud2zcN2Y78z_FVmae4X6xd';
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

async function searchTracks(query){
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  let newSearch = '';

  for (let i = 0; i < query.length; i++) {
    if (query[i] === ' ') {
      newSearch += '+';
    } else {
      newSearch += query[i];
    }
  }
  
  return (await fetchWebApi(
    'v1/search?q=' + newSearch + '&type=track&market=US&limit=5', 'GET'
  ));
}

async function printResult(query) {
  const searchResult = await searchTracks(query);

  for (let i = 1; i <= 5; i++) {
    //number
    document.getElementById("" + i).innerHTML = i;
    //song
    document.getElementById("song" + i).innerHTML = searchResult['tracks']['items'][i - 1]['name']
    //artist
    document.getElementById("artist" + i).innerHTML = searchResult['tracks']['items'][i - 1]['artists'][0]['name']
    //album
    document.getElementById("album" + i).innerHTML = searchResult['tracks']['items'][i - 1]['album']['name']
  }
}


function Spotify() {
  const [search, setSearch] = useState('');

return (
  <Container>
      <Form>
      <Form.Group className="mb-3" controlId="searchForm">
        <Form.Label>Search for a song here! (will not work on github website because I don't want to push up API keys.</Form.Label>
        <Form.Control type="text" onChange={(event) => setSearch(event.target.value)} />
      </Form.Group>
      </Form>
      <Button variant="primary" onClick={() => printResult(search)}>Search</Button>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Song</th>
          <th>Artist</th>
          <th>Album</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td id='1'></td>
          <td id='song1'></td>
          <td id='artist1'></td>
          <td id='album1'></td>
        </tr>
        <tr>
          <td id='2'></td>
          <td id='song2'></td>
          <td id='artist2'></td>
          <td id='album2'></td>
        </tr>
        <tr>
          <td id='3'></td>
          <td id='song3'></td>
          <td id='artist3'></td>
          <td id='album3'></td>
        </tr>
        <tr>
          <td id='4'></td>
          <td id='song4'></td>
          <td id='artist4'></td>
          <td id='album4'></td>
        </tr>
        <tr>
          <td id='5'></td>
          <td id='song5'></td>
          <td id='artist5'></td>
          <td id='album5'></td>
        </tr>
      </tbody>
    </Table>
  </Container>
);
}

export default Spotify;