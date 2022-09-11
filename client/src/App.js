import {io} from "socket.io-client";

function App() {
  const socket = io("https://3001-nnhasan0290-websocket-kpir2x4l0ne.ws-us64.gitpod.io");
  socket.on("message", (data) => {console.log(data)});
  return (
    <div className="App">
      <h1>Here is the client application</h1>
    </div>
  );
}

export default App;
