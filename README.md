# public_server
A public server based on ngrok. By default listens on port `3000` on local machine, which can be changed in `index.js`. The server caches all requests in-memory and returns in JSON format for Get Request.

## Launches a ngrok server

1. Url is mentioned in console.
2. Browse http://localhost:3000 to see request history.


## Common remedies

In case ngrok is not available or blocked, you can start any tunneling service to expose localhost:3000 adn it would serve the same functionality. Equivalent to `ngrok http 3000`.
