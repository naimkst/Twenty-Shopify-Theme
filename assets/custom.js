function updateQty(id, qty) {
  $.ajax({
    type: 'POST',
    url: '/cart/change',
    dataType: 'json',
    data: {
      line: id,
      quantity: qty,
    },
    success: function (data) {
      console.log('success', data);
      window.location.reload();
    },
  });
}
function removeItem(id, qty) {
  $.ajax({
    type: 'POST',
    url: '/cart/change',
    dataType: 'json',
    data: {
      line: id,
      quantity: qty,
    },
    success: function (data) {
      console.log('success', data);
      window.location.reload();
    },
  });
}
