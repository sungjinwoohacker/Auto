// Configuration file for Base Chain RPC endpoints, DEX addresses, token configurations, and API keys for Telegram bots

const config = {
    rpcEndpoints: {
        mainnet: 'https://mainnet.example.com',
        testnet: 'https://testnet.example.com',
    },
    dexAddresses: {
        mainnet: '0x1234567890abcdef1234567890abcdef12345678',
        testnet: '0xabcdefabcdefabcdefabcdefabcdefabcdefabcdef',
    },
    tokenConfigurations: {
        tokenA: {
            address: '0xabcdefabcdefabcdefabcdefabcdefabcdefabcdef',
            symbol: 'TOKENA',
            decimals: 18,
        },
        tokenB: {
            address: '0x1234567890abcdef1234567890abcdef12345679',
            symbol: 'TOKENB',
            decimals: 18,
        },
    },
    telegram: {
        botApiKey: 'YOUR_TELEGRAM_BOT_API_KEY',
    },
};

// Export the configuration
module.exports = config;
