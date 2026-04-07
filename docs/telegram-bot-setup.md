# Telegram Bot Setup

## Step 1: Create a Bot

1. Open Telegram and search for **@BotFather**
2. Send `/newbot`
3. Choose a name: e.g., `Gadget Price Tracker`
4. Choose a username: e.g., `gadget_price_tracker_bot`
5. BotFather will respond with your **HTTP API Token**
   - Format: `123456789:ABCdefGHIjklMNOpqrSTUvwxYZ`
   - **Save this token securely**

## Step 2: Get Your Chat ID

### Option A: Direct Message
1. Open a chat with your new bot in Telegram
2. Send any message (e.g., "hello")
3. Open this URL in your browser (replace TOKEN with your bot token):
   ```
   https://api.telegram.org/bot<TOKEN>/getUpdates
   ```
4. Find `"chat":{"id":YOUR_CHAT_ID}` in the JSON response
5. Your chat ID is the number (e.g., `123456789`)

### Option B: Group Chat
1. Create a Telegram group
2. Add your bot to the group
3. Send a message in the group
4. Use the `getUpdates` URL above
5. The group chat ID will be a negative number (e.g., `-987654321`)

## Step 3: Configure in n8n

1. Go to **Settings** > **Credentials** > **Add Credential**
2. Search for **Telegram API**
3. Paste your bot token
4. Save

Then in the workflow:
1. Open the **Send via Telegram** node
2. Select your Telegram credential
3. Replace `YOUR_CHAT_ID` with your actual chat ID
4. Do the same for **Telegram Price Alert** and **Error Alert** nodes

## Testing

Run the workflow manually and check if the bot sends you the PDF document in Telegram.
