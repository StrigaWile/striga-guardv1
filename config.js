module.exports = {
GuildID: "",
SunucuGuardToken: "",
RolGuardToken: "",
KanalGuardToken: "",
OwnerID: " ",
VoiceID: "",

// SUNUCU KORUMA LOGLARININ IDLERİ
BanLog: "",
KickLog: "",
SunucuLog: "",
EmojiLog: "",
BotLog: "",

// ROL KORUMA LOGLARININ IDLERİ
RolSilmeLog: "", 
RolAçmaLog: "",
RolGüncellemeLog: "",
YetkiKorumaLog: "",

// KANAL KORUMA LOGLARININ IDLERİ
KanalSilmeLog: "",
KanalAçmaLog: "",
KanalGüncellemeLog: "",
KanalWebhookLog: "",

// CEZA İŞLEM İÇİN ROL İDLERİ
BoosterRole: "", //YOKSA BİR TANE YENİ ROL AÇIN ONUN IDSINI GİRİN
JailedRole: "",

Whitelist: [
"", // Kimin IDsi olduğunu // tan sonra belirtirseniz o kişinin idsini aramak zorunda kalmazınsız
"", // striga
"", // raviwen gibi
],

Bots: [
"", // Kimin IDsi olduğunu // tan sonra belirtirseniz o kişinin idsini aramak zorunda kalmazınsız (BOTUN KENDİ IDSINI EKLEMEYI UNUTMAYIN SORUN ÇIKAR)
"", // register 
"", // moderasyon gibi
],
statusMessage: "Striga Guard",
statusCase: "dnd"
}