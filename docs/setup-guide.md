# Setup Guide

## Prerequisites

- **n8n** installed (self-hosted or n8n Cloud)
- **Node.js 18+** (only for generating sample Excel data)
- API keys for the services you want to use

## Step 1: Generate Sample Data

```bash
npm install
node scripts/generate-sample-data.js
```

This creates:
- `templates/gadget-comparison-template.xlsx` -- blank template
- `data/sample-gadgets.xlsx` -- pre-filled with 8 sample gadgets

## Step 2: Import Workflow into n8n

1. Open your n8n instance
2. Go to **Workflows** > **Import from File**
3. Select `workflows/gadget-price-comparison.json`
4. The workflow will appear with all nodes connected

## Step 3: Configure Credentials

You need to set up credentials for the following services. See the individual guides for detailed instructions:

| Service | Guide | Required? |
|---------|-------|-----------|
| Telegram Bot | [telegram-bot-setup.md](telegram-bot-setup.md) | Recommended |
| WhatsApp (Twilio) | [whatsapp-setup.md](whatsapp-setup.md) | Optional |
| html2pdf.app | [credentials-setup.md](../config/credentials-setup.md) | Required |
| Gmail SMTP | [credentials-setup.md](../config/credentials-setup.md) | Optional |

## Step 4: Configure the Workflow

After importing, update these nodes with your credentials:

1. **Read Excel File** -- Set the file path to your Excel file location
2. **Convert HTML to PDF** -- Replace `YOUR_HTML2PDF_API_KEY` with your API key
3. **Send via Telegram** -- Set your Telegram credential and chat ID
4. **Send via WhatsApp** -- Set your Twilio credentials and phone numbers
5. **Send via Email** -- Set your SMTP credentials and email addresses

## Step 5: Test

1. Place your Excel file at the configured path
2. Click **Execute Workflow** (manual trigger)
3. Check each node's output to verify data flows correctly
4. Verify you receive the PDF on your configured channels

## Step 6: Enable Schedule (Optional)

The workflow includes a schedule trigger set to run every Monday at 9 AM. To enable it:

1. Click on the **Weekly Schedule** node
2. Adjust the cron expression if needed
3. Activate the workflow (toggle in the top-right)

## Troubleshooting

- **Excel parse error**: Ensure the sheet is named "Gadget Comparison" and has the correct column headers
- **PDF conversion fails**: Check your html2pdf.app API key and ensure you haven't exceeded the free tier limit (100/month)
- **Telegram not sending**: Verify the bot token and chat ID. Send a message to the bot first, then check `getUpdates`
- **WhatsApp not sending**: Ensure the recipient has joined the Twilio sandbox
