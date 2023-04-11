import Player from "./containers/Player";
import Playlist from "./containers/Playlist";
import Search from "./containers/Search";

function App() {
  return (
    <div className="container">
      <Search />
      <Playlist />
      <Player />
    </div>
  );
}

export default App;
