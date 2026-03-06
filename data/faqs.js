export const faqs = [
    {
        section: "Privacy & Data",
        items: [
            {
                question: "Is Cashiro really free?",
                answer: "Yes, Cashiro is 100% free and open-source. There are no hidden fees, subscriptions, or premium features. The project is maintained by the community and is licensed under GPL-3.0."
            },
            {
                question: "Is my financial data secure?",
                answer: "Absolutely. Cashiro is built with a 'Privacy First' philosophy. All parsing, categorization, and analysis happen locally on your Android device. We do not have servers to store your data, and we do not use any third-party analytics. The AI model runs locally for complete privacy."
            },
            {
                question: "Can I backup my data?",
                answer: "Yes User can backup or export there data in zip which later can be imported within the app. To backup head over the Data Privacy section in settings and under the Export option select the settings you want to save and then export."
            },
            {
                question: "What data does the app access?",
                answer: "Only SMS messages from known bank senders. We don't read personal messages or access other app data."
            }
        ]
    },
    {
        section: "Transaction",
        items: [
            {
                question: "Why are wallet transactions marked as Credit?",
                answer: "Wallet transactions (Amazon Pay, Paytm, etc.) are marked as Credit because they're charged to your bank account or credit card first, not direct bank debits. This helps track the actual payment method used."
            },
            {
                question: "What's the difference between the 5 transaction types?",
                answer: "• Expense: Money going out of your account (debits, purchases, bill payments)\n• Income: Money coming into your account (salary, refunds, cashback)\n• Investment: Mutual funds, stocks, SIPs, trading accounts\n• Credit: Credit card transactions and wallet payments (money you'll pay later)\n• Transfer: Money moved between your own accounts (self-transfers)"
            },
            {
                question: "When should I use Transfer vs Expense?",
                answer: "Use Transfer when moving money between your own accounts (e.g., savings to checking). These don't affect your net worth. Use Expense for actual spending."
            },
            {
                question: "Can I export my Transactional data in CSV format?",
                answer: "Yes, you can export your entire transaction history to a CSV file at any time. This is useful for manual backups, tax filing, or deep analysis in spreadsheet software."
            }
        ]
    },
    {
        section: "SMS & PDF Parsing",
        items: [
            {
                question: "How does Cashiro read my bank SMS?",
                answer: "Cashiro requests a one-time read-only permission for your SMS. It uses secure regex patterns to identify transaction-related messages from bank headers. Only Bank SMS are processed; your personal messages are never accessed, read, or stored. It does NOT send any data to any server."
            },
            {
                question: "Which banks are supported?",
                answer: "Currently, Cashiro supports over 47 banks across 10 countries, including high support for major Indian banks (HDFC, SBI, ICICI, etc.), US banks (Citi, Discover), and others in UAE, Saudi Arabia, Nepal, and Kenya. For more info check Github, You can request support for your bank via our GitHub issues."
            },
            {
                question: "Why aren't my bank SMS being detected?",
                answer: "Check if your bank is supported in our list. If not, report it via GitHub. Ensure SMS permissions are granted and the sender format matches standard bank SMS patterns."
            },
            {
                question: "What happens to unrecognized SMS?",
                answer: "They're saved in 'Unrecognized Messages' where you can manually review them or report them to help us improve parsing."
            },
            {
                question: "Why are some transactions duplicated?",
                answer: "Some banks send multiple SMS for the same transaction. The app tries to detect duplicates, but you can manually delete any that slip through."
            },
            {
                question: "Does it support PDF statements?",
                answer: "Currently, This is a Beta feature and only supported for (GPay and PhonePe PDF statements) which are UPI statements mostly used in India. In Future we'll provide support for more banks as it will user to backfill their transaction history or catch up on entries that are not received via SMS."
            }
        ]
    },
    {
        section: "AI Features",
        items: [
            {
                question: "Why do I need to download the AI model?",
                answer: "This is an optional feature, but to use AI features like chat to get insights about your expenses, income, credits and investments you can download 1.5GB QWEN model that enables on-device chat without sending data to any server, ensuring complete privacy."
            },
            {
                question: "What can I ask the AI assistant?",
                answer: "You can ask about spending patterns, budget advice, transaction summaries, and general financial questions based on your data."
            }
        ]
    },
    {
        section: "Account Management",
        items: [
            {
                question: "What are manual accounts?",
                answer: "Manual accounts let you track cash, investments, or accounts from unsupported banks. You update balances manually."
            },
            {
                question: "How do I track multiple accounts from the same bank?",
                answer: "The app automatically detects different accounts based on the last 4 digits shown in SMS."
            }
        ]
    }
];
