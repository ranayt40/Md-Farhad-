module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "Nazrul",
 description: "Listen events Notify bot or group member with random gif/photo/video"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "self-separation" : "being kicked by the administrator";
 if (type == "self-separation") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`সরি বস😞😞😞😞\n${name}\n⋆✦⎯⎯⎯⎯⎯⎯⎯⎯✦⋆\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ➢ F͜͡o͜͡r͜͡h͜͡a͜͡d͜͡   U͜͡d͜͡d͜͡i͜͡n͜͡`, event.threadID)
   } else api.sendMessage(`লিফ্ট নিস না   ${name}  লিফ্ট নিতে চাইলে আমার ফরহাদ এর সাথে যোগাযোগ কর \n⋆✦⎯⎯⎯⎯⎯⎯⎯⎯✦⋆\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ➢ 𝐅𝐚𝐫𝐡𝐚𝐝 𝐔𝐝𝐝𝐢𝐧`,

 event.threadID);
  })
 }
}
