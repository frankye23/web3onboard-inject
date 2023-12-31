/**
 * The `ProviderIdentityFlag` is a property on an injected provider
 * that uniquely identifies that provider
 */
export var ProviderIdentityFlag;
(function (ProviderIdentityFlag) {
    ProviderIdentityFlag["AlphaWallet"] = "isAlphaWallet";
    ProviderIdentityFlag["ApexWallet"] = "isApexWallet";
    ProviderIdentityFlag["AToken"] = "isAToken";
    ProviderIdentityFlag["BifrostWallet"] = "isBifrost";
    ProviderIdentityFlag["Binance"] = "bbcSignTx";
    ProviderIdentityFlag["Bitpie"] = "isBitpie";
    ProviderIdentityFlag["BlockWallet"] = "isBlockWallet";
    ProviderIdentityFlag["Coinbase"] = "isToshi";
    ProviderIdentityFlag["CoinbaseExtension"] = "isCoinbaseWallet";
    ProviderIdentityFlag["Detected"] = "request";
    ProviderIdentityFlag["Dcent"] = "isDcentWallet";
    ProviderIdentityFlag["Exodus"] = "isExodus";
    ProviderIdentityFlag["Frontier"] = "isFrontier";
    ProviderIdentityFlag["Frame"] = "isFrame";
    ProviderIdentityFlag["HuobiWallet"] = "isHbWallet";
    ProviderIdentityFlag["HyperPay"] = "isHyperPay";
    ProviderIdentityFlag["ImToken"] = "isImToken";
    ProviderIdentityFlag["InfinityWallet"] = "isInfinityWallet";
    ProviderIdentityFlag["Liquality"] = "isLiquality";
    ProviderIdentityFlag["MeetOne"] = "wallet";
    ProviderIdentityFlag["MetaMask"] = "isMetaMask";
    ProviderIdentityFlag["MyKey"] = "isMYKEY";
    ProviderIdentityFlag["OwnBit"] = "isOwnbit";
    ProviderIdentityFlag["Status"] = "isStatus";
    ProviderIdentityFlag["Trust"] = "isTrust";
    ProviderIdentityFlag["TokenPocket"] = "isTokenPocket";
    ProviderIdentityFlag["TP"] = "isTp";
    ProviderIdentityFlag["WalletIo"] = "isWalletIO";
    ProviderIdentityFlag["XDEFI"] = "isXDEFI";
    ProviderIdentityFlag["OneInch"] = "isOneInchIOSWallet";
    ProviderIdentityFlag["Tokenary"] = "isTokenary";
    ProviderIdentityFlag["Tally"] = "isTally";
    ProviderIdentityFlag["BraveWallet"] = "isBraveWallet";
    ProviderIdentityFlag["Rabby"] = "isRabby";
    ProviderIdentityFlag["MathWallet"] = "isMathWallet";
    ProviderIdentityFlag["GameStop"] = "isGamestop";
    ProviderIdentityFlag["BitKeep"] = "isBitKeep";
    ProviderIdentityFlag["Sequence"] = "isSequence";
    ProviderIdentityFlag["Core"] = "isAvalanche";
    ProviderIdentityFlag["Opera"] = "isOpera";
    ProviderIdentityFlag["Bitski"] = "isBitski";
    ProviderIdentityFlag["Enkrypt"] = "isEnkrypt";
    ProviderIdentityFlag["Phantom"] = "isPhantom";
    ProviderIdentityFlag["OKXWallet"] = "isOkxWallet";
    ProviderIdentityFlag["Zeal"] = "isZeal";
    ProviderIdentityFlag["Zerion"] = "isZerion";
    ProviderIdentityFlag["Rainbow"] = "isRainbow";
    ProviderIdentityFlag["SafePal"] = "isSafePal";
    ProviderIdentityFlag["DeFiWallet"] = "isDeficonnectProvider";
    ProviderIdentityFlag["Safeheron"] = "isSafeheron";
    ProviderIdentityFlag["Talisman"] = "isTalisman";
    ProviderIdentityFlag["OneKey"] = "isOneKey";
    ProviderIdentityFlag["Fordefi"] = "isFordefi";
})(ProviderIdentityFlag || (ProviderIdentityFlag = {}));
/**
 * The ProviderExternalUrl enum represents the external URLs associated
 * with different injected providers. It is used to direct end users who
 * do not have a wallet installed to the corresponding wallet installation page.
 * For this to be displayed a dapp must set `displayUnavailable`
 * to an array (to specify displayed unavailable wallets) or
 * true (to display all unavailable wallets) and a user select that wallet.
 */
