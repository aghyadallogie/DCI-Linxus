const Reference = require('../model/Reference');

exports.getReferences = (req, res) => {
    Reference.find()
        .then(references => res.json(references))
        .catch(err => res.status(400).json("Error: " + err));
}

exports.addReference = (req, res) => {
    const newReference = new Reference(req.body);
    newReference.save()
        .then(() => res.json("Reference Added!"))
        .catch(err => res.status(400).json("Error: " + err));
}