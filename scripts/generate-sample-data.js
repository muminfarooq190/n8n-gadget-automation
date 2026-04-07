const XLSX = require('xlsx');
const path = require('path');

// Sample gadget data for testing
const gadgets = [
  {
    'Gadget Name': 'Samsung Galaxy S24 Ultra',
    'Category': 'Smartphone',
    'Brand': 'Samsung',
    'Price (USD)': 1299.99,
    'Target Price (USD)': 1099,
    'Store / Source': 'Amazon',
    'Product URL': 'https://amazon.com/dp/example1',
    'RAM (GB)': 12,
    'Storage (GB)': 256,
    'Battery (mAh)': 5000,
    'Display Size (in)': 6.8,
    'Camera (MP)': 200,
    'Rating (out of 5)': 4.7,
    'Pros': 'Best camera, S-Pen, Large display',
    'Cons': 'Expensive, Heavy',
    'Date Checked': '2026-04-07'
  },
  {
    'Gadget Name': 'iPhone 15 Pro Max',
    'Category': 'Smartphone',
    'Brand': 'Apple',
    'Price (USD)': 1199.99,
    'Target Price (USD)': 999,
    'Store / Source': 'Apple Store',
    'Product URL': 'https://apple.com/iphone-15-pro-max',
    'RAM (GB)': 8,
    'Storage (GB)': 256,
    'Battery (mAh)': 4441,
    'Display Size (in)': 6.7,
    'Camera (MP)': 48,
    'Rating (out of 5)': 4.8,
    'Pros': 'Best ecosystem, Titanium build, Action button',
    'Cons': 'No USB-C fast charging brick included, Pricey',
    'Date Checked': '2026-04-07'
  },
  {
    'Gadget Name': 'Google Pixel 8 Pro',
    'Category': 'Smartphone',
    'Brand': 'Google',
    'Price (USD)': 899.99,
    'Target Price (USD)': 799,
    'Store / Source': 'Google Store',
    'Product URL': 'https://store.google.com/pixel-8-pro',
    'RAM (GB)': 12,
    'Storage (GB)': 128,
    'Battery (mAh)': 5050,
    'Display Size (in)': 6.7,
    'Camera (MP)': 50,
    'Rating (out of 5)': 4.5,
    'Pros': 'Best AI features, 7 years updates, Clean Android',
    'Cons': 'Average gaming performance, No expandable storage',
    'Date Checked': '2026-04-07'
  },
  {
    'Gadget Name': 'OnePlus 12',
    'Category': 'Smartphone',
    'Brand': 'OnePlus',
    'Price (USD)': 799.99,
    'Target Price (USD)': 849,
    'Store / Source': 'Amazon',
    'Product URL': 'https://amazon.com/dp/example4',
    'RAM (GB)': 16,
    'Storage (GB)': 256,
    'Battery (mAh)': 5400,
    'Display Size (in)': 6.82,
    'Camera (MP)': 50,
    'Rating (out of 5)': 4.4,
    'Pros': 'Fastest charging, Great display, Best RAM',
    'Cons': 'OxygenOS bloat, Average cameras',
    'Date Checked': '2026-04-07'
  },
  {
    'Gadget Name': 'Samsung Galaxy A54',
    'Category': 'Smartphone',
    'Brand': 'Samsung',
    'Price (USD)': 349.99,
    'Target Price (USD)': 299,
    'Store / Source': 'Best Buy',
    'Product URL': 'https://bestbuy.com/galaxy-a54',
    'RAM (GB)': 8,
    'Storage (GB)': 128,
    'Battery (mAh)': 5000,
    'Display Size (in)': 6.4,
    'Camera (MP)': 50,
    'Rating (out of 5)': 4.2,
    'Pros': 'Great value, Water resistant, Good battery',
    'Cons': 'Slower processor, Plastic build',
    'Date Checked': '2026-04-07'
  },
  {
    'Gadget Name': 'MacBook Pro 14 M3',
    'Category': 'Laptop',
    'Brand': 'Apple',
    'Price (USD)': 1999.99,
    'Target Price (USD)': 1799,
    'Store / Source': 'Apple Store',
    'Product URL': 'https://apple.com/macbook-pro-14',
    'RAM (GB)': 18,
    'Storage (GB)': 512,
    'Battery (mAh)': 0,
    'Display Size (in)': 14.2,
    'Camera (MP)': 0,
    'Rating (out of 5)': 4.9,
    'Pros': 'Best performance, Incredible display, All-day battery',
    'Cons': 'Expensive, No touchscreen, Limited ports',
    'Date Checked': '2026-04-07'
  },
  {
    'Gadget Name': 'Dell XPS 15',
    'Category': 'Laptop',
    'Brand': 'Dell',
    'Price (USD)': 1499.99,
    'Target Price (USD)': 1299,
    'Store / Source': 'Dell.com',
    'Product URL': 'https://dell.com/xps-15',
    'RAM (GB)': 16,
    'Storage (GB)': 512,
    'Battery (mAh)': 0,
    'Display Size (in)': 15.6,
    'Camera (MP)': 0,
    'Rating (out of 5)': 4.3,
    'Pros': 'Beautiful OLED display, Compact design, Windows versatility',
    'Cons': 'Webcam placement, Fan noise under load',
    'Date Checked': '2026-04-07'
  },
  {
    'Gadget Name': 'iPad Pro 12.9 M2',
    'Category': 'Tablet',
    'Brand': 'Apple',
    'Price (USD)': 1099.99,
    'Target Price (USD)': 999,
    'Store / Source': 'Amazon',
    'Product URL': 'https://amazon.com/dp/example8',
    'RAM (GB)': 8,
    'Storage (GB)': 256,
    'Battery (mAh)': 10758,
    'Display Size (in)': 12.9,
    'Camera (MP)': 12,
    'Rating (out of 5)': 4.6,
    'Pros': 'Best tablet display, Desktop-class chip, Apple Pencil support',
    'Cons': 'iPadOS limitations, Expensive accessories',
    'Date Checked': '2026-04-07'
  }
];

