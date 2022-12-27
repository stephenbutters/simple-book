# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Deployment Scripts

In the project directory, you can run:

### `docker network create simple-book-network`
Create a docker network.

### `docker pull mongo`
Get the MongoDB docker image.

### `docker run --name mongodb -d -p 27017:27017 --net simple-book-network mongo`
Run the MongoDB container.

### `docker pull stephenbutters/simple-book-app`
Get the simple app docker image

### `docker run --name simple-app -p 49160:4000 -d --net simple-book-network stephenbutters/simple-book-app`
Run the simple app container

## Now the web is available via `http://localhost:49160/`

## Demo GIF
<img src="https://raw.githubusercontent.com/stephenbutters/simple-book/master/demo.gif" width="731" height="658"/>