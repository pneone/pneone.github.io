
const button = document.querySelector('.navbar-toggler');
button.addEventListener('click', function () {
  button.classList.toggle('show');
});



var projectName = ['Chase', 'Bank of America', 'Notion Averege', 'Neverland']
var projectApy = [0.02, 0.04, 0.07, 5.00]


var $slider = $("#slider");
var $fill = $(".fill");

var year = 0;
var deposit = 0;
 
function setBar() {
	$fill.css("width", $slider.val()*25 + "%");


  
  year = Number($slider.val()) + 1;
  $(".year-title").html('02. Save for ' + year + ' year / Compounding Period');
  
} 




$slider.on("input", setBar);

setBar();



const ListOutput = document.querySelector('.output-ul');

const outputAPY = (projectName, projectApy, cash) => {
	return `
    <li class="li"   >
      <div class="output-content">
        <div class="output-content-project">
          <div class="output-content-project-name">${projectName}</div>
          <div class="output-content-project-apy ">${projectApy}% APY</div>
        </div>
        <div class="output-content-cash">$${cash}.00</div>
      </div>
      <div class="output-range">
        <div class="output-fill"></div>
        <input class="output-range-input" type="range" min="0" max="100" >
      </div>
    </li>
	`;
};

$(document).ready(function(){
  $(".btn-out").click(function(){
      

      deposit = $('.balance-input-box').val();
      if (deposit <= 50) {
        $('.balance-input').css('border', '2px red solid')
      }else{
        $('.balance-input').css('border', '2px #DEDEF9 solid')
        $(".output-ul").empty();
        $(".output-title").html('Money you could earn on $' + deposit + ' in ' + year + ' year');
        for (let index = 0; index < 4; index++) {
          var price = (deposit * (projectApy[index]/100) * year);
          ListOutput.insertAdjacentHTML('afterbegin', outputAPY(projectName[index], projectApy[index], parseInt(price)));
          
        }
      }
      
  });
});


