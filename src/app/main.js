import $ from 'jquery';

var onClickViewListingType = function () {
  if ($('.tf-my-listing-search').length > 0) {
    $('a.btn-display-listing-grid').click(function (event) {
      event.preventDefault();
      localStorage.setItem('VIEW_LISTING_TYPE', 'grid');
      checkViewListing();
    });
    $('a.btn-display-listing-list').click(function (event) {
      event.preventDefault();
      localStorage.setItem('VIEW_LISTING_TYPE', 'list');
      checkViewListing();
    });
  }
};

var checkViewListing = function () {
  if ($('.tf-my-listing-search').length > 0) {
    var type = localStorage.getItem('VIEW_LISTING_TYPE');
    switch (type) {
      case 'grid':
        $('.listing-list-car-wrap').find('.listing-list-car-grid').removeClass('listing-list-car-list');
        $('a.btn-display-listing-grid').addClass('active');
        $('a.btn-display-listing-list').removeClass('active');
        break;
      case 'list':
        $('.listing-list-car-wrap').find('.listing-list-car-grid').addClass('listing-list-car-list');
        $('a.btn-display-listing-list').addClass('active');
        $('a.btn-display-listing-grid').removeClass('active');
        break;
      default:
        break;
    }
  }
}

export default onClickViewListingType;