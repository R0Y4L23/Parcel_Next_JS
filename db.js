const {
    User,Parcel
} = require("./model.js");
var bcrypt = require('bcryptjs');

const show_user_info_by_id = async (id) => {
    let data = await User.findOne({
        email: id
    })
    return data
}

const register_user = async (data) => {

    let user = await User.find({
        "email": data.email
    })
    if (user.length > 0) {
        return "Email already exists"
    }
    let new_user = await User.find({
        "username": data.username
    })
    if (new_user.length > 0) {
        return "Username already in Use"
    }
    try {
        User.create(data, () => {
            console.log("Posted")
        })
        return "Posted Successfully"
    } catch (error) {
        console.log(error)
    }
}

const login_user = async (data) => {
    let user = await User.find({
        "email": data.email
    })
    if (user.length > 0) {
        if (bcrypt.compareSync(data.password, user[0].password)) {
            return {
                m: "Login Successful",
                d: user[0]
            }
        } else {
            return {
                m: "Wrong Password",
                d: {}
            }
        }
    }
    return {
        m: 'Invalid Email',
        d: {}
    }
}

const save_parcel_data = async (data) => {
    try {
        Parcel.create(data, () => {
            console.log("Posted")
        })
        return "Posted Successfully"
    } catch (error) {
        console.log(error)
    }
}

const get_parcel_data_by_email = async (email) => {
    let data = await Parcel.find({
        "postedBy": email
    })
    return data
}

module.exports = {
    show_user_info_by_id,
    register_user,
    login_user,
    save_parcel_data,
    get_parcel_data_by_email
}