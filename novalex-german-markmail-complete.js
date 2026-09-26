


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
    subject: `Verifizierungsunterlagen erhalten`,

html:`<!DOCTYPE html> 
<html lang="de"> 
<head> 
<meta charset="UTF-8"> 
<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
<title>Verifizierungsunterlagen erhalten</title> 
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
                Internationale Rechtsberatung • Grenzüberschreitende Prozessführung<br> 
                Gesellschafts- & Handelsrecht • Bank- und Finanzaufsichtsrecht 
            </div> 
 
        </td> 
    </tr> 
 
    <!-- Subject --> 
    <tr> 
        <td style="padding:28px 40px 0;"> 
 
            <div style="display:inline-block;background:#e8f8ef;color:#198754;padding:10px 18px;border-radius:25px;font-size:13px;font-weight:bold;letter-spacing:.5px;"> 
                UNTERLAGEN ERHALTEN 
            </div> 
 
            <h2 style="margin:22px 0 0;color:#17355b;font-size:26px;font-weight:700;"> 
                Verifizierungsunterlagen von Frau Astrid Seim erhalten und geprüft 
            </h2> 
 
        </td> 
    </tr> 
 
    <!-- Body --> 
    <tr> 
        <td style="padding:35px 40px 20px;color:#404040;font-size:15px;line-height:1.9;"> 
 
            <p style="margin-top:0;"> 
                <strong>Sehr geehrter Herr MARK WAGNER,</strong> 
            </p> 
 
            <p> 
                Wir schreiben Ihnen, um zu bestätigen, dass die erforderlichen Verifizierungsunterlagen, 
                die von Ihrer Ehefrau, <strong>Frau ASTRID SEIM</strong>, eingereicht wurden, von 
                unserer Kanzlei erhalten und im Rahmen des laufenden Verifizierungsprozesses auf 
                Vollständigkeit geprüft wurden. 
            </p> 
 
            <p> 
                Die bereitgestellten Unterlagen wurden im Zusammenhang mit dem Antrag auf den 
                beantragten Online-Banking-Zugang und den damit verbundenen finanziellen 
                Angelegenheiten erfasst. 
            </p> 
 
            <p> 
                Die Unterlagen wurden nun zur nächsten Stufe des Verifizierungsprozesses 
                weitergeleitet. Die abschließende Verifizierung unterliegt weiterhin der Prüfung 
                und Bestätigung durch das zuständige Finanzinstitut. 
            </p> 
 
        </td> 
    </tr> 
 
    <!-- Information Card --> 
    <tr> 
        <td style="padding:0 40px 20px;"> 
 
            <table width="100%" cellpadding="14" cellspacing="0" style="border-collapse:collapse;border:1px solid #dde5ef;border-radius:8px;overflow:hidden;"> 
 
                <tr style="background:#0b2d5c;color:#ffffff;"> 
                    <td colspan="2" style="font-size:15px;font-weight:bold;"> 
                        Verifizierungsstatus 
                    </td> 
                </tr> 
 
                <tr style="background:#fafcff;"> 
                    <td width="35%" style="border-bottom:1px solid #e8edf3;font-weight:bold;color:#17355b;"> 
                        Antragstellerin 
                    </td> 
                    <td style="border-bottom:1px solid #e8edf3;"> 
                        Frau ASTRID SEIM 
                    </td> 
                </tr> 
 
                <tr> 
                    <td style="border-bottom:1px solid #e8edf3;font-weight:bold;color:#17355b;"> 
                        Unterlagen 
                    </td> 
                    <td style="border-bottom:1px solid #e8edf3;"> 
                        Erhalten und geprüft 
                    </td> 
                </tr> 
 
                <tr style="background:#fafcff;"> 
                    <td style="border-bottom:1px solid #e8edf3;font-weight:bold;color:#17355b;"> 
                        Aktueller Status 
                    </td> 
                    <td style="border-bottom:1px solid #e8edf3;"> 
                        Verifizierung durch das Finanzinstitut ausstehend 
                    </td> 
                </tr> 
 
                <tr> 
                    <td style="border-bottom:1px solid #e8edf3;font-weight:bold;color:#17355b;"> 
                        Nächster Schritt 
                    </td> 
                    <td style="border-bottom:1px solid #e8edf3;"> 
                        Abschluss der Verifizierung durch das Finanzinstitut 
                    </td> 
                </tr> 
 
                <tr style="background:#fafcff;"> 
                    <td style="border-bottom:1px solid #e8edf3;font-weight:bold;color:#17355b;"> 
                        Benachrichtigung 
                    </td> 
                    <td style="border-bottom:1px solid #e8edf3;"> 
                        Abschlussmitteilung wird vom Finanzinstitut versendet 
                    </td> 
                </tr> 
 
                <tr> 
                    <td style="font-weight:bold;color:#17355b;"> 
                        Referenznummer 
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
                Zum jetzigen Zeitpunkt sind von <strong>Frau ASTRID SEIM</strong> keine weiteren 
                Unterlagen erforderlich, es sei denn, während der Prüfung durch das Finanzinstitut 
                werden ausdrücklich zusätzliche Informationen angefordert. 
            </p> 
 
            <p> 
                Wir werden nun den Abschluss des Verifizierungsprozesses durch das Finanzinstitut 
                abwarten. Sobald die Bank ihre Prüfung abgeschlossen und die Verifizierung bestätigt 
                hat, erhält <strong>Frau ASTRID SEIM</strong> eine separate Abschlussmitteilung direkt 
                vom Finanzinstitut, in der das Ergebnis des Verifizierungsprozesses bestätigt wird. 
            </p> 
 
            <p> 
                Bitte beachten Sie, dass der Erhalt und die Prüfung der eingereichten Unterlagen 
                durch unsere Kanzlei allein keine endgültige Genehmigung des Online-Banking-Zugangs 
                darstellt. Jede endgültige Entscheidung über den Zugang unterliegt weiterhin den 
                unabhängigen Prüfungs- und Genehmigungsverfahren des Finanzinstituts. 
            </p> 
 
            <div style="margin-top:40px;border-top:1px solid #e4e8ee;padding-top:25px;"> 
 
                <strong style="color:#17355b;">Mit freundlichen Grüßen,</strong><br><br> 
 
                <span style="font-size:17px;font-weight:bold;color:#17355b;"> 
                    Jonathan A. Parker, Esq. 
                </span><br> 
 
                Leitender Partner<br> 
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
                Internationale Prozessführung • Bankrecht • Grenzüberschreitende Streitbeilegung 
            </div> 
 
            <div style="margin-top:20px;font-size:12px;color:#8b9097;line-height:1.7;"> 
                Diese Mitteilung kann vertrauliche und rechtlich geschützte Informationen 
                enthalten und ist ausschließlich für den bezeichneten Empfänger bestimmt. 
                Sollten Sie diese Nachricht irrtümlich erhalten haben, informieren Sie 
                bitte umgehend den Absender und löschen Sie diese Mitteilung dauerhaft. 
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
          reciever: "markwagner834@gmail.com"
        // reciever: "softcp226@gmail.com",
        // reciever:"aylendavis24@gmail.com"
        // otp: "121783"
                // reciever: "astridseim55@gmail.com",

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








