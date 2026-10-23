
const nodemailer = require("nodemailer");

async function main() {
  const account = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: account.smtp.host,
    port: account.smtp.port,
    secure: account.smtp.secure,
    auth: {
      user: account.user,
      pass: account.pass,
    },
  });

  const info = await transporter.sendMail({
    from: `"Email Testing" <${account.user}>`,
    to: "tester@example.com",
    subject: "Tes Email",
    text: "Email testing berhasil!",
    html: "<h2>Email testing berhasil!</h2>",
  });

  console.log("ID pesan:", info.messageId);
  console.log(
    "Preview email:",
    nodemailer.getTestMessageUrl(info)
  );
}

main().catch(console.error);
