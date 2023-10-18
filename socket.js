import io from 'socket.io-client';

let socket;

export const createSocket = (url) => {
	socket = io(url);
  return true;
};

export const sendMessage = (name = 'message', message) => {
  socket.emit(name, message);
}

export const subscribe = (message, forwardMessage) => {
  socket.on(message, forwardMessage);
}