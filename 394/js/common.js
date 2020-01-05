$(document).ready(function() {
    $("#banner").owlCarousel({
        loop:true,
        margin:10,
        items:1,
    });
});

function validate() {
    var name = $('#name').val(),
        category = $('#category').val(),
        phone = $('#phone').val(),
        city = $('#city').val(),
        email = $('#email').val(),
        message = $('#message').val();

    if(name !== ''){
        if(!/[a-zA-Z]+/.test(name)){
            alert('Sai định dạng name');
            return false;
        }
    }else{
        alert('Điền name');
        return false;
    }
    if (category == 0){
        alert('Chọn category');
        return false;
    }
    if(phone !== ''){
        if(!/[0-9]{10}/.test(phone)){
            alert('Sai định dạng phone');
            return false;
        }
    }else {
        alert('Điền phone');
        return false;
    }
    if (city == 0){
        alert('Chọn city');
        return false;
    }
    if(email !== ''){
        if(!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/){
            alert('Sai định dạng email');
            return false;
        }
    }else {
        alert('Điền email');
        return false;
    }
    if(message !== ''){

    }else {
        alert('Điền message');
        return false;
    }

    return true;
}