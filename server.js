let express = require('express')
let app = express()
let bodyparser = require('body-parser')
let session = require('express-session')

// Moteur de template
app.set('view engine', 'ejs')

// Middleware
app.use('/assets', express.static('public'))
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
app.use(session({
    secret: 'clef secrete',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

// Routes
app.get('/', (request, response) => {
    if (request.session.error){
        response.locals.error = request.session.error
        request.session.error = undefined
    }
    response.render('pages/index')
})

app.post('/', (request, response) => {
    if (request.body.message === undefined || request.body.message === ''){
        request.session.error = "Il y a une erreur"
        response.redirect('/')
    }
})

app.listen(8080)