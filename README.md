# Bitcoin Address Validator

A simple, secure web application for validating Bitcoin addresses. This tool helps users verify whether a Bitcoin address is properly formatted and valid according to Bitcoin network standards.

## 🚀 Features

- **Multi-format Support**: Validates all major Bitcoin address formats
  - Legacy addresses (P2PKH) - Starting with `1`
  - Legacy script addresses (P2SH) - Starting with `3`
  - SegWit addresses (Bech32) - Starting with `bc1q`
  - Taproot addresses (Bech32m) - Starting with `bc1p`
- **Real-time Validation**: Instant feedback as you type
- **Address Type Detection**: Identifies the specific type of Bitcoin address
- **Clean Interface**: Simple, user-friendly design
- **No Data Storage**: Addresses are validated client-side only

## 🔧 How to Use

1. Visit the application
2. Enter or paste a Bitcoin address in the input field
3. The validator will instantly show:
   - ✅ Valid address with type identification
   - ❌ Invalid address with error explanation
   - ℹ️ Information about supported address formats

## 📋 Supported Address Types

| Type | Format | Example | Description |
|------|--------|---------|-------------|
| P2PKH | Starts with `1` | `1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa` | Legacy Pay-to-Public-Key-Hash |
| P2SH | Starts with `3` | `3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy` | Legacy Pay-to-Script-Hash |
| Bech32 | Starts with `bc1q` | `bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t4` | SegWit v0 |
| Bech32m | Starts with `bc1p` | `bc1p5d7rjq7g6rdk2yhzks9smlaqtedr4dekq08ge8ztwac72sfr9rusxg3297` | Taproot |

## ⚠️ Important Disclaimers

### Security Notice
- **Client-Side Only**: All validation happens in your browser - no addresses are sent to servers
- **Validation ≠ Ownership**: This tool only checks if an address format is valid, not if you own it
- **No Financial Advice**: This tool is for educational and validation purposes only

### Usage Warnings
- **Double-Check Everything**: Always verify addresses through multiple sources before sending funds
- **Test with Small Amounts**: When using new addresses, test with small amounts first
- **No Liability**: The developers are not responsible for any financial losses
- **Not a Wallet**: This tool cannot generate, store, or manage Bitcoin addresses

### Technical Limitations
- **Format Validation Only**: Checks mathematical validity, not network existence
- **Mainnet Only**: Designed for Bitcoin mainnet addresses
- **No Balance Checking**: Does not verify address balances or transaction history

## 🛠️ Development

This is a Next.js application built with:
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **shadcn/ui** for UI components

### Getting Started

\`\`\`bash
# Clone the repository
git clone https://github.com/your-username/bitcoin-address-validator.git

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
\`\`\`

### Project Structure

\`\`\`
├── app/
│   ├── page.tsx          # Main validator page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   └── ui/              # shadcn/ui components
└── lib/
    └── utils.ts         # Utility functions
\`\`\`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- **Live Demo**: [Deployed Application](https://your-app-url.vercel.app)
- **Built with**: [v0.app](https://v0.app) - AI-powered development platform

---

**⚡ Built with v0.app** - The future of web development
