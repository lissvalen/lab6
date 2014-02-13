'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	$('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	$.get('/project/' + idNumber, addProjectThing);

	console.log("User clicked on project " + idNumber);
	console.log("/project/" + idNumber);
	console.log(e);

	/*
	$(".details").html(e['title']);
	
	var projectHTML = '<a href="#" class="details">' + '<img src="' + e['image'] + '"class="img">' + '<p>' + e['title'] + '</p> </a>';

	$(".details").html(projectHTML);

	$(".details").html(e['summary']);
	*/
	
}

function addProjectThing(e) {
	console.log(e);
	var idNum = e['id'];
	var selector = "#project" + idNum + " .details";
	console.log(selector)
	/*
	*
	var projectHTML = '<a href="#" class="details">' + '<img src="' + e['image'] + '"class="img">' + '<p>' + e['title'] + '</p> </a>';

	$(".details").html(projectHTML);
	$(".details").html(e['summary']);
	*/

	$(selector).html(e['date']);
	$(selector).html(e['image']);
	$(selector).html(e['summary']);
}

/*
 * Make an AJAX call to retrieve a color palette for the site
 * and apply it
 */
function randomizeColors(e) {
	console.log("User clicked on color button");
}