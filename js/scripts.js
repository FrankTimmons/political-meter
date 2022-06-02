function politicalValueCalc(opinion1, opinion2, opinion3, opinion4, opinion5){
return opinion1 + opinion2 + opinion3 + opinion4 + opinion5;
}

$(document).ready(function() {
  $("form#politicalTest").submit(function(event) {
    event.preventDefault();
    const opinion1 = parseInt($("input:radio[name=opinion1]:checked").val());
    const opinion2 = parseInt($("input:radio[name=opinion2]:checked").val());
    const opinion3 = parseInt($("input:radio[name=opinion3]:checked").val());
    const opinion4 = parseInt($("input:radio[name=opinion4]:checked").val());
    const opinion5 = parseInt($("input:radio[name=opinion5]:checked").val());

    const politicalValue = politicalValueCalc(opinion1, opinion2, opinion3, opinion4, opinion5);
 
    if(politicalValue <= -5){
      $("#conservative").show();
    }else if(politicalValue >= 5){
      $("#liberal").show();
    }else{
      $("#neutral").show();
    }
  });
});