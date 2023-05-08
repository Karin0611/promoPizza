let loader = $('#loader');
$('#submit').click(function () {
    $('.error').hide();

    let name = $('#name');
    let address = $('#address');
    let phone = $('#phone');
    let hasError = false;

    name.css('border', 'solid 1px rgb(185, 145, 80)', '!important background-color', 'rgb(255, 255, 255)');
    address.css('border', 'solid 1px rgb(185, 145, 80)', '!important background-color', 'rgb(255, 255, 255)');
    phone.css('border', 'solid 1px rgb(185, 145, 80)', '!important background-color', 'rgb(255, 255, 255)');
    if (!name.val()) {
        name.siblings('.error').show();
        name.css('border', 'solid 2px red');
        hasError = true;
    }
    if (!address.val()) {
        address.siblings('.error').show();
        address.css('border', 'solid 2px red');
        hasError = true;
    }
    if (!phone.val()) {
        phone.siblings('.error').show();
        phone.css('border', 'solid 2px red');
        hasError = true;
    }

    if (!hasError) {
        let form = $('#form');
        let thanks = $('#thanks');
        let callUs = $('#callUs');
        loader.css('display', 'flex');
        $.ajax({
            method: "POST",
            url: 'https://itlogia.ru/test/checkout',
            data: {name: name.val(), address: address.val(), phone: phone.val()}
        })
            .done(function (message) {
                loader.hide();
                console.log(message);
                if (message.success) {
                    form.remove();
                    thanks.show();
                } else {
                    form.remove();
                    callUs.show();
                }
            });
    }
})