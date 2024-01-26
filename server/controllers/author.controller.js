const Author = require("../models/author.model")


module.exports.createAuthor = async (req, res) => {
    try {
        const newAuthor = await Author.create(req.body);
        res.status(201);
        res.json(newAuthor);
    } catch (error) {
        res.status(500);
        res.json(error);
    }
};

module.exports.findAllAuthor = async (req, res) => {
    try {
        const autores = await Author.find()
        res.status(200);
        res.json(autores);
    } catch (error) {
        res.status(500);
        res.json({ error: error });
    }
};

module.exports.findAuthor = async (req, res) => {
    const { id } = req.params
    try {
        const autor = await Author.findOne({ _id: id });
        if (autor) {
            res.status(200);
            res.json(autor);
            return
        }
        res.status(404);
        res.json({ error: "Author not found" });
    } catch (error) {
        res.status(500);
        res.json({ error: error });
    }
};

module.exports.updateAuthor = async (req, res) => {
    const { id } = req.params
    try {
        const updatedAuthor = await Author.findOneAndUpdate({ _id: id }, req.body, { new: true });
        res.status(200);
        res.json(updatedAuthor);
    } catch (error) {
        res.status(500);
        res.json(error);
    }
};

module.exports.deleteAuthor = async (req, res) => {
    const { id } = req.params
    try {
        const deletedAuthor = await Author.deleteOne({ _id: id });
        res.status(200);
        res.json(deletedAuthor);

    } catch (error) {
        res.status(500);
        res.json({ error: error });
    }
};