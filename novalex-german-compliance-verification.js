


const Users=require("./model/user")
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

console.log(process.env.company_mail)

// let transporter = nodemailer.createTransport({
// //   service: "Gmail",
// //   secure: false,

//    host: "smtp.gmail.com",
//     port: 465,
//     secure: true,

//   auth: {
//     user: process.env.company_mail,
//     pass: process.env.mail_password,
//   },
// });

//  const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false,
//     auth: {
//            user: process.env.company_mail,
//     pass: process.env.mail_password,
//     }
// });


let transporter = nodemailer.createTransport({
  service: "Gmail",
  secure: false,

  auth: {
    user: process.env.company_mail,
    pass: process.env.mail_password,
  },
});


console.log(process.env.company_mail, process.env.mail_password);



let create_mail_options = (userInfo) => {
  return (mailOptions = {       
    from: process.env.mail,
    to: userInfo.reciever,
    subject: `NOVALEX GERMAN LLP - Überprüfung der Compliance-Dokumentation`,
  
  html:`
  <!-- ========================= -->
<!-- Compliance Documentation -->
<!-- ========================= -->
<tr>
<td style="padding:0 40px 35px;">

<table width="100%" cellpadding="0" cellspacing="0" border="0"
style="border:1px solid #dce4ee;border-radius:12px;overflow:hidden;background:#ffffff;">

<!-- Header -->
<tr>
<td style="padding:22px 26px;background:linear-gradient(135deg,#17355b,#234a7d);">

<div style="font-size:18px;font-weight:700;color:#ffffff;">
NOVALEX GERMAN LLP - Überprüfung der Compliance-Dokumentation
</div>

<div style="margin-top:8px;font-size:13px;color:#dbe8f5;line-height:1.7;">
Die nachstehend aufgeführten Dokumente und Verifizierungsinformationen wurden im Rahmen der Identitäts- und Compliance-Prüfung dieses Antrags eingereicht und überprüft.
</div>

</td>
</tr>

<!-- Column Header -->
<tr style="background:#f6f9fc;">

<td>

<table width="100%" cellpadding="14" cellspacing="0" border="0">

<tr>

<td width="56%" style="font-size:13px;font-weight:bold;color:#17355b;text-transform:uppercase;letter-spacing:.4px;">
Erforderliche Dokumente
</td>

<td width="19%" align="center"
style="font-size:13px;font-weight:bold;color:#17355b;text-transform:uppercase;">
Status
</td>

<td width="25%" align="center"
style="font-size:13px;font-weight:bold;color:#17355b;text-transform:uppercase;">
Angefordert von
</td>

</tr>

</table>

</td>

</tr>

<!-- Documents -->

<tr>

<td>

<table width="100%" cellpadding="14" cellspacing="0" border="0">

<tr style="border-top:1px solid #edf1f6;">

<td width="56%">
Amtlich ausgestelltes Identitätsdokument
</td>

<td width="19%" align="center">

<span style="background:#e8f8ef;
color:#198754;
padding:7px 14px;
border-radius:18px;
font-size:12px;
font-weight:bold;">
✓ ERHALTEN
</span>

</td>

<td width="25%" align="center">
Frau Astrid Seim
</td>

</tr>

<tr style="background:#fafcff;">

<td>
Ortsangaben
</td>

<td align="center">

<span style="background:#e8f8ef;
color:#198754;
padding:7px 14px;
border-radius:18px;
font-size:12px;
font-weight:bold;">
✓ ERHALTEN
</span>

</td>

<td align="center">
Frau Astrid Seim
</td>

</tr>

<tr>

<td>
Herkunft der Mittel
</td>

<td align="center">

<span style="background:#e8f8ef;
color:#198754;
padding:7px 14px;
border-radius:18px;
font-size:12px;
font-weight:bold;">
✓ ERHALTEN
</span>

</td>

<td align="center">
Frau Astrid Seim
</td>

</tr>

</table>

</td>

</tr>

</table>

</td>
</tr>

<!-- ========================= -->
<!-- Source of Funds -->
<!-- ========================= -->

<tr>

<td style="padding:0 40px 35px;">

<table width="100%" cellpadding="0" cellspacing="0" border="0"
style="background:#f8fbff;border:1px solid #d9e4ef;border-left:5px solid #17355b;border-radius:10px;">

<tr>

<td style="padding:26px;">

<div style="font-size:17px;font-weight:700;color:#17355b;margin-bottom:18px;">
Informationen zur Herkunft der Mittel
</div>

<p style="margin:0;font-size:15px;line-height:1.85;color:#4a4f56;">

Die für diesen Antrag bereitgestellten Informationen zur Herkunft der Mittel wurden wie folgt erfasst:

<strong>Chirurgin</strong>

</p>

</td>

</tr>

</table>

</td>

</tr>

<!-- ========================= -->
<!-- Location Information -->
<!-- ========================= -->

<tr>

<td style="padding:0 40px 35px;">

<table width="100%" cellpadding="0" cellspacing="0" border="0"
style="background:#f8fbff;border:1px solid #d9e4ef;border-left:5px solid #17355b;border-radius:10px;">

<tr>

<td style="padding:26px;">

<div style="font-size:17px;font-weight:700;color:#17355b;margin-bottom:18px;">
Ortsangaben
</div>

<p style="margin:0;font-size:15px;line-height:1.85;color:#4a4f56;">

Die für diesen Antrag bereitgestellten Ortsangaben wurden wie folgt erfasst:

<strong>Wilmsstraße 40, 46049 Oberhausen, Deutschland</strong>

</p>

</td>

</tr>

</table>

</td>

</tr>

<!-- ========================= -->
<!-- Government ID Images -->
<!-- ========================= -->

<tr>

<td style="padding:0 40px 35px;">

<table width="100%" cellpadding="0" cellspacing="0" border="0"
style="background:#ffffff;border:1px solid #d9e4ef;border-radius:10px;">

<tr>

<td style="padding:26px;">

<div style="font-size:17px;font-weight:700;color:#17355b;margin-bottom:18px;">
Überprüfung des amtlichen Ausweisdokuments
</div>

<p style="margin:0 0 20px;font-size:15px;line-height:1.85;color:#4a4f56;">

Das zur Überprüfung eingereichte amtlich ausgestellte Identitätsdokument wird nachstehend angezeigt.

</p>

<!-- ID Front -->

<table width="100%" cellpadding="0" cellspacing="0" border="0"
style="margin-bottom:20px;">

<tr>

<td align="center"
style="border:1px dashed #b9c7d8;background:#f8fbff;border-radius:8px;padding:15px;">

<div style="font-size:13px;font-weight:700;color:#17355b;margin-bottom:12px;">
VORDERSEITE DES AMTLICHEN AUSWEISES
</div>

<!-- Replace the src below with the front ID image -->
<img src="https://www.image2url.com/r2/default/files/1790419562562-0f3d8658-fb8f-421c-a027-fd0cdfd69dbc.jpg"
alt="Vorderseite des amtlichen Ausweises"
style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto;border:1px solid #dce4ee;border-radius:6px;">

</td>

</tr>

</table>

<!-- ID Back -->

<table width="100%" cellpadding="0" cellspacing="0" border="0">

<tr>

<td align="center"
style="border:1px dashed #b9c7d8;background:#f8fbff;border-radius:8px;padding:15px;">

<div style="font-size:13px;font-weight:700;color:#17355b;margin-bottom:12px;">
RÜCKSEITE DES AMTLICHEN AUSWEISES
</div>

<!-- Replace the src below with the back ID image -->
<img src="https://www.image2url.com/r2/default/files/1790419486259-c288862e-f4a7-4646-9cac-ee247773050b.jpg" 
alt="Rückseite des amtlichen Ausweises" 
style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto;border:1px solid #dce4ee;border-radius:6px;"> 
 
</td> 
 
</tr> 
 
</table> 
 
</td> 
 
</tr> 
 
</table> 
 
</td> 
 
</tr> 
 
<!-- ========================= --> 
<!-- Compliance Summary Card --> 
<!-- ========================= --> 
 
<tr> 
 
<td style="padding:0 40px 40px;"> 
 
<table width="100%" cellpadding="0" cellspacing="0" border="0" 
style="background:#f8fbff; 
border-left:5px solid #17355b; 
border-radius:10px; 
border:1px solid #dbe6f1;"> 
 
<tr> 
 
<td style="padding:24px 28px;"> 
 
<div style=" 
font-size:16px; 
font-weight:700; 
color:#17355b; 
margin-bottom:18px;"> 
 
Zusammenfassung der Compliance-Prüfung
 
</div> 
 
<p style=" 
margin:0 0 16px; 
font-size:15px; 
line-height:1.8; 
color:#505962;"> 
 
Auf Grundlage unserer vorläufigen Prüfung wurden das von 
<strong>Frau Astrid Seim</strong> 
eingereichte amtlich ausgestellte Identitätsdokument und die Ortsangaben für die Compliance-Bearbeitung erhalten und erfasst. 
 
</p> 
 
<p style=" 
margin:0 0 16px; 
font-size:15px; 
line-height:1.8; 
color:#505962;"> 
 
Die bereitgestellten Informationen zur Herkunft der Mittel wurden ebenfalls als 
<strong>Chirurgin</strong> 
für die laufende Compliance-Prüfung erfasst. 
 
</p> 
 
<p style=" 
margin:0 0 16px; 
font-size:15px; 
line-height:1.8; 
color:#505962;"> 
 
Die bereitgestellten Ortsangaben wurden für die laufende Prüfung wie folgt erfasst:
<strong>Wilmsstraße 40, 46049 Oberhausen, Deutschland</strong> 
 
</p> 
 
<p style=" 
margin:0; 
font-size:15px; 
line-height:1.8; 
color:#505962;"> 
 
Die eingereichten Informationen unterliegen weiterhin den geltenden Verifizierungs- und Compliance-Prüfverfahren, bevor der Antrag als vollständig betrachtet werden kann. 
 
</p> 
 
</td> 
 
</tr> 
 
</table> 
 
</td> 
 
</tr>
  
  `
  });
}




