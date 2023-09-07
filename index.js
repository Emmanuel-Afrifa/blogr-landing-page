$(document).ready(() => {
    // Adding an event lister to the items in the nav element (for the desktop version) to display/hide the menu when a user hovers the mouse over it
    $('.option').on('mouseenter', event => {
        $current = $(event.currentTarget).find('.more-options').slideDown(300);
    }).on('mouseleave', event => {
        $(event.currentTarget).find('.more-options').slideUp(300);
    })
    

    // Adding an event listener to display/hide the menu for the mobile version
    $('#humburger-icon').on('click', () => {
        // Displaying the menu options
        $('#toggle-menu').toggle()

        // Hiding the previous text and buttons in the nav section
        $('#top-section-info').toggle()
    })

    // Changing the icon for the menu option for the mobile version when it is clicked
    $('#humburger-icon').on('click', () => {
        if ($('#humburger-icon').html() === `<img src="./images/icon-hamburger.svg" alt="">`){
            $('#humburger-icon').html(`<img src="./images/icon-close.svg" alt="">`)
        }
        else {
            $('#humburger-icon').html(`<img src="./images/icon-hamburger.svg" alt="">`)
        }
    })

    // Adding an event listener that displays/hides the choices under each menu option
    $('.mobile-option').on('mouseenter', event => {
        $(event.currentTarget).find('.mobile-more-options').slideDown(300);
    }).on('mouseleave', event => {
        $(event.currentTarget).find('.mobile-more-options').slideUp(300);
    })
})