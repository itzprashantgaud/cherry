document.addEventListener('DOMContentLoaded', function() {
    var titleElements = document.querySelectorAll('.title');
    var containerElement = document.querySelector('.container');
    var closeElements = document.querySelectorAll('.close');
  
    titleElements.forEach(function(titleElement) {
      titleElement.addEventListener('click', function() {
        containerElement.classList.add('open');
      });
    });
  
    closeElements.forEach(function(closeElement) {
      closeElement.addEventListener('click', function() {
        containerElement.classList.remove('open');
      });
    });
  });
  
