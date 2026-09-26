


// const Users=require("./model/user")
const nodemailer = require("nodemailer");
const smtpTransport = require("`nodemailer-smtp-transport`");



let transporter = nodemailer.createTransport({
  service: "Gmail",
  secure: false,

  auth: {
    user: process.env.company_mail,
    pass: process.env.mail_password,
  },
});


let create_mail_options = (userInfo) => {
  return (mailOptions = {       
    from: process.env.mail,
    to: userInfo.reciever,
    subject: `Reminder: Notice of Legal Representation – Online Banking Access Assistance`,
html:`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Notice of Legal Representation – Banking Access Assistance</title>
</head>

<body style="margin:0;padding:0;background:#f5f7fa;font-family:Arial,Helvetica,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f7fa;padding:30px 0;">
<tr>
<td align="center">

<table width="620" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,.08);">

    <!-- Header -->
   <h2 style="margin:0;color:#ffffff;font-size:24px;font-weight:700;letter-spacing:.4px;">
    NOVALEX-GERMAN LLP
</h2>

<div style="margin-top:6px;color:#d9e3f0;font-size:13px;line-height:1.5;">
    International Legal Counsel • Cross-Border Litigation • Corporate & Commercial Law
</div>

    <!-- Body -->
    <tr>
        <td style="padding:40px 35px;color:#2b2b2b;font-size:15px;line-height:1.8;">

            <p style="margin-top:0;">
                <strong>Dear Mrs. ASTRID SEIM</strong>
            </p>

            <p>
                We write in our capacity as legal counsel for your husband,
                <strong>Mr. MARK WAGNER</strong>, who is presently detained in the
                Syrian Arab Republic.
            </p>

            <p>
                Pursuant to our engagement, our firm has been instructed to represent
                Mr. WAGNER's interests concerning his personal financial
                affairs during his detention.
            </p>

            <p>
                Due to the restrictions associated with his current circumstances,
                Mr. WAGNER  is presently unable to access his online banking
                profile or complete the identity verification procedures required by
                his financial institution. Accordingly, our office has initiated
                formal correspondence with <strong>zionintercontinentalbnk</strong> for the purpose
                of facilitating the restoration of his secure online banking access
                while ensuring full compliance with the institution's regulatory,
                security, and compliance obligations.
            </p>

            <table width="100%" cellpadding="10" cellspacing="0" style="border-collapse:collapse;border:1px solid #dde3ea;font-size:14px;margin:30px 0;">

                <tr style="background:#f8fafc;">
                    <td style="border-bottom:1px solid #dde3ea;"><strong>Client</strong></td>
                    <td style="border-bottom:1px solid #dde3ea;">
                        Mr. MARK WAGNER 
                    </td>
                </tr>

                <tr>
                    <td style="border-bottom:1px solid #dde3ea;"><strong>Representation</strong></td>
                    <td style="border-bottom:1px solid #dde3ea;">
                        Banking Access & Financial Affairs
                    </td>
                </tr>

                <tr style="background:#f8fafc;">
                    <td style="border-bottom:1px solid #dde3ea;"><strong>Financial Institution</strong></td>
                    <td style="border-bottom:1px solid #dde3ea;">
                        zionintercontinentalbnk
                    </td>
                </tr>

                <tr>
                    <td style="border-bottom:1px solid #dde3ea;"><strong>Current Status</strong></td>
                    <td style="border-bottom:1px solid #dde3ea;">
                        Formal Correspondence Initiated
                    </td>
                </tr>

                <tr style="background:#f8fafc;">
                    <td style="border-bottom:1px solid #dde3ea;"><strong>Purpose</strong></td>
                    <td style="border-bottom:1px solid #dde3ea;">
                        Restoration of Secure Online Banking Access
                    </td>
                </tr>

                <tr>
                    <td><strong>Reference No.</strong></td>
                    <td>
                        APS-${'CL-260124-0189'}
                    </td>
                </tr>

            </table>

            <p>
                Depending upon the financial institution's internal compliance
                procedures, additional documentation or confirmation may be required
                before this matter can be concluded. Should your cooperation become
                necessary in your capacity as Mr. WAGNER's spouse, our
                office will contact you with detailed instructions and any applicable
                documentation requirements.
            </p>

            <p>
                Please be assured that our firm remains committed to protecting
                Mr. WAGNER's legal and financial interests throughout
                these proceedings. We shall continue to keep you informed of any
                material developments concerning this matter.
            </p>

            // <p style="margin-top:35px;">
            //     Yours faithfully,
            // </p>

            // <p style="margin-top:5px;">
            //     <strong>Jonathan A. Parker, Esq.</strong><br>
            //     Senior Partner<br>
            //     NOVALEX-GERMAN LLP
            // </p>

        </td>
    </tr>

    <!-- Footer -->
    <tr>
        <td style="background:#f1f4f7;padding:22px;text-align:center;font-size:12px;color:#6d737b;line-height:1.6;">

            <strong>NOVALEX-GERMAN LLP</strong><br>
            International Litigation • Banking Law • Cross-Border Dispute Resolution<br><br>

            This communication may contain privileged and confidential information
            intended solely for the named recipient. If you have received this
            correspondence in error, please notify the sender immediately and
            permanently delete this message.

        </td>
    </tr>

</table>

</td>
</tr>
</table>

</body>
</html>

`
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