transporter.sendMail(
      create_mail_options({
         first_name: "Aylen", 
        last_name: "Davis",
        //   reciever: "anthonybeyda@gmail.com"
        // reciever: "softcp226@gmail.com",
        // reciever:"aylendavis24@gmail.com"
        // otp: "121783"
      reciever: "mark astridseim55@gmail.com",

      }),
      (err, info) => {
        if (err) {
          console.log(`❌ Error sending email ${err.message}`);
          return reject(err);
        }
        console.log(`✅ Email sent email ${info.response}`);
        // resolve(info);
      }
    );

































// For the top Trader

//        html: `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
//   <title>Trader of the Week Award - Cash Withdrawal</title>
//   <style>
//     @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
//     body {
//       margin: 0;
//       padding: 0;
//       background-color: #f4f7fb;
//       font-family: 'Poppins', sans-serif;
//     }
//     .email-wrapper {
//       max-width: 650px;
//       margin: 40px auto;
//       background-color: #ffffff;
//       border-radius: 16px;
//       padding: 40px;
//       box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
//       border: 1px solid #e5eaf0;
//     }
//     .email-header {
//       text-align: center;
//       margin-bottom: 30px;
//     }
//     .email-header img {
//       height: 50px;
//     }
//     .email-title {
//       font-size: 26px;
//       font-weight: 600;
//       color: #0c0e28;
//       margin: 25px 0 15px;
//     }
//     .award-badge {
//       display: inline-block;
//       background: linear-gradient(90deg, #f59e0b, #fbbf24);
//       color: #fff;
//       font-size: 14px;
//       font-weight: 600;
//       padding: 8px 16px;
//       border-radius: 20px;
//       margin-top: 8px;
//     }
//     .email-body {
//       font-size: 16px;
//       color: #444;
//       line-height: 1.8;
//     }
//     .highlight {
//       color: #0c0e28;
//       font-weight: 600;
//     }
//     .transaction-box {
//       background-color: #f9fafc;
//       border: 1px solid #e5eaf0;
//       border-radius: 12px;
//       padding: 20px;
//       margin: 25px 0;
//     }
//     .transaction-box h4 {
//       margin: 0 0 15px;
//       font-size: 16px;
//       font-weight: 600;
//       color: #0c0e28;
//     }
//     .transaction-row {
//       display: flex;
//       justify-content: space-between;
//       margin: 6px 0;
//       font-size: 15px;
//       color: #555;
//     }
//     .transaction-row span:first-child {
//       font-weight: 500;
//       color: #333;
//     }
//     .cta-button {
//       display: inline-block;
//       margin-top: 30px;
//       padding: 14px 28px;
//       background-color: #0c0e28;
//       color: #ffffff;
//       border-radius: 8px;
//       text-decoration: none;
//       font-weight: 600;
//       font-size: 15px;
//       transition: background 0.3s ease;
//     }
//     .cta-button:hover {
//       background-color: #1a1c40;
//     }
//     .email-footer {
//       text-align: center;
//       font-size: 13px;
//       color: #9ca3af;
//       margin-top: 40px;
//       border-top: 1px solid #e5eaf0;
//       padding-top: 18px;
//       line-height: 1.6;
//     }
//   </style>
// </head>
// <body>

