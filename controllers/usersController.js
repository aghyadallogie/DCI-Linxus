const User = require('../model/User');

exports.getUsers = (req, res) => {
    User.find().select('-password -__v').then(users => res.json(users))
        .catch(err => res.status(400).json("Error: " + err));
}

exports.getUser = (req, res) => {
    User.findById(req.params.id).then(users => res.json(users))
        .catch(err => res.status(400).json("Error: " + err));
}

exports.addUser = (req, res) => {
    const newUser = new User(req.body);
    newUser.save()
        .then(() => res.json("User Added!"))
        .catch(err => res.status(400).json("Error: " + err));
}

exports.searchUsers = (req, res) => {
    const searchParams = req.body.refs;
    User.find({
        refs: { $all: searchParams },
    }).select('-password -__v -date')
        .then((users) => res.json(users))
        .catch((err) => res.status(400).json('Error: ' + err));
};

exports.loginUser = (req, res) => {
    const user = User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) return res.status(400).send('Email does not exist !')
        }).then(user => {
            if (req.body.password !== user.password) return res.status(400).send('Invalid password !');
        }).then(user => {
            const token = jwt.sign({ _id: user.id }, process.env.SECRET_TOKEN);
            res.header('auth-token', token).send('Logged in using token: ' + token);
        })
        .catch(err => res.status(400).send(err))
};



// exports.loginUser = async (req, res, next) => {
//     const email = req.body.email;
//     const password = req.body.password;

//     try {
//         const user = await User.findOne({ email });
//         if (!user)
//             throw new createError(
//                 404,
//                 `There is no user account for '${req.body.email}.'`
//             );

//         const token = user.generateAuthToken();
//         const canLogin = await user.checkPassword(password);
//         if (!canLogin)
//             throw new createError(
//                 404,
//                 `Please check your password.`
//             );
//         const data = user.getPublicFields();
//         res
//             .status(200)
//             .cookie('token', token, {
//                 expires: new Date(Date.now() + 604800000),
//                 secure: false, // if we are not using https
//                 httpOnly: true,
//             })
//             .send(data);
//     } catch (e) {
//         next(e);
//     }
// };

// exports.authenticateUser = async (req, res, next) => {
//     res.status(200).send(req.user);
// }

// exports.loginUser = async (req, res) => {
//     // //Validate input data using a separate joi validation file
//     // const { error } = loginValidation(req.body);
//     // if (error) return res.status(400).send(error.details[0].message);
//     //Check if email already exists
//     const user = await User.findOne({ email: req.body.email });
//     if (!user) return res.status(400).send('Email does not exist !')
//     //Check if password is correct
//     // const validPassword = await bcrypt.compare(req.body.password, user.password);
//     // if(!validPassword) return res.status(400).send('Invalid password !');
//     if (req.body.password !== user.password) return res.status(400).send('Invalid password !');
//     //Create and assign jwt
//     const token = jwt.sign({ _id: user.id }, process.env.SECRET_TOKEN);
//     res.header('auth-token', token).send('Logged in using token: ' + token)
// };