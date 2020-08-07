//function to change checkbox

$(document).on('change', ':checkbox', function(e) {
    $(this).closest('td').toggleClass('selected', this.checked);
    $(this).closest('td').prev('td').toggleClass('selected', this.checked);
})
.find(':checkbox').trigger('change');
