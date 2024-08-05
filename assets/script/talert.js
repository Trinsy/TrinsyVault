var notifications = document.getElementById("notifications");
let policyAgree = 0;
let paymentAgree = 0;

function talert(status, status2) {
    var talertDiv = document.createElement("div");
    talertDiv.className = 'talert';

    let br = '<br>';
    let tbr = '<br><br>';

    if(status === 'all') {
        var talertTitle = document.createElement("h2");
        talertTitle.innerHTML = `Kabul Edilen Tüm Maddeler`;
        talertDiv.appendChild(talertTitle);

        var talertText = document.createElement("p");
        talertText.innerHTML = `・Anlaşma süresi <b>18.09.2024</b> tarihine kadar geçerlidir. Belirlenen tarihten sonra bu anlaşma yürürlüğünü kaybedecek ve <b>spayai.com</b> ürünü gibi tüm ürünler <b>Ömer İslamoğlu</b> tarafından sonsuza kadar satılabilir, kullanılabilir veya düzenlenebilir olacaktır.${tbr}・Bu web sitesinde gerekli bilgiler onaylandıktan birkaç saat sonra, <a href="https://vault.trinsyca.com/spayai" target="_blank">vault.trinsyca.com/spayai</a> adresinde yaptığım anlaşmanın şifrelenmiş bir şekilde kaydedilmesini onaylıyorum. Bu verilerin yalnızca, girmiş olduğum e-posta adresi ve bana verilmiş olan şifre ile görüntülenebileceğini biliyor ve onaylıyorum.${tbr}・trinsyca.com sitesi ve alt alan adlarındaki SpayAI, HealthCare, ve Mirket projelerinin tasarımları ve kaynak kodları, firma tarafından sitede sonsuza kadar özgürce kullanılabilecektir. Bu kullanım, proje kodlarının ve tasarımlarının başka amaçlar için değiştirilmeden veya yeniden satılmadan kullanılmasını kapsamaktadır.${tbr}・<b>SpayAI</b>, <b>HealthCare</b> ve <b>Mirket</b> isimli projelerin, <a href="https://github.com/trinsyca" target="_blank">github.com/trinsyca</a> adresinde özel olarak depolanabileceğini kabul ediyorum.${tbr}・Ödemenin tamamlanmasının ardından, ödeme dekontunun <b>payments@trinsyca.com</b> adresine PDF formatında gönderilmesi gerekmektedir. Ödeme dekontu gönderilmediği sürece, proje teslimatı yapılmayacaktır.${tbr}・Proje teslim edildikten sonra, alan adı teslimi haricinde hiçbir destek sağlanmayacaktır.${tbr}・Anlaşmanın iptali durumunda, yapılan ödemeler geri ödenmeyecektir.${tbr}・Bu anlaşmada yapılacak herhangi bir değişiklik veya ekleme, yazılı olarak taraflarca onaylanmadıkça geçerli olmayacaktır.${br}<h2>Ödeme Şartları</h2>・Bu anlaşma kapsamındaki ödemeler, döviz kuru üzerinden TL, USD veya EUR olarak tahsil edilecektir.${tbr}・Ödemeler, ödeme günündeki Türkiye Cumhuriyeti Merkez Bankası (TCMB) tarafından belirlenen döviz alış kuru baz alınarak hesaplanacaktır.${tbr}・Yapılacak ödeme, <b>31.07.2024</b> tarihinde saat <b>15:30</b>'de alınan <b>$1 = 33,1431₺</b> ve ${br}<b>$1 = €1.0826</b> döviz kurları üzerinden hesaplanacaktır.`;
        talertDiv.appendChild(talertText);

        notifications.appendChild(talertDiv);

        setTimeout(() => { notifications.classList.add("active"); }, 50);
    }
    else if(status != null) {
        var title;
        var text;
        var button;
        
        switch(status) {
            case 'password':
                title = `Giriş Şifremi Nereden Öğrenebilirim ?`;
                text = `Giriş şifreniz eğer yetkili kişiyseniz <b>TrinsyCa</b> tarafından size özel olarak gönderilmiş olmalıdır.`;
                break;

            case 'description':
                title = `Anlaşma Açıklaması`;
                text = `Bu anlaşma <b>Ömer İslamoğlu</b>'na ait olan ürünlerin <b>SpayAI</b> isimli startup'a belli bir ücret karşılığında devredilmesi ve zamanında ödenmemiş olan ücretlerin karşılanması üzerine oluşturulmuştur.${tbr}Anlaşmada tüm yazan ürünler ve anlaşma maddeleri kabul edilmeden bu anlaşma sağlanmayacaktır.`;
                break;

            case 'policy':
                title = `Anlaşmada Kabul Ettikleriniz`;
                text = `・Anlaşma süresi <b>18.09.2024</b> tarihine kadar geçerlidir. Belirlenen tarihten sonra bu anlaşma yürürlüğünü kaybedecek ve <b>spayai.com</b> ürünü gibi tüm ürünler <b>Ömer İslamoğlu</b> tarafından sonsuza kadar satılabilir, kullanılabilir veya düzenlenebilir olacaktır.${tbr}・Bu web sitesinde gerekli bilgiler onaylandıktan birkaç gün sonra, <a href="https://vault.trinsyca.com/spayai" target="_blank">vault.trinsyca.com/spayai</a> adresinde yaptığım anlaşmanın şifrelenmiş bir şekilde kaydedilmesini onaylıyorum. Bu verilerin yalnızca, girmiş olduğum e-posta adresi ve bana verilmiş olan şifre ile görüntülenebileceğini biliyor ve onaylıyorum.${tbr}・trinsyca.com sitesi ve alt alan adlarındaki SpayAI, HealthCare, ve Mirket projelerinin tasarımları ve kaynak kodları, firma tarafından sitede sonsuza kadar özgürce kullanılabilecektir. Bu kullanım, proje kodlarının ve tasarımlarının başka amaçlar için değiştirilmeden veya yeniden satılmadan kullanılmasını kapsamaktadır.${tbr}・<b>SpayAI</b>, <b>HealthCare</b> ve <b>Mirket</b> isimli projelerin kopyalarının, <a href="https://github.com/trinsyca" target="_blank">github.com/trinsyca</a> adresinde <b>özel olarak depolanabileceğini</b> kabul ediyorum.${tbr}・Ödemenin tamamlanmasının ardından, ödeme dekontunun <b>payments@trinsyca.com</b> adresine PDF formatında gönderilmesi gerekmektedir. Ödeme dekontu gönderilmediği sürece, proje teslimatı yapılmayacaktır.${tbr}・Proje teslim edildikten sonra, alan adı teslimi haricinde hiçbir destek sağlanmayacaktır.${tbr}・Anlaşmanın iptali durumunda, yapılan ödemeler geri ödenmeyecektir.${tbr}・Bu anlaşmada yapılacak herhangi bir değişiklik veya ekleme, yazılı olarak taraflarca onaylanmadıkça geçerli olmayacaktır.`;
                button = `<div class="checkbox-wrapper">
                             <input type="checkbox" id="check-4" name="SpayAI" ${policyAgree === 1 ? 'checked' : ''}>
                             <label for="check-4">
                                 <accept-text>Anlaşmada Yazan Tüm Maddeleri Okudum, Kabul Ediyorum</accept-text>
                                 <span></span>
                             </label>
                         </div>`;
                
                break;

            case 'payment': 
                title = `Ödeme Şartları`;
                text = `・Bu anlaşma kapsamındaki ödemeler, döviz kuru üzerinden TL, USD veya EUR olarak tahsil edilecektir.${tbr}・Ödemeler, ödeme günündeki Türkiye Cumhuriyeti Merkez Bankası (TCMB) tarafından belirlenen döviz alış kuru baz alınarak hesaplanacaktır.${tbr}・Yapılacak ödeme, <b>31.07.2024</b> tarihinde saat <b>15:30</b>'de alınan <b>$1 = 33,1431₺</b> ve ${br}<b>$1 = €1.0826</b> döviz kurları üzerinden hesaplanacaktır.`;
                button = `<div class="checkbox-wrapper">
                             <input type="checkbox" id="check-5" name="SpayAI" ${paymentAgree === 1 ? 'checked' : ''}>
                             <label for="check-5">
                                 <accept-text>Ödeme Şartlarında Yazan Tüm Maddeleri Okudum, Kabul Ediyorum</accept-text>
                                 <span></span>
                             </label>
                         </div>`;
                break;

            case 'email': 
                title = `E-Posta Adresim Neden Gerekli ?`;
                text = `Ödemeniz onaylandıktan sonra, gerekli tüm bilgiler ve belgeler yazdığınız e-posta adresine iletilecektir. Bu bilgiler, <b>info@trinsyca.com</b> adresinden gönderilecektir. İletişimin sağlıklı ve hızlı bir şekilde gerçekleşebilmesi için geçerli bir e-posta adresi vermeniz önemlidir.`;
                break;

            case 'iban':
                title = `${status2}`;
                text = `IBAN başarılı bir şekilde kopyalandı.`;
                break;

            case 'copyMail': 
                title = `E-Posta Adresi Kopyalandı`;
                text = `<b>${status2}</b> e-posta adresi kopyalandı. ${br}Lütfen ödemenizin doğrulanması için dekont belgesini gönderin.`;
                break;

            case 'scripts':
                text = `Bazı dosyalar yüklenemediğinden dolayı sayfa yeniden başlatılacak.`;
                break;

            default: text = `Yazı Bulunamadı..`;
        }

        if(title != null) {
            var talertTitle = document.createElement("h2");
            talertTitle.innerHTML = title;
            talertDiv.appendChild(talertTitle);
        }

        if(text != null) {
            var talertText = document.createElement("p");
            talertText.innerHTML = text;
            talertDiv.appendChild(talertText);
        }

        if(button != null) {
            talertBtn = document.createElement("accept-deal");
            talertBtn.innerHTML = button;
            talertDiv.appendChild(talertBtn)
        }

        notifications.appendChild(talertDiv);

        if(status === 'policy' || status === 'payment') {
            const checkboxes = document.querySelectorAll("input[type='checkbox']");
            checkboxes.forEach(function(checkbox) {
                checkbox.addEventListener("change", function() {
                    if (checkbox.id === "check-4") {
                        policyAgree = checkbox.checked ? 1 : 0;
                    }
                    if (checkbox.id === "check-5") {
                        paymentAgree = checkbox.checked ? 1 : 0;
                    }
                    if (Array.from(checkboxes).every(chk => chk.checked) && policyAgree === 1 && paymentAgree === 1) {
                        if(containerHeight.offsetHeight !== 581) {
                            pageSliderCount = 1;
                        }
                        activeContainer(true);
                        accept_all = 1;
                    }
                    else {
                        activeContainer();
                        accept_all = 0;
                    }
                });
            });
        }

        setTimeout(() => { notifications.classList.add("active"); }, 50);
    }
}

window.addEventListener("click", function(event) {
    var talert = notifications.querySelector('.talert');
    if(notifications.classList.contains('active') && talert && !talert.contains(event.target)) {
        removeNotifications();
    }
});

function removeNotifications() {
    notifications.classList.remove('active');
    setTimeout(() => {
        notifications.innerHTML = "";
        const checkboxes = document.querySelectorAll("input[type='checkbox']");
    }, 250);
}