const Todo = require('../model/auth-model.js')

const getAllRecords = async (req, res) => {
    try {
        // const { _id } = req.body;
        const data1 = await Todo.find({});
        res.status(200).json(data1)
    } catch (err) {
        console.log(err);
    }
}

const createRecord = async (req, res) => {
    try {
        const { data } = req.body;

        if (!data) {
            return res.status(400).json({ message: 'Please fill to add todo in todo list' });
        }

        const newTodo = new Todo({ data });
        await newTodo.save();
        res.status(201).json("created")

    } catch (err) {
        console.log(err)
    }
}


const updateRecords = async (req, res) => {
    try {
        const { _id, data } = req.body;
        const updatedResult =
            await Todo.findByIdAndUpdate(
                { _id: _id },
                {
                    data: data

                }
            );
        res.status(200).json("Updated");
    } catch (error) {
        console.log(error);
    }
};

const deleteRecord = async (req, res) => {
    try {

        var { _id } = req.body;
        console.log(_id)
        await Todo.findByIdAndDelete({_id:_id});
        res.status(200).json("deleted");

    } catch (err) {
        console.log(err);
    }
}



module.exports = { getAllRecords, createRecord, updateRecords, deleteRecord };