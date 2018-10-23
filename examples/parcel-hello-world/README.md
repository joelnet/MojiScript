# MojiScript Hello World

Parcel Hello World example.

## Install

```bash
# clone repository
git clone https://github.com/joelnet/MojiScript.git

# enter directory
cd MojiScript/examples/parcel-hello-world

# install dependencies
npm install -g parcel-bundler
```

## Run

```bash
parcel index.html
```

Go to [http://localhost:1234/](http://localhost:1234/)
You should see the output

```
Hello World
```

## Code

```javascript
document.getElementById('message').innerText = "Hello World!";
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Parcel Demo 01</title>
</head>
<body>
    <div id="message"></div>
    <script src="./app.js"></script>
</body>
</html>
```