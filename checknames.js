var checkUser = function (element) {
    var route = "https://suscripcion.lavoz.com.ar/id/perfil/check-names";
    
        $.ajax({
            headers: {
                Accept: "application/json; charset=utf-8",
                "Content-Type": "application/json; charset=utf-8"
            },
            url: route,
            type: 'GET',
            data: {
              name: element
            },
            dataType: 'json',
            success: function(resp) {
                   console.log(resp);
            }
        });
    
}