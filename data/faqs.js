export const faqs = [
    {
        question: "Is Cashiro really free?",
        answer: "Yes, Cashiro is 100% free and open-source. There are no hidden fees, subscriptions, or premium features. The project is maintained by the community and is licensed under GPL-3.0."
    },
    {
        question: "How does Cashiro read my bank SMS?",
        answer: "Cashiro requests a one-time read-only permission for your SMS. It uses secure regex patterns to identify transaction-related messages from bank headers. Only Bank SMS are processed; your personal messages are never accessed, read, or stored. It does NOT send any data to any server."
    },
    {
        question: "Is my financial data safe?",
        answer: "Absolutely. Cashiro is built with a 'Privacy First' philosophy. All parsing, categorization, and analysis happen locally on your Android device. We do not have servers to store your data, and we do not use any third-party analytics."
    },
    {
        question: "Which banks are supported?",
        answer: "Currently, Cashiro supports over 47 banks across 10 countries, including high support for major Indian banks (HDFC, SBI, ICICI, etc.), US banks (Citi, Discover), and others in UAE, Saudi Arabia, Nepal, and Kenya. You can request support for your bank via our GitHub issues."
    },
    {
        question: "Can I export my data?",
        answer: "Yes, you can export your entire transaction history to a CSV file at any time. This is useful for manual backups, tax filing, or deep analysis in spreadsheet software."
    },
    {
        question: "Does it support PDF statements?",
        answer: "Yes! Cashiro can parse PDF statements from popular apps like GPay and PhonePe to help you backfill your transaction history or catch up on entries not received via SMS."
    }
];
