/*
Movie app
Build an application that uses jQuery to do the following:

-Contains a form with two inputs for a title and rating along with a button to submit the form.
-When the form is submitted, capture the values for each of the inputs and append them to the DOM along with a button to remove each title and rating from the DOM.
-When the button to remove is clicked, remove each title and rating from the DOM.
*/

$('body').append('<div>');

$('div').append('<form>');

const $titleInput = $('<input>').attr({placeholder: "Title"});

const $ratingInput = $('<input>').attr({placeholder: "Rating"});

const $submitButton = $('<button>').text("Submit");

$('form').append($titleInput, $ratingInput, $submitButton);

$($submitButton).on("click", function(e) {
    e.preventDefault();
    let userTitle = $titleInput.val();
    let userRating = $ratingInput.val();
    if (userTitle.length < 2) {
        alert('Title must be at least 2 characters!')
        return;
    }
    if (userRating > 10 || userRating < 0) {
        alert('Rating must be between 0 and 10!')
    } else {
    const $resultDiv = $('form').append('<div>');
    const $newInput = $('<p>').text(`${$titleInput.val()} : ${$ratingInput.val()}`)
    const $removeButton = $('<button>').text('X');
    $newInput.append($removeButton);
    $resultDiv.append($newInput);
    $titleInput.val('');
    $ratingInput.val('');

    $removeButton.on("click", function(e) {
        e.preventDefault();
        e.target.parentElement.remove();
    })
    }
})

