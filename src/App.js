import React from 'react';

function App() {
  return (
    <div className="App">
     <div className="maincontainer">
        <div id="preloder">
            <div class="loader"></div>
            </div>
            <div class="offcanvas-menu-overlay"></div>
            <div class="offcanvas-menu-wrapper">
            <div class="offcanvas__close">+</div>
              <ul class="offcanvas__widget">
              <li><span class="icon_search search-switch"></span></li>
              <li><a href="#"><span class="icon_heart_alt"></span>
              <div class="tip">2</div>
              </a></li>
              <li><a href="#"><span class="icon_bag_alt"></span>
              <div class="tip">2</div>
              </a></li>
              </ul>
            <div class="offcanvas__logo">
              <a href="#"><img src="assets/img/logo.png" alt="" /></a>
            </div>
            <div id="mobile-menu-wrap"></div>
            <div class="offcanvas__auth">
              <a href="#">Login</a>
            </div>
            </div>

            <header class="header">
            <div class="container-fluid">
            <div class="row">
            <div class="col-xl-3 col-lg-2">
            <div class="header__logo">
              <a href="#"><img src="assets/img/logo.png" alt="" /></a>
            </div>
            </div>
            <div class="col-xl-5 col-lg-7">
              <nav class="header__menu">
            <ul>
              <li><a href="#">OFERTAS</a></li>
              <li><a href="#">ROUPAS</a></li>
              <li><a href="#">CONTATO</a></li>
              <li><a href="#">SOBRE</a></li>
            </ul>
            </nav>
            </div>
            <div class="col-lg-3">
            <div class="header__right">
            <div class="header__right__auth">
              <a href="#">Login</a>
            </div>
            <ul class="header__right__widget">
              <li><span class="icon_search search-switch"></span></li>
              <li><a href="#"><span class="icon_heart_alt"></span>
              <div class="tip">2</div>
              </a></li>
              <li><a href="#"><span class="icon_bag_alt"></span>
              <div class="tip">2</div>
              </a></li>
            </ul>
            </div>
            </div>
            </div>
            <div class="canvas__open">
             <i class="fa fa-bars"></i>
            </div>
            </div>
            </header>
        
            <section class="categories">
            <div class="container-fluid">
            <div class="row">
            <div class="col-lg-6 p-0">
            <div class="categories__item categories__large__item set-bg" data-setbg="assets/img/categories/category-1.jpg">
            <div class="categories__text">
              <a href="#"><h1>NOVIDADES</h1></a>
            </div>
            </div>
            </div>
            <div class="col-lg-6">
            <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6 p-0">
            <div class="categories__item set-bg" data-setbg="assets/img/categories/category-3.jpg">
            <div class="categories__text">
              <a href="#"><h4>Pequenos</h4></a>
            </div>
            </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 p-0">
            <div class="categories__item set-bg" data-setbg="assets/img/categories/category-4.jpg">
            <div class="categories__text">           
              <a href="#"><h4>Make</h4></a>
            </div>
            </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 p-0">
            <div class="categories__item set-bg" data-setbg="assets/img/categories/category-5.jpg">
            <div class="categories__text">
              <a href="#"><h4>Acessórios</h4></a>
            </div>
            </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 p-0">
            <div class="categories__item set-bg" data-setbg="assets/img/categories/category-2.jpg">
            <div class="categories__text">
              <a href="#"><h4>Eles</h4></a>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </section>
            
            
            <section class="product spad">
            <div class="container">
            <div class="row">
            <div class="col-lg-4 col-md-4">
            <div class="section-title">
              <h4>NOVIDADES</h4>
            </div>
            </div>
            <div class="col-lg-8 col-md-8">
            </div>
            </div>
            <div class="row property__gallery">
            <div class="col-lg-3 col-md-4 col-sm-6 mix">
            <div class="product__item">
            <div class="product__item__pic set-bg" data-setbg="assets/img/product/product-1.jpg">
            <div class="label new">NOVO</div>
            <ul class="product__hover">
              <li><a href="assets/img/product/product-1.jpg" class="image-popup"><span class="arrow_expand"></span></a></li>
              <li><a href="#"><span class="icon_heart_alt"></span></a></li>
              <li><a href="#"><span class="icon_bag_alt"></span></a></li>
            </ul>
            </div>
            <div class="product__item__text">
              <h6><a href="#">Camisa Gola Alta</a></h6>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </div>
            <div class="product__price">R$ 59.99</div>
            </div>
            </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix">
            <div class="product__item">
            <div class="product__item__pic set-bg" data-setbg="assets/img/product/product-2.jpg">
            <ul class="product__hover">
              <li><a href="assets/img/product/product-2.jpg" class="image-popup"><span class="arrow_expand"></span></a></li>
              <li><a href="#"><span class="icon_heart_alt"></span></a></li>
              <li><a href="#"><span class="icon_bag_alt"></span></a></li>
            </ul>
            </div>
            <div class="product__item__text">
            <h6><a href="#">Camisa Masculina confort</a></h6>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </div>
            <div class="product__price">R$ 85.99</div>
            </div>
            </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix">
            <div class="product__item">
            <div class="product__item__pic set-bg" data-setbg="assets/img/product/product-3.jpg">
            <ul class="product__hover">
              <li><a href="assets/img/product/product-3.jpg" class="image-popup"><span class="arrow_expand"></span></a></li>
              <li><a href="#"><span class="icon_heart_alt"></span></a></li>
              <li><a href="#"><span class="icon_bag_alt"></span></a></li>
            </ul>
            </div>
            <div class="product__item__text">
              <h6><a href="#">Vestido manga Curta</a></h6>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </div>
            <div class="product__price">R$ 39.99</div>
            </div>
            </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix">
            <div class="product__item">
            <div class="product__item__pic set-bg" data-setbg="assets/img/product/product-4.jpg">
            <ul class="product__hover">
              <li><a href="assets/img/product/product-4.jpg" class="image-popup"><span class="arrow_expand"></span></a></li>
              <li><a href="#"><span class="icon_heart_alt"></span></a></li>
              <li><a href="#"><span class="icon_bag_alt"></span></a></li>
            </ul>
            </div>
            <div class="product__item__text">
              <h6><a href="#">Camisa Listrada</a></h6>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </div>
            <div class="product__price">R$ 39.99</div>
            </div>
            </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix">
            <div class="product__item">
            <div class="product__item__pic set-bg" data-setbg="assets/img/product/product-5.jpg">
              <ul class="product__hover">
                <li><a href="assets/img/product/product-5.jpg" class="image-popup"><span class="arrow_expand"></span></a></li>
                <li><a href="#"><span class="icon_heart_alt"></span></a></li>
                <li><a href="#"><span class="icon_bag_alt"></span></a></li>
              </ul>
            </div>
            <div class="product__item__text">
              <h6><a href="#">Camisa Listrada</a></h6>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </div>
            <div class="product__price">R$ 39.99</div>
            </div>
            </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix women men kid accessories cosmetic">
            <div class="product__item sale">
            <div class="product__item__pic set-bg" data-setbg="assets/img/product/product-6.jpg">
            <div class="label sale">Esgotado</div>
            <ul class="product__hover">
              <li><a href="assets/img/product/product-6.jpg" class="image-popup"><span class="arrow_expand"></span></a></li>
              <li><a href="#"><span class="icon_heart_alt"></span></a></li>
              <li><a href="#"><span class="icon_bag_alt"></span></a></li>
            </ul>
            </div>
            <div class="product__item__text">
              <h6><a href="#">Camisa bege Estampada</a></h6>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </div>
            <div class="product__price">R$ 49.0 <span>R$ 59.0</span></div>
            </div>
            </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix women men kid accessories cosmetic">
            <div class="product__item">
            <div class="product__item__pic set-bg" data-setbg="assets/img/product/product-7.jpg">
            <ul class="product__hover">
              <li><a href="assets/img/product/product-7.jpg" class="image-popup"><span class="arrow_expand"></span></a></li>
              <li><a href="#"><span class="icon_heart_alt"></span></a></li>
              <li><a href="#"><span class="icon_bag_alt"></span></a></li>
            </ul>
            </div>
            <div class="product__item__text">
              <h6><a href="#">Blusa em Seda</a></h6>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </div>
            <div class="product__price">R$ 59.0</div>
            </div>
            </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix women men kid accessories cosmetic">
            <div class="product__item sale">
            <div class="product__item__pic set-bg" data-setbg="assets/img/product/product-8.jpg">
            <div class="label">ESGOTADO</div>
            <ul class="product__hover">
              <li><a href="assets/img/product/product-8.jpg" class="image-popup"><span class="arrow_expand"></span></a></li>
              <li><a href="#"><span class="icon_heart_alt"></span></a></li>
              <li><a href="#"><span class="icon_bag_alt"></span></a></li>
            </ul>
            </div>
            <div class="product__item__text">
              <h6><a href="#">Camisa Miami</a></h6>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </div>
            <div class="product__price">R$ 49.0 <span>R$ 59.0</span></div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </section>
            
            
            <section class="banner set-bg" data-setbg="assets/img/banner/banner-1.jpg">
            <div class="container">
            <div class="row">
            <div class="col-xl-7 col-lg-8 m-auto">
            <div class="banner__slider owl-carousel">
            <div class="banner__item">
            <div class="banner__text">
              <span>MyStore Collection</span>
              <h1>Vista sua atitude com orgulho</h1>
            </div>
            </div>
            <div class="banner__item">
            <div class="banner__text">
              <span>MyStore Collection</span>
              <h1>Eleve seu jogo de guarda-roupa</h1>
            </div>
            </div>
            <div class="banner__item">
            <div class="banner__text">
              <span>MyStore Collection</span>
              <h1>Onde a moda encontra o conforto</h1>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </section>
            
            
            <section class="trend spad">
            <div class="container">
            <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="trend__content">
            <div class="section-title">
              <h4>TENDÊNCIA</h4>
            </div>
            <div class="trend__item">
            <div class="trend__item__pic">
            <img src="assets/img/trend/ht-1.jpg" alt="" />
            </div>
            <div class="trend__item__text">
              <h6>Carteira Feminina</h6>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </div>
            <div class="product__price">R$ 49,99</div>
            </div>
            </div>
            <div class="trend__item">
            <div class="trend__item__pic">
              <img src="assets/img/trend/ht-2.jpg" alt="" />
            </div>
            <div class="trend__item__text">
              <h6>Brinco Triângulo</h6>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </div>
            <div class="product__price">R$ 59,99</div>
            </div>
            </div>
            <div class="trend__item">
            <div class="trend__item__pic">
              <img src="assets/img/trend/ht-3.jpg" alt="" />
            </div>
            <div class="trend__item__text">
              <h6>Suéter Feminino</h6>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </div>
            <div class="product__price">R$ 59,99</div>
            </div>
            </div>
            </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="trend__content">
            <div class="section-title">
              <h4>TOP EM VENDAS</h4>
            </div>
            <div class="trend__item">
            <div class="trend__item__pic">
            <img src="assets/img/trend/bs-1.jpg" alt="" />
            </div>
            <div class="trend__item__text">
              <h6>Calça Jeans Preta</h6>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </div>
            <div class="product__price">R$ 97,99</div>
            </div>
            </div>
            <div class="trend__item">
            <div class="trend__item__pic">
              <img src="assets/img/trend/bs-2.jpg" alt="" />
            </div>
            <div class="trend__item__text">
              <h6>Bolsa<br />Para viagens</h6>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </div>
            <div class="product__price">R$ 159,99</div>
            </div>
            </div>
            <div class="trend__item">
            <div class="trend__item__pic">
              <img src="assets/img/trend/bs-3.jpg" alt="" />
            </div>
            <div class="trend__item__text">
              <h6>Bolsa circular</h6>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </div>
            <div class="product__price">R$ 59,99</div>
            </div>
            </div>
            </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="trend__content">
            <div class="section-title">
              <h4>NOVIDADES</h4>
            </div>
            <div class="trend__item">
            <div class="trend__item__pic">
            <img src="assets/img/trend/f-1.jpg" alt="" />
            </div>
            <div class="trend__item__text">
              <h6>Saia Capri Linho Menta</h6>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </div>
            <div class="product__price">$ 59,99</div>
            </div>
            </div>
            <div class="trend__item">
            <div class="trend__item__pic">
              <img src="assets/img/trend/f-2.jpg" alt="" />
            </div>
            <div class="trend__item__text">
             <h6>Brinco de Conchas</h6>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </div>
            <div class="product__price">R$ 59,99</div>
            </div>
            </div>
            <div class="trend__item">
            <div class="trend__item__pic">
              <img src="assets/img/trend/f-3.jpg" alt="" />
            </div>
            <div class="trend__item__text">
              <h6>Bolsa com alça Amarela</h6>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </div>
            <div class="product__price">R$ 59,99</div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </section>

            <section class="services spad">
            <div class="container">
            <div class="row">
            <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="services__item">
              <i class="fa fa-car"></i>
              <h6>FRETE GRATIS</h6>
              <p>Compras acima de R$100</p>
            </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="services__item">
              <i class="fa fa-money"></i>
              <h6>DINHEIRO DE VOLTA</h6>
              <p>Caso não goste!!</p>
            </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="services__item">
            <i class="fa fa-support"></i>
              <h6>SUPORTE NAS VENDAS</h6>
              <p>Suporte em horario comercial.</p>
            </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="services__item">
            <i class="fa fa-headphones"></i>
            <h6>PAGAMENTO SEGURO</h6>
            <p>100% SEGURO</p>
            </div>
            </div>
            </div>
            </div>
            </section>
            
            
            <div class="instagram">
            <div class="container-fluid">
            <div class="row">
            <div class="col-lg-2 col-md-4 col-sm-4 p-0">
            <div class="instagram__item set-bg" data-setbg="assets/img/instagram/insta-1.jpg">
            <div class="instagram__text">
              <i class="fa fa-instagram"></i>
              <a href="#">@ My_Store</a>
            </div>
            </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-4 p-0">
            <div class="instagram__item set-bg" data-setbg="assets/img/instagram/insta-2.jpg">
            <div class="instagram__text">
              <i class="fa fa-instagram"></i>
              <a href="#">@ My_Store</a>
            </div>
            </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-4 p-0">
            <div class="instagram__item set-bg" data-setbg="assets/img/instagram/insta-3.jpg">
            <div class="instagram__text">
              <i class="fa fa-instagram"></i>
              <a href="#">@ My_Store</a>
            </div>
            </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-4 p-0">
            <div class="instagram__item set-bg" data-setbg="assets/img/instagram/insta-4.jpg">
            <div class="instagram__text">
              <i class="fa fa-instagram"></i>
              <a href="#">@ My_Store</a>
            </div>
            </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-4 p-0">
            <div class="instagram__item set-bg" data-setbg="assets/img/instagram/insta-5.jpg">
            <div class="instagram__text">
              <i class="fa fa-instagram"></i>
              <a href="#">@ My_Store</a>
            </div>
            </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-4 p-0">
            <div class="instagram__item set-bg" data-setbg="assets/img/instagram/insta-6.jpg">
            <div class="instagram__text">
              <i class="fa fa-instagram"></i>
              <a href="#">@ My_Store</a>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            
            <footer class="footer">
            <div class="container">
            <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-7">
            <div class="footer__about">
            <div class="footer__logo">
              <a href="#"><img src="assets/img/logo.png" alt="" /></a>
            </div>
              <p>Somos uma metamorfose Atualize seu estilo, atualize sua vida com MyStore</p>
            <div class="footer__payment">
              <a href="#"><img src="assets/img/payment/payment-1.png" alt="" /></a>
              <a href="#"><img src="assets/img/payment/payment-2.png" alt="" /></a>
              <a href="#"><img src="assets/img/payment/payment-3.png" alt="" /></a>
              <a href="#"><img src="assets/img/payment/payment-4.png" alt="" /></a>
              <a href="#"><img src="assets/img/payment/payment-5.png" alt="" /></a>
            </div>
            </div>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-5">
            <div class="footer__widget">
             <h6>LINKS</h6>
            <ul>
              <li><a href="#">Contato</a></li>
              <li><a href="#">Sobre Nós</a></li>
              <li><a href="#">Perguntas frequentes</a></li>
            </ul>
            </div>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-4">
            <div class="footer__widget">
              <h6>CONTA</h6>
            <ul>
              <li><a href="#">Meu Perfil</a></li>
              <li><a href="#">Lista de Desejos</a></li>
              <li><a href="#">Rastreamento de Pedidos</a></li>
            </ul>
            </div>
            </div>
            <div class="col-lg-4 col-md-8 col-sm-8">
            <div class="footer__newslatter">
              <h6>FIQUE POR DENTRO</h6>
            <form action="#">
              <input type="text" placeholder="Email" />
              <button type="submit" class="site-btn">ENVIAR</button>
            </form>
            <div class="footer__social">
              <a href="#"><i class="fa fa-facebook"></i></a>
              <a href="#"><i class="fa fa-youtube-play"></i></a>
              <a href="#"><i class="fa fa-instagram"></i></a>
            </div>
            </div>
            </div>
            </div>
            <div class="row">
            <div class="col-lg-12">
            
            <div class="footer__copyright__text">
              <p>Copyright &copy; <script>document.write(new Date().getFullYear());</script> reserved | José Neto</p>
            </div>
            </div>
            </div>
            </div>
            </footer>
            
            
            <div class="search-model">
            <div class="h-100 d-flex align-items-center justify-content-center">
            <div class="search-close-switch">+</div>
            <form class="search-model-form">
            <input type="text" id="search-input" placeholder="Search here....." />
            </form>
            </div>
            </div>
      </div>
    </div>
  );
}
export default App;