document.addEventListener('DOMContentLoaded', function() {

    let blocks = document.querySelectorAll('section');
  
    function checkBlocksVisibility() {
  
      let windowHeight = window.innerHeight;

      blocks.forEach(block => {
  
        let blockPosition = block.getBoundingClientRect().top;
  
        if (blockPosition < windowHeight - 100) {
          block.style.transform = "translate(0, 0)";
        } else {
          block.style.transform = "translate(100px, 100px)";
        }
      });
    }

    checkBlocksVisibility();
  
    window.addEventListener('scroll', checkBlocksVisibility);

    
    blocks.forEach(block => {
        block.onclick = function() {
            (toggle_description(block))
        }
    })
    
    function toggle_description(block){
        description = block.querySelector('div');

        if (description.classList.contains('hide') ) {
            description.classList.remove('hide');
            description.classList.add('show' );
        }

        else  {
            description.classList.add('hide');
            description.classList.remove('show');
        }
    }
    
});