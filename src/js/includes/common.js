import $ from 'jquery';

let selectedItem = 0;

function setSelectedItem(item){
  selectedItem = item;
}
function onready(callback = ()=>{} ){

  $(()=>{


    let nav = $('aside nav');
    let items = $('aside nav .item');

    nav.addClass('cursor');

    function hoverIn(event){
console.log(selectedItem);
      let item = $(event.target);
      let index = item.attr('data-index');

      if(selectedItem > 0)
        nav.removeClass(`item-${selectedItem}`);

      nav.addClass(`item-${index}`);
    }
    function hoverOut(event){

      let item = $(event.target);
      let index = item.attr('data-index');

      nav.removeClass(`item-${index}`);

      if(selectedItem > 0)
        nav.addClass(`item-${selectedItem}`);
    }

    items.hover(hoverIn, hoverOut);

    callback();

  });

}
export {onready, setSelectedItem};
