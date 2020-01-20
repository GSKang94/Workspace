## Nodemon

Nodemon is a utility that will monitor for any changes in your source and automatically restart your server in node.js

```js
npm install -g nodemon
```

To kill all node processes

```js
killall node
```

## Body parser

```json
npm install body-parser --save
```

* To handle `HTTP POST` request in **Express.js** we need to install middleware module called `body-parser`.

* body-parser extract the entire body portion of an incoming request stream and exposes it on req.body.

* Add body parse to our app(require)
* Then write this line:

```js
app.use(bodyParser.urlencoded({entended: true})) 
```

## Curl

To make HTTP request from command line.

## Request

Simplified HTTP request client for node.js

```js
var request = require('request');
request('http://www.google.com', function (error, response, body) {
	if(!error && response.statusCode == 200) {
		console.log(body)
	}
})
```

## Locus

Locus is a debugging module which allows you to execute commands at runtime via a REPL.