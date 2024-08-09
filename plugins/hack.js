const { smd, sleep } = require('../lib');

smd({ cmdname: "hack", type: "fun", info: "hacking prank", filename: __filename }, async (citel) => {
  const messages = [
    "STARTING. . . ",
    " █ 10%",
    " █ █ 20%",
    " █ █ █ 30%",
    " █ █ █ █ 40%",
    " █ █ █ █ █ 50%",
    " █ █ █ █ █ █ 60%",
    " █ █ █ █ █ █ █ 70%",
    " █ █ █ █ █ █ █ █ 80%",
    " █ █ █ █ █ █ █ █ █ 90%",
    " █ █ █ █ █ █ █ █ █ █ 100%",
    "contact on process.. \\n Conecting to Server error to find 404 ",
    "contact Save successfully \\n Updateing...",
    " whatsapp Scanning  \\n Looding...",
    " 100% completed",
    " Save Data...",
    " service Offline",
    "DO NOT SPAM AND VIRUS SEND"
  ];

  let editedMessage;
  for (const message of messages) {
    editedMessage = await citel.send(editedMessage || message);
    await sleep(1000);
    editedMessage = await citel.edit(editedMessage, message);
  }
});
