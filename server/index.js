var express    = require('express'),
    cors       = require('cors'),
    bodyParser = require('body-parser'),
    app        = express(),
    router     = express.Router(),
    port       = process.env.PORT || 4200,
    db         = require('./db/init'),
    appRouter  = require('./api/api')(router);

// MIDDLEWARE
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// ROUTER
app.use('/api', appRouter);

app.listen(port, () => {
  console.log(`Connected to port ${port}`);
})
