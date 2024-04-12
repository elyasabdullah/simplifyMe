const User = require('../model/Users')
const postmark = require('postmark');

function generateOTP() {
  const digits = '0123456789';
  let OTP = '';
  for (let i = 0; i < 4; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
}

const client = new postmark.ServerClient(process.env.POSTMARK_SERVER_TOKEN);

async function sendOTP(req, res) {
  try {
    const { email } = req.body;

    const OTP = generateOTP();

    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    user.emailVerification.otp = OTP;
    user.emailVerification.expiresAt = Date.now() + 120000;
    await user.save();

    const noReplyAddress = process.env.NO_REPLY_EMAIL_ADDRESS;

    const mailOptions = {
      from: `No Reply <${noReplyAddress}>`, 
      to: email,
      subject: 'OTP Verification code from simplifyMe application',
      TextBody: `Your OTP: ${OTP}`, 
      HtmlBody: `<p>Your OTP: <strong>${OTP}</strong></p>` 
    };

    await client.sendEmail(mailOptions);

    res.status(200).json({ message: 'OTP sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while sending OTP.' });
  }
}

async function verifyOTP(req, res) {
  try {
    const { email, otp } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    if (
      user.emailVerification.otp === otp &&
      user.emailVerification.expiresAt > Date.now()
    ) {
      user.emailVerification.verified = true;
      await user.save();
      return res.status(200).json({ message: 'Email verified successfully!' });
    } else {
      return res.status(400).json({ error: 'Invalid OTP.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while verifying email.' });
  }
}

module.exports = {sendOTP, verifyOTP}
