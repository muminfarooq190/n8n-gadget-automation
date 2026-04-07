# WhatsApp Setup (Twilio)

## Step 1: Create a Twilio Account

1. Sign up at [twilio.com](https://www.twilio.com/) (free trial gives $15 credit)
2. Verify your phone number

## Step 2: Set Up WhatsApp Sandbox

1. Go to **Console** > **Messaging** > **Try it out** > **Send a WhatsApp message**
2. Twilio will show you a sandbox number and a join code
3. From your phone, send the join code (e.g., `join example-sandbox`) to the Twilio sandbox number via WhatsApp
4. You should receive a confirmation message

**Important**: Each recipient must independently join the sandbox by sending the join code.

## Step 3: Get Your Credentials

1. Go to **Console** > **Account** > **API keys & tokens**
2. Note your:
   - **Account SID** (starts with `AC`)
   - **Auth Token**

## Step 4: Configure in n8n

1. Go to **Settings** > **Credentials** > **Add Credential**
2. Search for **HTTP Basic Auth**
3. Set:
   - Username: Your Account SID
   - Password: Your Auth Token
4. Save

Then in the workflow:
1. Open the **Send via WhatsApp (Twilio)** node
2. Replace `YOUR_ACCOUNT_SID` in the URL
3. Replace `YOUR_RECIPIENT_NUMBER` with the recipient's phone (e.g., `+1234567890`)
4. Replace `YOUR_TWILIO_NUMBER` with your Twilio sandbox number
5. Select your HTTP Basic Auth credential

## Step 5: Sending PDFs

To send the PDF via WhatsApp, the PDF must be hosted at a publicly accessible URL. Options:

1. **Upload to cloud storage** (S3, R2, GCS) before sending, use the public URL as `MediaUrl`
2. **Use n8n's webhook** to temporarily serve the file
3. **Use a file hosting service** like file.io for temporary file hosting

Add a `MediaUrl` parameter to the Twilio request body with the public PDF URL.

## Moving to Production

For production use, consider the **Meta WhatsApp Business Cloud API**:
1. Create a Meta Business account
2. Set up a WhatsApp Business app on developers.facebook.com
3. Create message templates (required for business-initiated messages)
4. This gives you 1,000 free conversations/month
