//function to change checkbox
//FIXME : This one still use document change, MIGHT HAVE A PROBLEM IN THE FUTURE; if known please do clean up 
$(document).on('change', ':checkbox', function(e) { //search for change in checkbox tag
    $(this).closest('td').toggleClass('selected', this.checked); // this function check the nearest td tag near selected checkbox
    $(this).closest('td').prev('td').toggleClass('selected', this.checked); // this function search for the closest nearest td tag then go to previous td tag
})
.find(':checkbox').trigger('change'); // not sure about this. probably trigger change to checkbox tag
