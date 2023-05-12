import Container from 'react-bootstrap/Container';
import { useEffect } from 'react';
import './css/default.css'

async function PlaylistLoad () {
    // Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'BQD5R9Y5KPMQtSL5-rMZFInkKcYoztXR7_qxFHEunOuMFo6qbM_uv-51ZU8tiZxmd3TIAn4l1SGoH_ZEYi9WNvhLtVKBcv9lo1YuYukY35-BlpaGNJoWngQF0UFW-eR6xzodDOMHM30aw_lXjwBkGoqdWz8nu7z525fmQqmDsUb3Jl1PFyTN8lUHUd-YzPiRBhO2LDx3vyx4S5ioqT8Ja8e9y2uItXH8nWrjpR2Z2QX3CzWStEBlD37rt0jiZciRlMDuVQR3v3ONKb5bH5Iu';
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

async function getTopTracks(){
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (await fetchWebApi(
    'v1/me/top/tracks?time_range=short_term&limit=5', 'GET'
  )).items;
}

const topTracks = await getTopTracks();
console.log(
  topTracks?.map(
    ({name, artists}) =>
      `${name} by ${artists.map(artist => artist.name).join(', ')}`
  )
);
}

function Spotify() {
    useEffect(() => {
        PlaylistLoad();
      }, []);

  return (
    
    <Container>
    </Container>
  );
}

export default Spotify;