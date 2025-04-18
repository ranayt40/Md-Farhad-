module.exports.config = {
    name: "rules",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Islamick Cyber Chat",
    description: "important notes",
    commandCategory: "random-img",
    usages: "send message",
    cooldowns: 5,
    dependencies: {
        "request": "",
        "fs-extra": "",
        "axios": ""
    }
};

module.exports.run = async({ api, event, args, client, Users, Threads, __GLOBAL, Currencies }) => {
    const axios = global.nodemodule["axios"];
    const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];
    var ZiaRein3 = (`👇> 𝙍𝙪𝙡𝙚𝙨 < 👇
ভালোভাবে পড়ে নেন 🤨☠️

1️⃣ এডমিনের কথা শুনতে হবে ✅
2️⃣ শুধু Voice এ গান দিবেন     ✅
3️⃣ গ্রুপে Seen করার সাথে সাথে উপরের যতগুলো গানে REACT দেওয়া বাকি ছিল সবগুলোতে REACT complete করবেন ✅
4️⃣ কিছু বলার থাকলে Admin দের মেসেজ দিবেন✅, গ্রুপে না ‼️
5️⃣Emoji, Message , Video,  Link দেওয়া যাবে না ‼️, ভুলে চলে গেলে সাথে সাথে Remove  করতে হবে ✅
6️⃣ Fake Voice + অন্য কারো ভয়েস Forward  করে দেওয়া যাবে না ‼️
𝐃𝐨𝐧'𝐭 𝐚𝐥𝐥𝐨𝐰 𝐚𝐧𝐲 𝐭𝐨𝐱𝐢𝐜 𝐩𝐞𝐫𝐬𝐨𝐧 🚫
বি:দ্র: Rulse অমান্য করলে নোটিশ ছাড়া গ্রুপ থেকে Remove করা হবে ‼️☠️
𝑨𝒅𝒎𝒊𝒏✅𝑭𝒂𝒓𝒉𝒂𝒅 {𝑶𝒘𝒏𝒆𝒓}-!!✨🧡`);
   var ZiaRein = [
""https://i.imgur.com/g47qNDT.jpeg",",
    ];
    var ZiaRein2 = () => api.sendMessage({ body: ZiaRein3, attachment: fs.createReadStream(__dirname + "/cache/ZiaRein1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/ZiaRein1.jpg"), event.messageID);
    return request(encodeURI(ZiaRein[Math.floor(Math.random() * ZiaRein.length)])).pipe(fs.createWriteStream(__dirname + "/cache/ZiaRein1.jpg")).on("close", () => ZiaRein2());
};
