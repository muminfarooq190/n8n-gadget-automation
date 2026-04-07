# n8n Gadget Price Comparison Automation

Automated workflow that reads a gadget comparison Excel sheet, generates a professional PDF report with charts and badges, and delivers it via Telegram, WhatsApp, and Email.

## Features

- **Excel Input**: Compare gadgets across price, specs (RAM, storage, battery, camera), ratings, and stores
- **Weighted Scoring**: Ranks gadgets using a weighted algorithm (rating 35%, price 30%, specs 20%, battery 15%)
- **Winner Badges**: Best Overall, Best Value, Best Camera, Best Battery, Budget Pick
- **SVG Charts**: Horizontal bar chart (price comparison) and radar chart (top 5 specs)
- **Price Alerts**: Notifies when a gadget drops below your target price
- **Historical Tracking**: Tracks price changes over time with trend arrows
- **Category Grouping**: Separate analysis for Smartphones, Laptops, Tablets, etc.
- **Multi-Channel Delivery**: Telegram + WhatsApp + Email (all in parallel)
- **Error Handling**: Auto-alerts on workflow failure via Telegram

## Quick Start

### 1. Prerequisites

- [n8n](https://n8n.io/) installed (self-hosted or cloud)
- Node.js 18+ (for generating sample data)
- API keys for: Telegram Bot, Twilio (WhatsApp), html2pdf.app, Gmail (optional)

### 2. Setup

```bash
# Clone the repo
git clone https://github.com/muminfarooq190/n8n-gadget-automation.git
cd n8n-gadget-automation

# Install dependencies (for sample data generation only)
npm install

# Generate sample Excel file
node scripts/generate-sample-data.js
```

### 3. Import Workflow

1. Open your n8n instance
2. Go to **Workflows** > **Import from File**
3. Select `workflows/gadget-price-comparison.json`
4. Configure credentials (see `docs/setup-guide.md`)

### 4. Configure Credentials

See the detailed guides:
- [Overall Setup Guide](docs/setup-guide.md)
- [Telegram Bot Setup](docs/telegram-bot-setup.md)
- [WhatsApp Setup](docs/whatsapp-setup.md)
- [Credentials Reference](config/credentials-setup.md)

### 5. Run

- **Manual**: Click "Execute Workflow" in n8n
- **Scheduled**: Runs every Monday at 9 AM (configurable)
- **File Trigger**: Drop an `.xlsx` file in the watch folder

## Excel Template

The input Excel file has two sheets:

### Sheet: "Gadget Comparison"

| Column | Description |
|--------|-------------|
| Gadget Name | Product name (required) |
| Category | Smartphone / Laptop / Tablet / Wearable / Audio |
| Brand | Manufacturer |
| Price (USD) | Current price (required) |
| Target Price (USD) | Alert threshold |
| Store / Source | Amazon, Best Buy, etc. |
| Product URL | Direct link |
| RAM (GB) | Memory |
| Storage (GB) | Storage capacity |
| Battery (mAh) | Battery capacity |
| Display Size (in) | Screen size |
| Camera (MP) | Main camera |
| Rating (out of 5) | User rating |
| Pros | Comma-separated |
| Cons | Comma-separated |
| Date Checked | When price was verified |

### Sheet: "Settings"

| Key | Description |
|-----|-------------|
| Report Title | Custom title for the PDF |
| Currency | USD, EUR, GBP, etc. |
| Telegram Chat ID | Where to send Telegram messages |
| WhatsApp Numbers | Comma-separated recipient numbers |
| Email Recipients | Comma-separated email addresses |

## Project Structure

```
n8n-gadget-automation/
├── workflows/
│   └── gadget-price-comparison.json   # Main n8n workflow
├── templates/
│   └── pdf-report.html                # HTML template for PDF
├── scripts/
│   └── generate-sample-data.js        # Generates sample Excel
├── data/
│   └── sample-gadgets.xlsx            # Sample data for testing
├── docs/
│   ├── setup-guide.md
│   ├── telegram-bot-setup.md
│   └── whatsapp-setup.md
├── config/
│   └── credentials-setup.md
├── .gitignore
├── package.json
└── README.md
```

## License

MIT