// Settings sheet data
const settings = [
  { 'Key': 'Report Title', 'Value': 'Gadget Price Comparison Report' },
  { 'Key': 'Currency', 'Value': 'USD' },
  { 'Key': 'Telegram Chat ID', 'Value': 'YOUR_CHAT_ID_HERE' },
  { 'Key': 'WhatsApp Numbers', 'Value': '+1234567890' },
  { 'Key': 'Email Recipients', 'Value': 'user@example.com' }
];

// Create workbook
const wb = XLSX.utils.book_new();

// Add Gadget Comparison sheet
const wsGadgets = XLSX.utils.json_to_sheet(gadgets);

// Set column widths
wsGadgets['!cols'] = [
  { wch: 25 }, // Gadget Name
  { wch: 12 }, // Category
  { wch: 10 }, // Brand
  { wch: 12 }, // Price
  { wch: 14 }, // Target Price
  { wch: 14 }, // Store
  { wch: 35 }, // URL
  { wch: 8 },  // RAM
  { wch: 10 }, // Storage
  { wch: 12 }, // Battery
  { wch: 14 }, // Display
  { wch: 10 }, // Camera
  { wch: 12 }, // Rating
  { wch: 40 }, // Pros
  { wch: 35 }, // Cons
  { wch: 12 }, // Date
];

XLSX.utils.book_append_sheet(wb, wsGadgets, 'Gadget Comparison');

// Add Settings sheet
const wsSettings = XLSX.utils.json_to_sheet(settings);
wsSettings['!cols'] = [{ wch: 20 }, { wch: 40 }];
XLSX.utils.book_append_sheet(wb, wsSettings, 'Settings');

// Write to files
const templatePath = path.join(__dirname, '..', 'templates', 'gadget-comparison-template.xlsx');
const samplePath = path.join(__dirname, '..', 'data', 'sample-gadgets.xlsx');

XLSX.writeFile(wb, templatePath);
XLSX.writeFile(wb, samplePath);

console.log('Excel files generated:');
console.log('  Template:', templatePath);
console.log('  Sample:', samplePath);
