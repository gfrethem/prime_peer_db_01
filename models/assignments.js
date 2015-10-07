/**
 * Created by gfrethem on 10/7/15.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var assignmentSchema = new Schema({
    assignment_number: Number,
    student_name: {type: String, required: true},
    score: String,
    date_completed: {type: Date, required: true},
    created_at: Date,
    updated_at: Date
});

var Assignment = mongoose.model('Assignment', assignmentSchema);

module.exports = Assignment;
