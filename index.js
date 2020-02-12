/* eslint-disable no-undef */
'use strict';

function listEdit() {
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    const userItem = $(this).find('#shopping-list-entry');
    $('ul').append(`
    <li>
      <span class="shopping-item">${userItem.val()}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>
    `);
    userItem.val('');
  });

  $('.shopping-list').on('click', '.shopping-item-toggle', event => {
    $(event.currentTarget).closest('.shopping-item-controls').siblings('.shopping-item').toggleClass('shopping-item__checked');
  });

  $('.shopping-list').on('click', '.shopping-item-delete', event => {
    $(event.currentTarget).closest('li').remove('li');
  });
}

$(listEdit);