import { WebSocketServer } from 'ws';
const wss = new WebSocketServer({ port: 8080 });
// event handler for new connections
wss.on("connection", (ws) => {
    console.log("Client connected");
    ws.send("Welcome to the WebSocket server!");
    ws.on("message", (event) => {
        if (event.toString() === "ping") {
            ws.send("pong");
        }
        ;
    });
});
console.log("WebSocket server is running on ws://localhost:8080");
//# sourceMappingURL=index.js.map