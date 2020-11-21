# Land a Job!!

- `Learn HTML,` 
- CSS,
- Sass,
- Flexbox,
- Grid,
- JavaScript,
- NodeJS, 
- React,
- <<<<<PHP>>>>>
-  Grunt/Gulp.
- Practice by making projects.
- Make Portfolio.
- Prepare for interview.
- Apply.

## Interview 

### Before interview

- Do research on the company. Find out what problems they are solving. Figure out what problems they have that they are hiring for. Try to be the person that fills those roles and are the person they want to hire
- Send a thank you letter ASAP! Always send a follow up email thanking them for their time and be confident they will choose you. I always tell them that I hope to hear back soon on when I can start and help them solve their problems. Remember, as a developer you are a problem solver.

### Questions

1. **Why you wanna become a web devloper?**

I like coding because it's an ever growing field. And if you're not growing you're dying. I love learning new things, creating new ideas, and watching them come together. Seeing that blank canvas turn into something beautiful that millions of people can see is awesome. 


2. **What is responsive website?**

When a website responds to the size of the screen it's viewed on, it’s called a *responsive* website.


3. **How can we make one?**
- Using flexbox instead of traditional box.
- using relative units of measurement for eg. rem, em, % etc.
- Using media queries.


4. **What are media queries?**

CSS uses *media queries* to adapt a website's content to different screen sizes. With media queries, CSS can detect the size of the current screen and apply different CSS styles depending on the width of the screen.

### Questions to ask interviewer

Q1. Is there room to grow into higher level positions ?

Q2. Do you offer option to work remotely ?

Q3. can you tell me about how a project typically goes.


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