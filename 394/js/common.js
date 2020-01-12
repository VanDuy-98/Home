$(document).ready(function () {
    $('#banner .banner').owlCarousel({
        loop:true,
        items:1,
    });

    $('#slide1 .slide1').owlCarousel({
        loop:true,
        items:1,
    });

    $('#slide2 .slide2').owlCarousel({
        loop:true,
        items:1,
        nav:true,
    });
});

function validate(form)
{
    var name = form.name.value,
        category = form.category.value,
        phone = form.phone.value,
        city = form.city.value,
        email = form.email.value,
        message = form.message.value;

    if(!/^[a-zA-Z ]{2,30}$/.test(name))
    { alert('Sai định dạng name');
        form.name.focus();
        return false;
    }

    if(!/(09|03|07|08|05)+([0-9]{8})/.test(phone)){
        alert('Sai định dạng phone');
        form.phone.focus();
        return false;
    }

    if(!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/){
        alert('Sai định dạng email');
        form.email.focus();
        return false;
    }

    if(!/^([a-zA-Z0-9])+[a-zA-Z0-9\.\, ]+$/.test(message)){
        alert('Tin nhắn không hợp lệ');
        form.message.focus();
        return false;
    }

    return true;
}