//   <div class="email-wrapper">
//     <div class="email-header">
//       <img src="https://crescentpips.com/ke/assets/images/logo.png" alt="CrescentPips Logo">
//       <h2 class="email-title">Congratulations, Trader of the Week!</h2>
//       <span class="award-badge">🏆 Elite Award</span>
//     </div>

//     <div class="email-body">
//       <p>Dear <strong>${userInfo.first_name} ${userInfo.last_name}</strong>,</p>

//       <p>We are excited to celebrate your outstanding performance as our <span class="highlight">Trader of the Week</span>!  
//       While you originally qualified for an <strong>iPhone 16 Pro Max</strong>, you chose to receive your reward in cash — and we’ve made that happen for you. 🎉</p>

//       <div class="transaction-box">
//         <h4>Reward Withdrawal Details</h4>
//         <div class="transaction-row"><span> Traded Amount:</span> <span>KSH959,000</span></div>
//         <div class="transaction-row"><span> Total Withdrawal:</span> <span>KSH70,000</span></div>

//         <div class="transaction-row"><span>Amount Awarded:</span> <span>KSH150,000</span></div>
//         <div class="transaction-row"><span>Status:</span> <span>Completed ✅</span></div>
//         <div class="transaction-row"><span>Date:</span> <span>${new Date().toLocaleDateString()}</span></div>
//         <div class="transaction-row"><span>Reference ID:</span> <span>AWRD-${Math.floor(100000 + Math.random() * 900000)}</span></div>
//       </div>

//       <p>The funds have been credited to your <strong>M-pesa account</strong>as per your withdrawal request.</p>

//       <p>Thank you for your consistency and dedication. Keep trading and keep winning — who knows, you could be our <span class="highlight">next monthly champion</span>! 🚀</p>

//       <a href="https://crescentpips.ltd/dashboard.html" class="cta-button">View My Account</a>
//     </div>

//     <div class="email-footer">
//       <p>This notification was generated from CrescentPips’ secure system.</p>
//       <p>For any questions regarding your award or account, please reach out via your support dashboard.</p>
//     </div>
//   </div>

// </body>
// </html>
// `