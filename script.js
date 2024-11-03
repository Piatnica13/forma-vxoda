let textlog = document.querySelector('#inplog')
let textpas = document.querySelector('#inppas')
botton = document.querySelector('#bth1').addEventListener('click', function(){
    let log = textlog.value;
    let pas = textpas.value;
    if(log != '' && pas != ''){
    alert(`Логин: ${log}
Пароль: ${pas}`)
    }
    else if (log != '' && pas == ''){
        alert(`Вы не ввели пароль`)
    }
    else if (log == '' && pas != ''){
        alert(`Вы не ввели логин`)
    }
    else if (log == '' && pas == ''){
        alert(`Вы не ввели логин и пароль`)
    }
    else{
        console.log("Ошибка заполнения формы")
    }
});
//ну наконец то доделал, 2 дня убил. Этот флекс бокс - убийство