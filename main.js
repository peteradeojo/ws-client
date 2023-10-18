import './style.css';
import { createSocket, sendMessage, subscribe } from './socket';

// setupCounter(document.querySelector('#counter'))

let connected = false;
document.querySelector('#connect').addEventListener('click', () => {
	const url = document.querySelector('#url').value;
	if (!url || url.length < 6) {
		return;
	}
	connected = createSocket(url);
	// if (connected) alert('Connected!');
});

document.querySelector('#send').addEventListener('click', () => {
	const message = document.querySelector('#message').value;
	const name = document.querySelector('#name').value;
	if (!message || message.length < 1) {
		return;
	}
	sendMessage(name, message);
});

document.querySelector('#subscribe')?.addEventListener('click', function (e) {
	const el = document.querySelector('#add-subscription');

  const channel = el.value;

  if (channel.length < 1) {
    return;
  }

  const destination = document.querySelector("#subs");

  subscribe(channel, (data) => {
    const li = document.createElement('li');
    li.innerHTML = data;

    destination.appendChild(li);
  });
});
