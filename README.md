# onechan

[![Build Status](https://travis-ci.com/malsf21/onechan.svg?branch=master)](https://travis-ci.com/malsf21/onechan)

onechan is an anonymous one-channel chatroom. I built it with [React](https://reactjs.org), [reactstrap](https://reactstrap.github.io/), & [Firebase](https://firebase.google.com), with [moment](https://momentjs.com/) and [random-words] as supporting libraries, and avatars from [Adorable Avatars](http://avatars.adorable.io/). I'll likely add a few more features if I'm feeling like it, but I'm satisfied with this project as-is.

If you'd like to set this up yourself, all you need is node (I developed this on v10) and a firebase account. 

Before you run the app, you need to edit `src/firebase.js` and replace the information with the key for your own firebase project.

Then, all you need to do is:

```bash
$ npm install
$ npm start
```

