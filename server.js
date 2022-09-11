const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http,{
    cors: {
        origin: "https://3000-nnhasan0290-websocket-kpir2x4l0ne.ws-us64.gitpod.io"
    }
});

app.get("/", (req,res, nex) => {
    res.send("Hello World");
})

io.on("connection", (socket) => {
    console.log(" A user is conneected");

    setTimeout(() => {
        socket.send("This is a message to be sent to the client")
    },1000);

    socket.on("disconnect", () => {
        console.log("user is disconnected now");
    })
})

const nsp = io.of('/namespace');
nsp.on("connection", (socket) => {
    console.log("someone has been connected in this namespace");
})

http.listen(3001, () => {console.log("server is listening to the port 3001")})