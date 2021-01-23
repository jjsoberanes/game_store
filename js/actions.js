const rightButtonSectionOne = document.getElementById('right_button_section_one');
const leftButtonSectionOne = document.getElementById('left_button_section_one');

const scrollHorizontalGrid = document.getElementById('trending_products_grid_scroll');

// rightButtonSectionOne.addEventListener("click", ()=>{
//     console.log('Hola de nuevo');
// });


rightButtonSectionOne.onclick = function(){
    scrollHorizontalGrid.scrollLeft += scrollHorizontalGrid.scrollWidth;
    console.log('Botón derecho');
}

leftButtonSectionOne.onclick = function(){
    scrollHorizontalGrid.scrollLeft -= scrollHorizontalGrid.scrollWidth;
    console.log('Botón izquierdo');
}