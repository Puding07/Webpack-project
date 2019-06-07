let ws = new WebSocket('ws://localhost:8080');

ws.onopen = () => {
  console.log('Connection established!');
};

ws.onmessage = (event) => {
  console.log(event.data);
};