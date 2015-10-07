/**
 * Created by gfrethem on 10/7/15.
 */
var assignmentList = [];
var ranOnce = false;
var numberOfAssignmentsOnScreen = 0;

$(function(){

    function getAssignments() {
        $.ajax({
            url: '/assignments/get',
            method: "GET",
            success: function(data) {

                assignmentList = data;

                if (ranOnce == false || assignmentList.length > numberOfAssignmentsOnScreen) {
                    ranOnce = true;
                    numberOfAssignmentsOnScreen = assignmentList.length;
                    $(".listAssigns").children().remove();
                    for (i = 0; i < assignmentList.length; i++) {
                        console.log(assignmentList[i].student_name);
                        var $htmlToAppend = "<p>" + assignmentList[i].student_name + " - " + assignmentList[i].score
                            + " - " + assignmentList[i].date_completed + "</p>";
                        $(".listAssigns").append($htmlToAppend);
                    }
                }
            }
    });

    }

    $('#assignmentsForm').submit(function(event) {
        event.preventDefault();
        var formData = $("#assignmentsForm").serialize();
        $.ajax({
            type: "POST",
            url: "/assignments/add",
            data: formData,
            success: function(response) {
                console.log('VICTORY!');
                //getAssignments();
            }
        })
    });



    getAssignments();

    setInterval(function(){
        getAssignments();
    }, 5000);








});