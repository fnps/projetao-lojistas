import $ from 'jquery';

$(()=>{


  let nav = $('aside nav');
  let items = $('aside nav .item');

  nav.addClass('cursor');

  function hoverIn(event){

    let item = $(event.target);
    let index = item.attr('data-index');

    nav.addClass(`item-${index}`);
  }
  function hoverOut(event){

    let item = $(event.target);
    let index = item.attr('data-index');

    nav.removeClass(`item-${index}`);
  }

  items.hover(hoverIn, hoverOut);


});
