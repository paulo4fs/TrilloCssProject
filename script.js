const locationBtn = document.getElementById('btn-location');

locationBtn.addEventListener('click', () => {
  const url =
    'https://www.google.pt/maps/place/Albufeira,+Portugal/@37.11233,-8.3584144,11z/data=!3m1!4b1!4m5!3m4!1s0xd1aceae38ddc41f:0xed22e7a562441045!8m2!3d37.0890719!4d-8.2478796';
  window.open(url, '_blank');
});
