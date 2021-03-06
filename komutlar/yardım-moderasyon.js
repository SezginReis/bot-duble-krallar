
 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('#ffd100') 
.setAuthor(`Duble Krallar Moderasyon Komutları`, client.user.avatarURL())
.setDescription(`<a:ayarlar1:751520036149264454> Duble Krallar botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Sayaç__`,`<a:ayarlar1:751520036149264454> \`${prefix}sayaç\` Sunucunuza Sayaç Kurarsınız ve Anlık Bilgi Alırsınız`,true)
.addField(`__Otomatik Rol__`,`<a:ayarlar1:751520036149264454> \`${prefix}otorol\` Suncunuza Yeni Gelen Üyelere Belirlediğiniz Rölü Verir`,true)
.addField(`__Ban__`,`<a:ayarlar1:751520036149264454> \`${prefix}ban\` Sunucunuzda Belirtiğiniz Kişiyi Yasaklar`,true)
.addField(`__Kick__`,`<a:ayarlar1:751520036149264454> \`${prefix}kick\` Sunucunuzda Belirtiğiniz Kişiyi Kickler`,true)
.addField(`__Ban Kaldırma__`,`<a:ayarlar1:751520036149264454> \`${prefix}unban\` yazarak Sunucunuzda Belirtiğiniz Kişinin Banını Açar`,true)
.addField(`__Mod Log__`,`<a:ayarlar1:751520036149264454> \`${prefix}modlog\` Sunucunuzda Moderasyon Kayıt Logununu Tuttar`,true)
.addField(`__Ban Say__`,`<a:ayarlar1:751520036149264454> \`${prefix}bansay\` Sunucunuzdan Kaç Kişi Ban Yemiş`,true)
.addField(`__Ban Sorgu__`,`<a:ayarlar1:751520036149264454> \`${prefix}bansorgu\` Kişinin Neden Banlandığını Gösterir`,true)
.addField(`__Küfür Engel__`,`<a:ayarlar1:751520036149264454> \`${prefix}küfürengel\` Küfür Edilmesini Tamamen Yasaklar.`,true)
.addField(`__Reklam Engel__`,`<a:ayarlar1:751520036149264454> \`${prefix}reklamengel\` Reklam Yapılmasını Tamamen Yasaklar.`,true)
.addField(`__Reklam Kick__`,`<a:ayarlar1:751520036149264454> \`${prefix}reklam-kick\` Reklam Yapan Kişiyi 3 Uyarıdan Sonra Kickler`,true)
.addField(`__Mesaj Temizleme__`,`<a:ayarlar1:751520036149264454> \`${prefix}sil\` Belirtiğiniz Kadar Mesaj Siler`,true)
.addField(`__Yavaş Mod__`,`<a:ayarlar1:751520036149264454> \`${prefix}yavaşmod\` Kanala Yazı Süre Limiti Koyar.`,true)
.addField(`__Sa-As__`,`<a:ayarlar1:751520036149264454> \`${prefix}sa-as\` Sunucuzda Selam Verenlere Selam Der`,true)
.addField(`__Yasaklı Tag__`,`<a:ayarlar1:751520036149264454> \`${prefix}yasaklı-tag\` Sunucuza Belirli Taga Sahip Üyeler Giremez`,true)
.addField(`__Bilgilendirme__`,`<a:ayarlar1:751520036149264454> \`${prefix}davet\` | Duble Krallar Bot'u Sunucunuza Davet Edersiniz\n <a:ayarlar1:751520036149264454> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:ayarlar1:751520036149264454> \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "moderasyon",
  aliases: []
}