export var ProviderExternalUrl;
(function (ProviderExternalUrl) {
    ProviderExternalUrl["Binance"] = "https://www.bnbchain.org/ru/blog/binance-extension-wallet/";
    ProviderExternalUrl["BitKeep"] = "https://bitkeep.com/en/download?type=0";
    ProviderExternalUrl["Coinbase"] = "https://www.coinbase.com/wallet/downloads";
    ProviderExternalUrl["MetaMask"] = "https://metamask.io/download/";
    ProviderExternalUrl["OKXWallet"] = "https://okx.com/download";
    ProviderExternalUrl["Phantom"] = "https://phantom.app/download";
    ProviderExternalUrl["Talisman"] = "https://www.talisman.xyz/";
    ProviderExternalUrl["Trust"] = "https://trustwallet.com/download/";
    ProviderExternalUrl["OneKey"] = "https://onekey.so/download/";
})(ProviderExternalUrl || (ProviderExternalUrl = {}));
export var ProviderLabel;
(function (ProviderLabel) {
    ProviderLabel["AlphaWallet"] = "AlphaWallet";
    ProviderLabel["ApexWallet"] = "Apex Wallet";
    ProviderLabel["AToken"] = "AToken";
    ProviderLabel["BifrostWallet"] = "Bifrost Wallet";
    ProviderLabel["Binance"] = "Binance Smart Wallet";
    ProviderLabel["Bitpie"] = "Bitpie";
    ProviderLabel["Bitski"] = "Bitski";
    ProviderLabel["BlockWallet"] = "BlockWallet";
    ProviderLabel["Brave"] = "Brave Wallet";
    ProviderLabel["Coinbase"] = "Coinbase Wallet";
    ProviderLabel["Dcent"] = "D'CENT";
    ProviderLabel["Detected"] = "Detected Wallet";
    ProviderLabel["Exodus"] = "Exodus";
    ProviderLabel["Frame"] = "Frame";
    ProviderLabel["Frontier"] = "Frontier";
    ProviderLabel["HuobiWallet"] = "Huobi Wallet";
    ProviderLabel["HyperPay"] = "HyperPay";
    ProviderLabel["ImToken"] = "imToken";
    ProviderLabel["InfinityWallet"] = "Infinity Wallet";
    ProviderLabel["Liquality"] = "Liquality";
    ProviderLabel["MeetOne"] = "MeetOne";
    ProviderLabel["MetaMask"] = "MetaMask";
    ProviderLabel["MyKey"] = "MyKey";
    ProviderLabel["Opera"] = "Opera Wallet";
    ProviderLabel["OwnBit"] = "OwnBit";
    ProviderLabel["Status"] = "Status Wallet";
    ProviderLabel["Trust"] = "Trust Wallet";
    ProviderLabel["TokenPocket"] = "TokenPocket";
    ProviderLabel["TP"] = "TP Wallet";
    ProviderLabel["WalletIo"] = "Wallet.io";
    ProviderLabel["XDEFI"] = "XDEFI Wallet";
    ProviderLabel["OneInch"] = "1inch Wallet";
    ProviderLabel["Tokenary"] = "Tokenary Wallet";
    ProviderLabel["Tally"] = "Taho";
    ProviderLabel["Rabby"] = "Rabby Wallet";
    ProviderLabel["MathWallet"] = "MathWallet";
    ProviderLabel["GameStop"] = "GameStop Wallet";
    ProviderLabel["BitKeep"] = "BitKeep";
    ProviderLabel["Sequence"] = "Sequence";
    ProviderLabel["Core"] = "Core";
    ProviderLabel["Enkrypt"] = "Enkrypt";
    ProviderLabel["Zeal"] = "Zeal";
    ProviderLabel["Phantom"] = "Phantom";
    ProviderLabel["OKXWallet"] = "OKX Wallet";
    ProviderLabel["Zerion"] = "Zerion";
    ProviderLabel["Rainbow"] = "Rainbow";
    ProviderLabel["SafePal"] = "SafePal";
    ProviderLabel["DeFiWallet"] = "DeFi Wallet";
    ProviderLabel["Safeheron"] = "Safeheron";
    ProviderLabel["Talisman"] = "Talisman";
    ProviderLabel["OneKey"] = "OneKey";
    ProviderLabel["Fordefi"] = "Fordefi";
})(ProviderLabel || (ProviderLabel = {}));
export var InjectedNameSpace;
(function (InjectedNameSpace) {
    InjectedNameSpace["Ethereum"] = "ethereum";
    InjectedNameSpace["Binance"] = "BinanceChain";
    InjectedNameSpace["Tally"] = "tally";
    InjectedNameSpace["Web3"] = "web3";
    InjectedNameSpace["Arbitrum"] = "arbitrum";
    InjectedNameSpace["XFI"] = "xfi";
    InjectedNameSpace["GameStop"] = "gamestop";
    InjectedNameSpace["BitKeep"] = "bitkeep";
    InjectedNameSpace["Avalanche"] = "avalanche";
    InjectedNameSpace["Bitski"] = "Bitski";
    InjectedNameSpace["Enkrypt"] = "enkrypt";
    InjectedNameSpace["Zeal"] = "zeal";
    InjectedNameSpace["Phantom"] = "phantom";
    InjectedNameSpace["OKXWallet"] = "okxwallet";
    InjectedNameSpace["Trust"] = "trustwallet";
    InjectedNameSpace["Frontier"] = "frontier";
    InjectedNameSpace["DeFiConnectProvider"] = "deficonnectProvider";
    InjectedNameSpace["Safeheron"] = "safeheron";
    InjectedNameSpace["Talisman"] = "talismanEth";
    InjectedNameSpace["OneKey"] = "$onekey";
})(InjectedNameSpace || (InjectedNameSpace = {}));
