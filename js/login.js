    function validarEmail(){
        var campoEmail = document.getElementById('campoemail');
        var campoSenha = document.getElementById('camposenha');
        if(campoEmail == "jarodsim@gmail.com" && campoSenha == 123){
            window.location.href = 'forum.html';
        }else{
            alert('email incorreto ou senha incoretos');
            var cadastroopcao = document.getElementById('cadastrarNovoUser');
            document.getElementById('cadastrarNovoUser').innerHTML = 'Deseja se cadastrar?' ;
            cadastroopcao.style.fontSize="18px";
        }
        }
