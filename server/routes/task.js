const express = require('express');

const taskRoutes = express.Router();

const dbo = require('../db/conn');

const ObjectId = require('mongodb').ObjectId;

taskRoutes.route('/task').get(function (req, res) {
    let db_connect = dbo.getDb('todo');
    db_connect
        .collection('tasks')
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

taskRoutes.route('/task/add').post(function (req, response) {
    let db_connect = dbo.getDb();
    let myobj = {
        task_author: req.body.task_text,
        task_text: req.body.task_text
    };
    db_connect.collection('tasks').insertOne(myobj, function (err, res) {
        if (err) throw err;
        response.json(res);
    })
})

taskRoutes.route('/:id').delete((req, response) => {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId( req.params.id )};
    db_connect.collection('tasks').deleteOne(myquery, function (err, obj) {
        if (err) throw err;
        console.log('1 document deleted');
        response.status(obj);
    });
});

module.exports = taskRoutes;