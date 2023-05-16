const pageHome = document.querySelector('[data-page="home-list"]');
const pageShoppingList = document.querySelector('[data-page="shpng-list"]');

pageHome.addEventListener("click", activePageHome);

    function activePageHome() {
        pageHome.classList.add('active');
        pageShoppingList.classList.remove('active');
        console.log('hello')
            return;
    }

    pageShoppingList.addEventListener("click", activePageShpngList);
    
        function activePageShpngList() {
            pageShoppingList.classList.add('active');
            pageHome.classList.remove('active');
            console.log('hi')
                return;
}
        // -----------------------------add
document.addEventListener('DOMContentLoaded', function() {
  var mobileMenuToggle = document.querySelector('.js-mobile-menu-toggle');
  var mobileMenuClose = document.querySelector('.js-mobile-menu-close');

  mobileMenuToggle.addEventListener('click', function() {
    mobileMenuClose.classList.toggle('show');
  });

  mobileMenuClose.addEventListener('click', function() {
    mobileMenuClose.classList.remove('show');
  });
});
  