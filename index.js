const express = require("express")
const cors = require("cors")
//require("dotenv").config()
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var multer = require('multer');
var upload = multer();
const {
    body,
    validationResult
} = require('express-validator');
const auth = require("./auth")
const mongoose = require('mongoose');
const {
    show_user_info_by_id,
    register_user,
    login_user,
    save_parcel_data,
    get_parcel_data_by_email
} = require('./db');


console.log("inside server")
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error:'));
db.once('open', function () {
    console.log("Connected to Database")
});

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}));
app.use(upload.array());
app.use(express.static('public'));

app.get("/", (req, res) => {
    return res.status(200).send({
        "Message": "Welcome to Parcel API without Token"
    })
})

app.get("/token", auth, (req, res) => {
    return res.status(200).send({
        "Message": "Welcome to Parcel API"
    })
})


app.post("/login",
    body("email").isEmail().withMessage("Must be a valid Email"),
    body("password").isLength({
        min: 8
    }).withMessage("Password has to be minimum of 8 characters").isAlphanumeric().withMessage("Password must contain both letters and numbers"),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.array()
            });
        }
        let data = req.body
        let m = await login_user(data)
        let payload = {}
        payload["Message"] = m.m
        payload["Body"] = data
        delete payload["Body"]["password"]
        if (m.m == "Login Successful") {
            payload["Token"] = jwt.sign({
                email: m.d["email"],
                username: m.d["username"]
            }, process.env.SECRET_KEY, {
                algorithm: "HS256"
            }, {
                expiresIn: 60 * 60
            });
        }
        return res.status(200).send(payload)
    })

app.post("/register",
    body("username").isAlphanumeric().withMessage("Username must contain both letters and numbers"),
    body("email").isEmail().withMessage("Must be a valid Email"),
    body("password").isLength({
        min: 8
    }).withMessage("Password has to be minimum of 8 characters").isAlphanumeric().withMessage("Password must contain both letters and numbers"),
    body("address").isLength({
        min: 15
    }).withMessage("Address has to be minimum of 15 characters"), async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.array()
            });
        }
        let data = req.body
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(data.password, salt);
        data.password = hash
        let m = await register_user(data)
        let payload = {}
        payload["Message"] = m
        payload["Body"] = req.body
        delete payload["Body"]["password"]
        if (m == "Posted Successfully") {
            payload["token"] = jwt.sign({
                email: data.email,
                username: data.username
            }, process.env.SECRET_KEY, {
                algorithm: "HS256"
            }, {
                expiresIn: 60 * 60
            });
        }
        return res.send(payload)
    })

app.get("/user/:id", auth, async (req, res) => {
    let m = await show_user_info_by_id(req.params.id)
    delete m["password"]
    return res.status(200).send(m)
})


app.get("/parcel", auth, async (req, res) => {
    let m = await get_parcel_data_by_email(req.userinfo.email)
    return res.status(200).send(m)
})

app.post("/parcel",auth,
body("parcelCost").isNumeric().withMessage("Parcel Cost must be a number"),
body("parcelNotes").isLength({
    min: 5
}).withMessage("Parcel Notes has to be minimum of 5 characters"),
body("parcelStartingLocation").isLength({
    min: 5
}).withMessage("Parcel Starting Location has to be minimum of 5 characters"),
body("parcelDestination").isLength({
    min: 5
}).withMessage("Parcel Destination has to be minimum of 5 characters"),
body("senderName").isLength({
    min: 5
}).withMessage("Sender Name has to be minimum of 5 characters"),
body("senderPhoneNumber").isNumeric().isLength({
    min: 10
}).withMessage("Invalid Phone Number"),
body("senderAddress").isLength({
    min: 5
}).withMessage("Receiver Address has to be minimum of 5 characters"),
body("receiverName").isLength({
    min: 5
}).withMessage("Receiver Name has to be minimum of 5 characters"),
body("receiverPhoneNumber").isNumeric().isLength({
    min: 10
}).withMessage("Invalid Phone Number"),
body("receiverAddress").isLength({
    min: 5
}).withMessage("Receiver Address has to be minimum of 5 characters"),
async (req,res)=>{
    const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.array()
            });
        }
    let data = req.body
    let m = await save_parcel_data(data)
    return res.status(200).send(m)
})

app.get('*', function (req, res) {
    res.status(404).send('What??? This is a wrong endpoint...');
});

app.post('*', function (req, res) {
    res.status(404).send('What??? This is a wrong endpoint...');
});

app.listen(process.env.PORT, () => {
    console.log("Server is Running at URL : http://localhost:" + process.env.PORT)
})