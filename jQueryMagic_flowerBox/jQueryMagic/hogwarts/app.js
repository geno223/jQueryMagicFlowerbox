
//if (typeof jQuery == 'undefined'){
    //console.log('oops! I still have to link my jQuery properly!');
 // } //else {console.log('I did it! I linked jQuery and this js file!')};
  
 $(() => {
	// put jQuery in here

//Year 1

    const $container = $('#container');
console.log($container);

const $h1 = $('<h1>Hogwarts</h1>');
console.log($h1);

//Year 2
const $h2 = $('<h2>Geno</h2>');
console.log($h2)

const $h3 = $('<h3>Gryffindor</h3>');
console.log($h3)

const $h4 = $('<h4>Romeo</h4>')
$('h4:first').attr('class', 'dog');
console.log($h4)
//Year 3
const $ul= $('<ul><li>Geno</li></ul>');
console.log($ul);
$('.trunk').html
('<li>Invisibility Cloak</li><li>Magic map</li><li>Time turner</li><li>Bertie Botts Every Flavor [Jelly] Beans.</li>')

//Year 4

const $h5 = $('<h5>Geno</h5>');
console.log($h5)
//Year 5
$('.wand').css('background-color', 'indigo')

$(".secret").hide("slow").delay(2000).show('slow')


});

