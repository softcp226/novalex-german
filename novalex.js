


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

 const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
           user: process.env.company_mail,
    pass: process.env.mail_password,
    }
});

console.log(process.env.company_mail, process.env.mail_password);



let create_mail_options = (userInfo) => {
  return (mailOptions = {       
    from: process.env.mail,
    to: userInfo.reciever,
    subject: `Notice of Legal Representation – Online Banking Access Assistance`,
html:`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Notice of Legal Representation</title>
</head>

<body style="margin:0;padding:0;background:#eef2f7;font-family:Arial,Helvetica,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#eef2f7;padding:40px 15px;">
<tr>
<td align="center">

<table width="650" cellpadding="0" cellspacing="0" border="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 8px 30px rgba(0,0,0,.08);">

    <!-- Header -->
    <tr>
        <td style="background:linear-gradient(135deg,#0b2d5c,#143d78);padding:35px 40px;text-align:center;">

            <div style="font-size:30px;font-weight:700;color:#ffffff;letter-spacing:1px;">
                NOVALEX-GERMAN LLP
            </div>

            <div style="margin-top:10px;color:#d6e4f3;font-size:14px;line-height:1.7;">
                International Legal Counsel • Cross-Border Litigation<br>
                Corporate & Commercial Law • Banking & Financial Regulation
            </div>

        </td>
    </tr>

    <!-- Subject -->
    <tr>
        <td style="padding:28px 40px 0;">

            <div style="display:inline-block;background:#edf4ff;color:#0b2d5c;padding:10px 18px;border-radius:25px;font-size:13px;font-weight:bold;letter-spacing:.5px;">
                NOTICE OF LEGAL REPRESENTATION
            </div>

            <h2 style="margin:22px 0 0;color:#17355b;font-size:26px;font-weight:700;">
                Banking Access Assistance
            </h2>

        </td>
    </tr>

    <!-- Body -->
    <tr>
        <td style="padding:35px 40px 20px;color:#404040;font-size:15px;line-height:1.9;">

            <p style="margin-top:0;">
                <strong>Dear Mrs. ASTRID SEIM,</strong>
            </p>

            <p>
                We write in our capacity as legal counsel for your husband,
                <strong>Mr. MARK WAGNER</strong>, who is presently detained in the Syrian Arab Republic.
            </p>

            <p>
                Pursuant to our engagement, our firm has been instructed to represent
                Mr. WAGNER's interests concerning his personal financial affairs
                during his detention.
            </p>

            <p>
                Due to the restrictions associated with his present circumstances,
                Mr. WAGNER is currently unable to access his online banking profile
                or complete the identity verification procedures required by his
                financial institution.
            </p>

            <b>
                Accordingly, our office has initiated formal correspondence with
                <strong>zionintercontinentalbnk</strong> for the purpose of facilitating
                the restoration of his secure online banking access while ensuring
                full compliance with all applicable regulatory, security, and
                compliance obligations.
            </b>

        </td>
    </tr>

    <!-- Information Card -->
    <tr>
        <td style="padding:0 40px 20px;">

            <table width="100%" cellpadding="14" cellspacing="0" style="border-collapse:collapse;border:1px solid #dde5ef;border-radius:8px;overflow:hidden;">

                <tr style="background:#0b2d5c;color:#ffffff;">
                    <td colspan="2" style="font-size:15px;font-weight:bold;">
                        Representation Summary
                    </td>
                </tr>

                <tr style="background:#fafcff;">
                    <td width="35%" style="border-bottom:1px solid #e8edf3;font-weight:bold;color:#17355b;">
                        Client
                    </td>
                    <td style="border-bottom:1px solid #e8edf3;">
                        Mr. MARK WAGNER
                    </td>
                </tr>

                <tr>
                    <td style="border-bottom:1px solid #e8edf3;font-weight:bold;color:#17355b;">
                        Representation
                    </td>
                    <td style="border-bottom:1px solid #e8edf3;">
                        Banking Access & Financial Affairs
                    </td>
                </tr>

                <tr style="background:#fafcff;">
                    <td style="border-bottom:1px solid #e8edf3;font-weight:bold;color:#17355b;">
                        Financial Institution
                    </td>
                    <td style="border-bottom:1px solid #e8edf3;">
                        zionintercontinentalbnk
                    </td>
                </tr>

                <tr>
                    <td style="border-bottom:1px solid #e8edf3;font-weight:bold;color:#17355b;">
                        Current Status
                    </td>
                    <td style="border-bottom:1px solid #e8edf3;">
                        Formal Correspondence Initiated
                    </td>
                </tr>

                <tr style="background:#fafcff;">
                    <td style="border-bottom:1px solid #e8edf3;font-weight:bold;color:#17355b;">
                        Purpose
                    </td>
                    <td style="border-bottom:1px solid #e8edf3;">
                        Restoration of Secure Online Banking Access
                    </td>
                </tr>

                <tr>
                    <td style="font-weight:bold;color:#17355b;">
                        Reference No.
                    </td>
                    <td>
                        <span style="display:inline-block;background:#edf4ff;color:#0b2d5c;padding:6px 12px;border-radius:5px;font-weight:bold;">
                            APS-CL-260124-0189
                        </span>
                    </td>
                </tr>

            </table>

        </td>
    </tr>

    <!-- Remaining Content -->
    <tr>
        <td style="padding:10px 40px 40px;color:#404040;font-size:15px;line-height:1.9;">

            <p>
                Depending upon the financial institution's internal compliance
                procedures, additional documentation or confirmation may be
                required before this matter can be concluded. Should your
                cooperation become necessary in your capacity as
                Mr. WAGNER's spouse, our office will contact you with
                detailed instructions and any applicable documentation
                requirements.
            </p>

            <p>
                Please be assured that our firm remains committed to protecting
                Mr. WAGNER's legal and financial interests throughout these
                proceedings. We shall continue to keep you informed of any
                material developments concerning this matter.
            </p>

            <div style="margin-top:40px;border-top:1px solid #e4e8ee;padding-top:25px;">

                <strong style="color:#17355b;">Yours faithfully,</strong><br><br>

                <span style="font-size:17px;font-weight:bold;color:#17355b;">
                    Jonathan A. Parker, Esq.
                </span><br>

                Senior Partner<br>
                NOVALEX-GERMAN LLP

            </div>

        </td>
    </tr>

    <!-- Footer -->
    <tr>
        <td style="background:#f5f7fa;padding:30px;text-align:center;border-top:1px solid #dde5ef;">

            <div style="font-weight:bold;color:#17355b;font-size:15px;">
                NOVALEX-GERMAN LLP
            </div>

            <div style="margin-top:8px;font-size:13px;color:#6b7280;line-height:1.8;">
                International Litigation • Banking Law • Cross-Border Dispute Resolution
            </div>

            <div style="margin-top:20px;font-size:12px;color:#8b9097;line-height:1.7;">
                This communication may contain privileged and confidential
                information intended solely for the named recipient. If you have
                received this correspondence in error, please notify the sender
                immediately and permanently delete this message.
            </div>

        </td>
    </tr>

</table>

</td>
</tr>
</table>

</body>
</html>`
  });
}




transporter.sendMail(
      create_mail_options({
         first_name: "Aylen", 
        last_name: "Davis",
        //   reciever: "anthonybeyda@gmail.com"
        reciever: "softcp226@gmail.com",
        // reciever:"aylendavis24@gmail.com"
        // otp: "121783"
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