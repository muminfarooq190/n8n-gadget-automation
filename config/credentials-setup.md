# Credentials Reference

All API keys and credentials needed for the workflow.

## Required

### html2pdf.app API Key

1. Go to [html2pdf.app](https://html2pdf.app/)
2. Sign up for a free account
3. Get your API key from the dashboard
4. **Free tier**: 100 PDF conversions per month
5. In the workflow, replace `YOUR_HTML2PDF_API_KEY` in the **Convert HTML to PDF** node

**Alternative (self-hosted)**: Use [Gotenberg](https://gotenberg.dev/) with Docker:
```bash
docker run --rm -p 3000:3000 gotenberg/gotenberg:8
```
Then change the HTTP Request URL to `http://localhost:3000/forms/chromium/convert/html`

## Optional

### Telegram Bot Token

- See [telegram-bot-setup.md](../docs/telegram-bot-setup.md)
- **Free**: Unlimited messages

### Twilio (WhatsApp)

- See [whatsapp-setup.md](../docs/whatsapp-setup.md)
- **Free trial**: $15 credit
- Cost per message: ~$0.005 (sandbox is free)

### Gmail SMTP (Email)

1. Go to [Google Account](https://myaccount.google.com/) > **Security**
2. Enable **2-Step Verification** if not already enabled
3. Go to **Security** > **App Passwords**
4. Select **Mail** and your device
5. Generate and copy the 16-character app password
6. In n8n: Add SMTP credential with:
   - Host: `smtp.gmail.com`
   - Port: `465`
   - SSL: `true`
   - User: your Gmail address
   - Password: the 16-character app password

### AWS S3 (for WhatsApp PDF hosting)

Only needed if sending PDFs via WhatsApp:
1. Create an S3 bucket
2. Create an IAM user with S3 write access
3. Generate Access Key + Secret Key
4. In n8n: Add AWS credential with the access key and secret

## Environment Variables (Optional)

You can also configure credentials via environment variables in your n8n instance:

```env
HTML2PDF_API_KEY=your_key_here
TELEGRAM_BOT_TOKEN=your_token_here
TWILIO_ACCOUNT_SID=your_sid_here
TWILIO_AUTH_TOKEN=your_auth_token_here
```
