/**
 * Created by gfrethem on 10/7/15.
 */
var express = require('express');
var router = express.Router();
//var mongoose = require('mongoose');
var Assignment = require('../models/assignments');

router.get('/', function(request, response, next) {
    response.render('assignments', { title: 'Assignment List'})
});

router.get('/get', function(request, response, next) {
    Assignment.find({}, function(err, assignments) {
        response.json(assignments);
    })
});

router.post('/add', function(request, response, next) {
    var newAssignment = new Assignment(request.body);
    newAssignment.save();
});

module.exports = router;