/* eslint-disable no-undef */
'use strict';

function listEdit() {
  $('#js-shopping-list-form').submit(event => {

    event.preventDefault();

    const userItem = $(event.currentTarget).find('#shopping-list-entry');

    $('ul').append(`
    <li>
      <span class="shopping-item">${userItem}</span>
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
  });
}

$(listEdit);