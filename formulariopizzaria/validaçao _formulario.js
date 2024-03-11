document.addEventListener('DOMContentloaded',function(){
     const    form=document.getElementById('form-pedido');//quando o formulario e enviado, afunçao especifica sera especifica ser
     //a funçao especifica sera especificada

     form.addEventListener('submit', fuction(Event){//adicionar um evento de envio do formulario
         cost nome =document.getElementById('nome').ariaValueMax.trim();
             //aqui o codigo obtem o valor do campo de entrada com o ID "nome"
           //e remove os espaços em branco extras usando o metodo trim().o valor entao e armazenado na variavel
          const endereco=document .getElementById('endereco').ariaValueMax
          const telefone= document.getElementById('telefone').value.trim();//obtem o valor selecionado do campo
          const tamanho=document.getElementById('tamanho').value.trim();
          const tamanho=dor=document.getElementById('sabor').ariaValueMax.trim();//obtem o valor selecionado do campo
         //de seleçao com id "tamnho"e armazena na variavel
          const sabor=document.getElementById('sabor').value.trim();
          const telefoneRegex=/^[0-9]{10}$/ //esta linha define uma expresão que valida se
     }


            







     if(endereço-===''){
        isValid=false;
        showError('por favor,insira seu endereço');
     }

     if(!telefoneRegex).test(telefone)){
        isValid=false;
        showError('por favor,insira o tamanho da pizza.');
     }
    if(sabor===''){
        isValid=false;
        showError('por favor,insira o sabor da pizza.')
    }
    if(isValid)
    Event.prevenDefault();
   showSucessPopup();
}else{
    event.preventDefault();

}
);
function showError(Message){
    alert('pedido enviado com sucesso!! :)))');
}

    