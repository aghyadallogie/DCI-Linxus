const User = require('../model/User');

exports.getUsers = (req, res) => {
    console.log('here we are !');
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
        refs: { $in: searchParams },
    })
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