
# Chat Application

This project Firebase is an online chat application where users can join chat rooms. Users can authenticate with their Google accounts and join a room of their choice to chat with other users.

Project Features
<ul>
<li><b>Kimlik Doğrulama:</b>  Kullanıcılar, Google hesaplarıyla kimlik doğrulaması yaparak uygulamaya giriş yapabilirler.</li>
<li><b>Oda Seçimi:</b>  Kullanıcılar, bir sohbet odasına katılmak için oda adını girebilirler.</li>
<li><b>Sohbet: </b>  Kullanıcılar, seçtikleri odada diğer kullanıcılarla gerçek zamanlı olarak sohbet edebilirler.</li>
<li><b>Güvenlik:</b>  Kullanıcıların kimlik doğrulaması ve oda seçimi yapmaları gerektiği için güvenli bir sohbet ortamı sağlanmaktadır.</li>

</ul>

<h2>Proje Bileşenleri </h2>
<ul>
<li><b>AuthPage:</b> <br>  Kullanıcıların giriş yapabileceği ve kimlik doğrulaması sağlayabileceği sayfa. Google hesaplarıyla giriş yapma seçeneği sunar.</li>
<li><b>RoomPage:</b><br>   Kullanıcıların sohbet odalarına katılabileceği veya yeni odalar oluşturabileceği sayfa. Ayrıca kullanıcıların uygulamadan çıkış yapabileceği bir seçenek de sunar.</li>
<li><b>ChatPage:</b> <br>  Kullanıcıların bir odada sohbet edebileceği ana sayfa. Kullanıcılar mesaj gönderebilir ve alabilirler. Firebase Firestore kullanılarak mesajların depolandığı ve gerçek zamanlı olarak senkronize edildiği bir yapı sağlanır.</li>
<li><b>  Firebase Config ve İntegrasyon:</b><br> Firebase'in kullanıldığı ve Firebase kimlik doğrulaması ve Firestore veritabanı gibi hizmetlerin projeye entegre edildiği bölüm.</li>
</ul>

<h2>Firebase Temel Özellikleri </h2>
<ul>
<li><b>Gerçek Zamanlı Veritabanı:</b> <br> Firebase, gerçek zamanlı veri senkronizasyonunu sağlayan NoSQL tabanlı bir bulut veritabanı sunar. Bu, uygulamalar arasında anlık olarak veri güncellemelerini sağlar.</li>
<li><b>Kimlik Doğrulama:</b> <br>  Firebase, kullanıcıların kimlik doğrulamasını kolaylaştırır. Google, Facebook, Twitter gibi popüler kimlik sağlayıcılarına entegrasyon sağlar ve e-posta ve şifreyle doğrulama seçenekleri sunar.</li>
<li><b>Uygulama Barındırma:</b> <br>  Firebase, web uygulamalarınızı Firebase'e entegre ederek kolayca barındırmanıza olanak tanır. SSL desteği, otomatik ölçeklendirme ve hızlı CDN hizmeti gibi özellikler sunar.</li>
<li><b>Dosya Depolama:</b> <br>  Firebase Storage, kullanıcıların medya dosyalarını güvenli ve ölçeklenebilir bir şekilde depolamalarını sağlar. Bu, kullanıcıların resimler, videolar ve diğer dosyaları kolayca yüklemesine ve paylaşmasına olanak tanır.</li>
<li><b>Sunucu İşlevleri:</b> <br>  Firebase Cloud Functions, Firebase projenizin arkasında çalışan özelleştirilebilir ve ölçeklenebilir sunucu kodunu yazmanıza olanak tanır. Bu, kullanıcılar belirli olaylar gerçekleştiğinde otomatik olarak tetiklenen arka uç işlevleri oluşturabilirler.</li>
<li><b>Analitik ve Performans İzleme:</b><br>   Firebase Analytics, kullanıcı davranışlarını anlamak için kapsamlı bir analitik çözüm sunar. Performans İzleme, uygulamanızın performansını izlemenize ve geliştirmenize yardımcı olur.</li>
</ul>
Firebase, geniş bir yelpazede sunulan bu özelliklerle geliştiricilere uygulamalarını hızlı ve güvenilir bir şekilde oluşturma ve dağıtma imkanı sunar.

<h2>Kullanılan Teknolojiler </h2>
<ul>
<li>React</li>
<li>Firebase</li>
<li>Scss</li>

</ul>

<h2>Ekran Görüntüsü</h2>

![](./public/chatapp.gif)
