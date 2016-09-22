/**
 * Created by Abdullah on 9/22/2016.
 */

$(document).ready(function() {
    $('.panel-win').responsiveEqualHeightGrid();

    // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);
});

//Function to the css rule
function checkSize(){

}
