<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TrinsyVault</title>

    <link rel="shortcut icon" href="assets/img/logo.webp">

    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/ext.css">

    <meta http-equiv="refresh" content="900">
</head>
<body>
    <div id="preload">
        <div class="preloadBox"></div>
    </div>
    <div id="notifications"></div>
    <div class="container-box" id="containerHeight">
        <div class="container-border">
            <div class="slider" id="containerContent">
                <?php if(isset($_COOKIE["done"]) && $_COOKIE["done"] === "1") { ?>
                    <div class="slide active">
                        <section class="page">
                            <div class="pageTop">
                                <div class="pageTitle">
                                    <h1>Ödeme Yapılabilecek Hesaplar</h1>
                                </div>
                                <p>Ödemeyi yapacağın bir banka hesabı seç</p>
                                <p>Toplam Tutar: $800</p>
                                <button class="mainBtn" onclick="talert('description');">Anlaşma Açıklaması</button>
                                <button class="mainBtn" onclick="talert('all');">Kabul Edilen Tüm Maddeler</button>
                            </div>
                            <div class="pageDetail">
                                <div class="package ibanBox">
                                    <div class="package-container">
                                        <div class="package-img">
                                            <img src="assets/img/papara-logo.webp">
                                        </div>
                                        <div class="package-detail">
                                            <div class="package-info">
                                                <h3>Papara TL IBAN</h3>
                                                <ul class="package-list">
                                                    <li id="iban">TR17 0082 9000 0949 1008 7574 57</li>
                                                    <li>Ömer İslamoğlu</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="package ibanBox">
                                    <div class="package-container">
                                        <div class="package-img">
                                            <img src="assets/img/halkbank-logo.webp">
                                        </div>
                                        <div class="package-detail">
                                            <div class="package-info">
                                                <h3>Halkbank TL IBAN</h3>
                                                <ul class="package-list">
                                                    <li id="iban">TR03 0001 2009 8150 0001 2256 47</li>
                                                    <li>Ömer İslamoğlu</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="package ibanBox">
                                    <div class="package-container">
                                        <div class="package-img">
                                            <img src="assets/img/halkbank-logo.webp">
                                        </div>
                                        <div class="package-detail">
                                            <div class="package-info">
                                                <h3>Halkbank USD IBAN</h3>
                                                <ul class="package-list">
                                                    <li id="iban">TR88 0001 2009 8150 0023 0037 21</li>
                                                    <li>Ömer İslamoğlu</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="package ibanBox">
                                    <div class="package-container">
                                        <div class="package-img">
                                            <img src="assets/img/halkbank-logo.webp">
                                        </div>
                                        <div class="package-detail">
                                            <div class="package-info">
                                                <h3>Halkbank EUR IBAN</h3>
                                                <ul class="package-list">
                                                    <li id="iban">TR12 0001 2009 8150 0035 0014 67</li>
                                                    <li>Ömer İslamoğlu</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="goPageBtn">
                                    <button class="goBtn" onclick="NextPage();">Ödeme Yapıldı <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M21.546 5.111a1.5 1.5 0 0 1 0 2.121L10.303 18.475a1.6 1.6 0 0 1-2.263 0L2.454 12.89a1.5 1.5 0 1 1 2.121-2.121l4.596 4.596L19.424 5.111a1.5 1.5 0 0 1 2.122 0"/></g></svg></button>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class="slide">
                        <section class="page">
                            <div class="pageTop">
                                <div class="pageTitle">
                                    <h1>İşleminiz Tamamlandı ✅</h1>
                                    <button class="mainBtn" onclick="PrevPage();"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4m0 0l6-6m-6 6l6 6"/></svg></button>
                                </div>
                                <p>Ödemenin onaylanması maksimum 24 saat kadar sürebilir</p>
                                <button class="mainBtn" onclick="talert('description');">Anlaşma Açıklaması</button>
                                <button class="mainBtn" onclick="talert('all');">Kabul Edilen Tüm Maddeler</button>
                            </div>
                            <div class="pageDetail">
                                <div class="goPageBtn">
                                    <button class="goBtn mainBtn" onclick="copyMail();">Dekont Gönder <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12h16m0 0l-6 6m6-6l-6-6"></path></svg></button>
                                </div>
                            </div>
                        </section>
                    </div>
                <?php } else { ?>
                <div class="slide active">
                    <section class="page">
                        <div class="pageTop">
                            <div class="pageTitle">
                                <h1>Giriş Şifreniz</h1>
                                <button class="mainBtn" onclick="location.reload();"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M19.933 13.041a8 8 0 1 1-9.925-8.788c3.899-1 7.935 1.007 9.425 4.747"/><path d="M20 4v5h-5"/></g></svg></button>
                            </div>
                            <button class="mainBtn" onclick="talert('password');">Giriş Şifremi Nereden Öğrenebilirim</button>
                        </div>
                        <div class="pageDetail">
                            <div class="pageList">
                                <h2>Şifre</h2>
                                <div class="package" id="inputBox">
                                    <div class="package-container">
                                        <input type="password" id="password">
                                    </div>
                                </div>
                            </div>
                            <div class="goPageBtn">
                                <button class="goBtn" onclick="NextPage();">Giriş Yap <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12h16m0 0l-6 6m6-6l-6-6"></path></svg></button>
                            </div>
                        </div>
                    </section>
                </div>
                <?php } ?>
            </div>
        </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="assets/script/main.js"></script>
    <?php 
        if(isset($_COOKIE["done"]) && $_COOKIE["done"] === "1") {
            echo '<script>ibanFunc();</script>';
        }    
    ?>

    <script src="assets/script/preload.js"></script>
    <script src="assets/script/talert.js"></script>
</body>
</html>