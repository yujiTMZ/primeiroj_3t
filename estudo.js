// console.log("Console: Alô Mundo...");
// alert("Alerta: Alô mundo...");
let tabuada = 4;


function meChame(){
   document.write("Tabuado do " + tabuada + "<br>");
   document.write(tabuada + " x 1 = " + (tabuada*1) +"<br>");
   document.write(tabuada + " x 2 = " + (tabuada*2) +"<br>");
   document.write(tabuada + " x 3 = " + (tabuada*3) +"<br>");
   document.write(tabuada + " x 4 = " + (tabuada*4) +"<br>");
   document.write(tabuada + " x 5 = " + (tabuada*5) +"<br>");
   document.write(tabuada + " x 6 = " + (tabuada*6) +"<br>");
   document.write(tabuada + " x 7 = " + (tabuada*7) +"<br>");
   document.write(tabuada + " x 8 = " + (tabuada*8) +"<br>");
   document.write(tabuada + " x 9 = " + (tabuada*9) +"<br>");
   document.write(tabuada + " x 10 = " + (tabuada*10) +"<br>");
}


function minhaTabuada(){
   for(var i=1; i <= 10; i++){

      for(var j = 1; j <=10; j++){
         document.write(i + " x " + j + " = " + (i*j) +"<br>");
      }

      document.write("<br><br>");
   }
}

function quadrado(){
   for(var i = 2; i < 21; i++){
      document.write("O quadrado de " + i + " é " + (i*i) + "<br>");
   }
}

function moeda(atual){
   return atual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

function total(){
   let val = document.getElementById("valor").value;
   let ju = document.getElementById("juros").value;
   let t = document.getElementById("meses").value;

   if(!Number(val)){
      alert("O valor deve ser um número.");
      document.getElementById("valor").value = "";
      document.getElementById("valor").focus();
      return 
   }
   if(!Number(ju)){
      alert("O valor dos juros deve ser um número.");
      document.getElementById("juros").value = "";
      document.getElementById("juros").focus();
      return 
   }
   if(!Number(t)){
      alert("A quantidade de meses deve ser um número.");
      document.getElementById("meses").value = "";
      document.getElementById("meses").focus();
      return 
   }
   let r = val;
   let texto = "";
   for(let m = 1; m <= t; m++){
      r = (val * (1+ (ju/100)));
      val = r;
      texto +=  m + ": " + moeda(r) + "<br>"
      //document.write("Mês " + m + " valor: " + moeda(r) + "<br>");
   }
      document.getElementById("listaMes").innerHTML = texto;
      document.getElementById("total").innerHTML = "Total: "+ moeda (r);
   //document.write("O tatal é " + moeda(r));
}
