# Mock Data Generator

To run this demo

clone this repo

```
npm install
npm start
```

then navigate to [http://localhost:3000](http://localhost:3000)

## Options

serve on a different port

```
PORT=3001 npm start
```

change the rate of data generation

by default, each GET request will add new data 40% of the time

to change the rate to 90%

```
CHANCE_FOR_NEW_DATA=0.9 npm start
```
