import react from 'react';
const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=520d798110404b4f8a59bc8b1e11a699&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";
function Login() {
    return (
      <div className="App">
   <div>This is the login page</div>
<a href={AUTH_URL} className="bg-orange-200">
Login Spotify
</a>
      </div>
    );
  }
  
  export default Login;
  