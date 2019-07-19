function tampilkanSemuaMenu(){
// menggunakan ajax
//$.getJSON == $.ajax
//kalau keambil dan sukses, jalankan fungsi berikut ini
    $.getJSON('data/pizza.json', function(data){ //pake fungsi ini langsung berubah ke obj walaupun yg di ambil JSON
        //console.log(data); //untuk melihat object ketika inspect element
        let menu = data.menu;
        //console.log(menu);  //line 6, 7, memperingkas obj dibanding line 5
        $.each(menu, function(i, data){
            //console.log(data);
            //console.log(data);
    
            $('#daftar-menu').append('<div class="col-md-4"><div class="card mb-3"><img src="img/menu/'+ data.gambar + '" class="card-img-top"><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><h5 class="card-title">Rp. ' + numberWithDot(data.harga) + ',-</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>');
        });
    });
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function numberWithDot(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
 tampilkanSemuaMenu();

//tolong carikan saya 
$('.nav-link').on('click', function(){
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    let kategori = $(this).html();
    $('h1').html(kategori);

    // if(kategori == 'All Menu'){
    //     tampilkanSemuaMenu();
    //     return;
    // }

    $.getJSON('data/pizza.json', function(data){
        let menu = data.menu;
        let content = '';
        let contentAllMenu = '';
        
        $.each(menu, function(i, data){
            if(data.kategori == kategori.toLowerCase()){
                content += '<div class="col-md-4"><div class="card mb-3"><img src="img/menu/'+ data.gambar + '" class="card-img-top"><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><h5 class="card-title">Rp. ' + numberWithDot(data.harga) + ',-</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>';
            }
            contentAllMenu += '<div class="col-md-4"><div class="card mb-3"><img src="img/menu/'+ data.gambar + '" class="card-img-top"><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><h5 class="card-title">Rp. ' + numberWithDot(data.harga) + ',-</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>';
        });

        if(kategori == 'All Menu'){
            $('#daftar-menu').html(contentAllMenu);
        } else{
            $('#daftar-menu').html(content);
        }
    });
});