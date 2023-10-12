// function lienMenu() {
//     var menu = document.getElementById('menu');
//     var items = menu.getElementsByTagName('li');

//     for (var i = 0; i < items.length; i++) {
//         var item = items[i];
//         var id = item.id;
//         var lien = item.getElementsByTagName('a')[0];

//         lien.href = id + '.html';
//     }
// }

// lienMenu();

jQuery(document).ready(function() {
    if (jQuery('#menu').length > 0) {
        var itemMenu = jQuery('#menu li a');
        var section = jQuery('.section-items');

        jQuery(itemMenu).each(function() {
            var item = jQuery(this);

            item.click(function(event) {
                event.preventDefault();

                var id = jQuery(this).parent().attr('id');

                itemMenu.parent().removeClass('active');
                jQuery(this).parent().addClass('active');
                
                section.removeClass('active');
                jQuery('#section-' + id).addClass('active');
            })
        })
    }
});
