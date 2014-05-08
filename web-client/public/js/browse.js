//browse.js
$(function () {

    $("#find-products").click(function () {

        $(".product-capsule").remove();
        var newContent = '';
        var searchTerm = document.getElementById('prependDropdownButton').value;
        var searchUrl = "";
        var url = "http://54.187.138.161";
        

        if (document.getElementById('search-menu').value == 'name') {
            searchUrl = url + "products?name=";
        }
        if (document.getElementById('search-menu').value == 'type') {
            searchUrl = url + "products?type=";
        }

        $.ajax({
            url: searchUrl + searchTerm,
            cache: false
        }).done(function (products) {
            products.forEach(function (product) {
                newContent += '<div class="product-capsule">';
                newContent += '<div class="capsule-top">';
                newContent += '<a href="' + url + 'product/' + product._id + '">' + product.name
                newContent += '</a>';
                newContent += '</div>';
                newContent += '<div class="capsule-image">';
                newContent += '<img src="' + product.images[160] + '">';
                newContent += '</img>';
                newContent += '</div>';
                newContent += '<div class="capsule-hover">';
                newContent += '<p>' + (product.description || "No description available");
                newContent += '</p>';
                newContent += '</div>';
                newContent += '</div>';
            })
            $("#main-content").append(newContent);
            $(".product-capsule").hover(
                function () {
                    $(this).find(".capsule-hover").css("display", "inline");
                },
                function () {
                    $(this).find(".capsule-hover").css("display", "none");
                }
            );
        })
    })

    $("#prependDropdownButton").keypress(function (e) {
        if (e.which == 13) {
            $("#find-products").click();
        }
    });

});