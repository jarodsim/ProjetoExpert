    function validarEmail(){
        var campoEmail = document.getElementById('campoemail');
        var campoSenha = document.getElementById('camposenha');
        if(campoEmail == "jarodsim@gmail.com" && campoSenha == "123"){
            window.location.href = 'forum.html';
        }else{
            alert('email incorreto ou senha incoretos');
            document.getElementById('cadastrarNovoUser').innerHTML = 'Deseja se cadastrar?' ;
        }
        }