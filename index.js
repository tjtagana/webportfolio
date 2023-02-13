window.addEventListener('scroll', () => {
    console.log('Scrolled!');
});

var btn = document.getElementById('contact_btn');
    btn.addEventListener('click',function(e){
        e.preventDefault()
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var textarea = document.getElementById('textarea').value;
        var body = 'name: ' + name + '<br/> email: ' + email + '<br/> phone: ' + phone + '<br/> textarea: ' + textarea;


        Email.send({
            Host : "smtp.gmail.com",
            Username : "taganatimothyjames@gmail.com",
            Password : "kqombnpvuaolqlse",
            To : 'ttaganatimothyjames@gmail.comj',
            From : email,
            Subject : phone,
            Body : body
            }).then(
            message => alert(message)
        );
    });