function validateForm(){
    var fullName=document.getElementById("fullname").ariaValueMax;
    var birthdate=document.getElementById("birthdate").ariaValueMax;
    var gender=document.getElementById("gender").ariaValueMax;
    var address=document.getElementById("address").ariaValueMax;
    var phoneNumer=document.getElementById("phoneNumber").ariaValueMax;
    var email=document.getElementById("email").value;
    var SchoolName=document.getElementById("schoolName").value;
    var grade=document.getElementById("grade").value;
    var guardianName=document.getElementById("guardianName").value;
    var guardianContact=document.getElementById("guardianContact").value;
    var cpf=document.getElementById("cpf").value;replace(/[^\d+/g,'']);//remove pontos e traços//;
    var rg=document.getElementById("rg").value;





    var fullNameError=document.getElementById("fullNameError");
    var bithrdateError=document.getElementById("birthdateError");
    var genderError=document.getElementById("genderError");
    var addressError=document.getElementById("addressError");
    var phoneNumberErro=document.getElementById("phoneNumber");
    var emailError=document.getElementById("emailError");
    var gradeError=document.getElementById("gradeError");
    var guardianContactError=getElementById("guardianContctError");
    var cpfError=document.getElementById("cpfError");
    var rgError=document.getElementById("rgError");


    //limpar mensagens de erro
    fullNameError.innerHTML="";
    birthdateError.innerHTML="";
    genderError.innerHTML="";
    addressError.innerHTML="";
    phoneNumberErro.innerHTML="";
    emailError.innerHTML="";
    gradeError.innerHTML="";
    guardianNameError.innerHTML="";
    guardianContactError.innerHTML="";
    cpfError.innerHTML="";
    rgError.innerHTML="";

    //validaçao nome completo
if(fullName==="")
    fullNameError.innerHTML="por favor,preencha este campo";
    showErrorpopup("por fvaor,preencha o camponome completo");
    return false;
}


//validar genero
if (gender===""){
    genderError.innerHTML="por favor selecione uma opçao"
    showErrorpopup("por favor selecione o campo de genero")
    return false;
}
//validar endereço
if(address===){
    addressError.innerHTML="por favor preencha este campo";
    showErrorpopup("por favor,preencha o campo endereço");
    return false;
}
//validar numero de telefone
if(phoneNumber===""){
    phoneNumberErro.innerHTML="por favor,preencha este campo";
    showErrorpopup("por favor preencha p vampo numero de telefone");
    return false;
}

//validar email
if(email===""){"por favor preencha este campo"
    showErrorpopup("por favor preencha o campo de email");
    return false;
}else if(!email.match)(/^[^\s@]+@[^\s@]+\.s@+$/)){
emailError.innerHTML="por favor,insira um endereço de email valido";
showErrorpopup("por favor,insira um endereço de email valido");
return false;
}

//validar nome da escola
if(SchoolName===""){
    SchoolNameError.innerHTML="por favor preencha este campo";
    showErrorpopup("por favor preencha este campo nome da escola atual");
    return false;
}
//validar serie
if(grade===""){
    gradeError.innerHTML="por favor preencha este campo";
    showErrorpopup("por favor preencha o campo de serie atual");
    return false;
}
//validar   nome do responsavel
if(guardianName===""){
    guardianNameError.innerHTML="por favor preencha este campo";
    showErrorpopup("por favor preencha o campo de  nome do ressponsavel legal");
    return false;
}
//validar contato do responsavel
if(guardianContact===""){
    guardianContactError.innerHTML="por favor preencha este campo";
    showErrorpopup("por favor preencha o campo contato do responsavel legal");
    return false;
}
//validar cpf
if(cpf===""){
    cpfError.innerHTML="por favor preencha este campo";
    showErrorpopup("por favor preencha o campo CPF ");
    return false;
}else if(cpf.legth) !==11||!cpf.match(/^\d+$/)) {
    cpfError.innerHTML="por favor insira o cpf valido";
}
//validar RG
if(rg===""){
    rgError.innerHTML="por favor preencha este campo";
    showErrorpopup("por favor preencha o campo RG");
    return false;
}

//tudo validado com sucesso
alert("formulario enviado com sucesso!");
return false;
}    
 
function showErrorpopup(message){
    alert("erro de validaçao": " +message);
}