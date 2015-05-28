/*
Core JavaScript functionality for the application.  Performs the required
Restful calls, validates return values, and populates the ranking table.
 */

/* Builds the updated table for the ranking list */
function buildRankingRows(ranking) {
	return _.template($("#ranking-tmpl").html(), {
		"ranking" : ranking
	});
}

/* Builds the updated table for the game list */
function buildGameRows(game) {
	return _.template($("#game-tmpl").html(), {
		"game" : game
	});
}

/* Uses JAX-RS GET to retrieve current ranking list */
function updateGameTable() {
	// Display the loader widget
	$.mobile.loading("show");

	$.ajax({
		url : "rest/games",
		cache : false,
		success : function(data) {
			$("#game").empty().append(buildGameRows(data));
			gameTable = $("#game-table").DataTable();
		},
		error : function(error) {
			// console.log("error updating table -" + error.status);
		},
		complete : function() {
			// Hide the loader widget
			$.mobile.loading("hide");
		}
	});
}

/* Uses JAX-RS GET to retrieve current ranking list */
function updateRankingTable() {
	// Display the loader widget
	$.mobile.loading("show");

	$.ajax({
		url : "rest/ranking",
		cache : false,
		success : function(data) {
			$("#ranking").empty().append(buildRankingRows(data));
			rankTable = $("#ranking-table").DataTable();
		},
		error : function(error) {
			// console.log("error updating table -" + error.status);
		},
		complete : function() {
			// Hide the loader widget
			$.mobile.loading("hide");
		}
	});
}

/*
 * Attempts to register a new game using a JAX-RS POST. The callbacks the
 * refresh the ranking table, or process JAX-RS response codes to update the
 * validation errors.
 */
function registerGame(gameData) {
	// clear existing msgs
	$('span.invalid').remove();
	$('span.success').remove();

	// Display the loader widget
	$.mobile.loading("show");

	$
			.ajax({
				url : 'rest/games/register',
				contentType : "application/json",
				dataType : "json",
				type : "POST",
				data : JSON.stringify(gameData),
				success : function(data) {
					console.log("Game registered");

					// clear input fields
					$('#reg')[0].reset();

					// mark success on the registration form
					$('#formMsgs').append(
							$('<span class="success">Game Registered</span>'));
					updateGameTable();
					updateRankingTable();

				},
				error : function(error) {
					if ((error.status == 409) || (error.status == 400)) {
						console.log("Validation error registering user!");

						var errorMsg = $.parseJSON(error.responseText);

					} else {
						console.log("error - unknown server issue");
						$('#formMsgs')
								.append(
										$('<span class="invalid">Unknown server error</span>'));
					}
				},
				complete : function() {
					// Hide the loader widget
					$.mobile.loading("hide");
				}
			});
}

/*
 * Attempts to delete a game using a JAX-RS POST. The callbacks the refresh the
 * ranking table, or process JAX-RS response codes to update the validation
 * errors.
 */
function deleteGame(gameId) {

	// Display the loader widget
	$.mobile.loading("show");

	$
			.ajax({
				url : 'rest/games/remove',
				contentType : "application/json",
				dataType : "json",
				type : "POST",
				data : JSON.stringify(gameId),
				success : function(data) {
					console.log("Game removed");

					// mark success on game table
					$('#tableGame').append(
							$('<span class="success">Game Removed</span>'));

					if (typeof gameTable === 'undefined') {
						updateGameTable();
					} else {
						gameTable.destroy();
						updateGameTable();
					}

				},
				error : function(error) {
					if ((error.status == 409) || (error.status == 400)) {
						console.log("Validation error registering user!");

						var errorMsg = $.parseJSON(error.responseText);

					} else {
						console.log("error - unknown server issue");
						$('#tableGame')
								.append(
										$('<span class="invalid">Unknown server error</span>'));
					}
				},
				complete : function() {
					// Hide the loader widget
					$.mobile.loading("hide");
				}
			});
}
