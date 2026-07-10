// ============================================================
// common.js — ATMNO.1 shared logic for all pages
// ============================================================

// ============================================================
// i18n 字典（英文 + 繁體中文 + 簡體中文）
// ============================================================
const I18N = {
  'zh-TW': {
    'nav.home': '首頁',
    'nav.matches': '賽事',
    'nav.live': '進行中',
    'nav.myBets': '我的注單',
    'nav.more': '更多',
    'nav.contracts': '合約',
    'nav.docs': '文件',
    'cat.trending': '熱門',
    'cat.football': '足球',
    'cat.worldcup': '世界盃',
    'cat.basketball': '籃球',
    'cat.snooker': '斯諾克',
    'cat.events': '時事預測',
    'cat.crypto': '加密貨幣',
    'cat.atm': '關於 ATM',
    'cat.esports': '電競',
    'cat.entertainment': '影音',
    'trending.title': '🔥 熱門預測',
    'trending.volume': '投注量',
    'trending.hot': '熱門預測',
    'trending.viewAll': '查看全部 →',
    'football.heroTitle': '足球 · 全球聯賽 & 盃賽',
    'football.heroSub': '預測比賽結果、冠軍歸屬、金靴獎等',
    'football.worldcup': '2026世界盃',
    'football.ucl': '歐冠聯賽',
    'football.epl': '英超',
    'football.laliga': '西甲',
    'football.seriea': '意甲',
    'football.bundesliga': '德甲',
    'coming.nba': 'NBA · NCAA · 歐洲籃球',
    'coming.snooker': '世錦賽 · 英錦賽 · 大師賽',
    'coming.events': '全球選舉 · 經濟預測 · 熱點事件',
    'coming.crypto': 'BTC 價格 · ETH 合併 · DeFi TVL · 代幣發射',
    'coming.entertainment': '奧斯卡 · 格萊美 · 票房 · 真人秀',
    'coming.soon': '即將推出 — 敬請期待',
    'coming.soonShort': '即將推出',
    'coming.basketballSub': '預測比賽勝負、MVP、冠軍歸屬等',
    'coming.snookerSub': '預測比賽勝負、錦標賽冠軍和局數比分',
    'coming.eventsSub': '預測全球重大事件和里程碑的結果',
    'coming.cryptoSub': '預測加密貨幣價格、協議里程碑和市場動態',
    'coming.entertainmentSub': '預測頒獎典禮、票房冠軍和娛樂里程碑',

    'wallet.notConnected': '錢包：未連接',
    'wallet.connect': '連接錢包',
    'wallet.connected': '已連接',
    'wallet.copyAddr': '複製地址',
    'wallet.refreshBalance': '刷新餘額',
    'wallet.viewExplorer': '在區塊瀏覽器查看',
    'wallet.switchBnb': '切換到 BNB Chain',
    'wallet.switchEni': '切換到 ENI 主網',
    'wallet.switchEniTestnet': '切換到 ENI 測試網',
    'wallet.disconnect': '斷開連接',

    'hero.title': '全領域鏈上預測市場',
    'hero.subtitle': '非託管 · 錢包直連下注 · 合約自動結算 · 贏家自助領取',
    'hero.teams48': '48 支球隊 · 104 場比賽',
    'hero.loading': '資料源：載入中…',

    'stats.tvl': '合約鎖倉 (TVL)',
    'stats.volume': '24h 投注量',
    'stats.wallets': '獨立錢包',

    'matches.title': 'FIFA 世界盃 2026 · 小組賽',
    'matches.all': '全部',
    'matches.today': '今日',
    'matches.live': '進行中',
    'matches.loading': '正在從 ESPN API 載入 2026 世界盃賽程…',
    'matches.noLive': '目前沒有進行中的比賽',
    'matches.noToday': '今日暫無賽事',

    'match.upcoming': '即將開始',
    'match.finished': '已結束',
    'match.betDisabled': '進行中 · 暫不支持投注',
    'match.finishedNoBet': '已結束 · 無法投注',

    'odd.home': '主勝',
    'odd.draw': '平局',
    'odd.away': '客勝',

    'slip.title': '投注單',
    'slip.tapExpand': '點擊展開',
    'slip.empty': '請選擇一個賠率開始投注',
    'slip.totalOdd': '合計賠率',
    'slip.stakeLabel': '下注金額 (USDT)',
    'slip.payoutGross': '毛赔付',
    'slip.fee': '平台手續費 (盈利 10%)',
    'slip.payoutNet': '到手金額',
    'slip.placeBet': '確認下注',
    'slip.txPending': '交易處理中…',
    'slip.sig2note': '需錢包簽名一次：直接 transfer USDT 到金庫地址',
    'slip.custodyNote': '資金直接從錢包轉入金庫鎖倉',

    'myBets.title': '我的注單',
    'myBets.empty': '錢包未連接或暫無注單',
    'myBets.connectFirst': '請先連接錢包',
    'myBets.noBets': '暫無注單',
    'myBets.status.pending': '⏳ 待開獎',
    'myBets.status.won': '✅ 已中獎',
    'myBets.status.lost': '❌ 未中獎',
    'myBets.pickHomeWin': '主勝 ({0})',
    'myBets.pickAwayWin': '客勝 ({0})',
    'myBets.pickDraw': '平局',
    'myBets.stakeLine': '@ {0} · 下注 {1} USDT',
    'myBets.payoutLine': '毛赔付 {0} USDT · 扣 {1} USDT 手續費',
    'myBets.netLine': '到手 {0} USDT',
    'myBets.lostLine': '已損失 {0} USDT',
    'myBets.potential': '潛在到手 {0} USDT',
    'myBets.claim': '領取 {0} USDT',
    'myBets.claimed': '✓ 已領取',
    'myBets.waiting': '等待結算',

    'dataStatus.title': '資料源狀態',
    'dataStatus.fixtures': '賽程',
    'dataStatus.odds': '賠率',
    'dataStatus.lastUpdate': '最近更新',
    'dataStatus.interval': '刷新間隔',
    'dataStatus.oddsPending': '占位（未配置 key）',
    'dataStatus.oddsReal': 'bet365 (The Odds API)',

    'profile.my': '我的',
    'profile.myProfile': '我的',
    'profile.myAddr': '我的地址',
    'profile.myAssets': '我的資產',
    'profile.myTwitter': '我的推特',
    'profile.myTelegram': '我的Telegram',
    'profile.language': '語言',
    'profile.notConnected': '未連接',
    'social.title': '帳號綁定',
    'social.notBound': '未綁定',
    'social.bind': '綁定',
    'social.bindTwitter': '綁定推特',
    'social.bindTelegram': '綁定 Telegram',
    'social.myTwitter': '我的推特：{0}',
    'social.myTelegram': '我的 TG：{0}',
    'social.unbind': '解綁',
    'social.unbindConfirm': '確認解綁 {0}？',
    'social.unbindSuccess': '已解綁 {0}',
    'social.bound': '✓ 已綁定',
    'social.alreadyBound': '{0} 已綁定，無法重複綁定',
    'social.enterTwitter': '請輸入你的 Twitter/X 用戶名（例如 @username）',
    'social.enterTelegram': '請輸入你的 Telegram 用戶名（例如 @username）',
    'social.invalidHandle': '{0} 用戶名格式不正確',
    'social.bindSuccess': '{0} 綁定成功：{1}',

    'footer.disclaimer': 'Demo · 本頁面僅供產品設計演示，不提供真實博彩服務 · 實際部署需符合當地法律法規',
    'footer.tagline': 'Web3 全領域預測市場',
    'footer.platform': '平台',
    'footer.about': '關於',
    'footer.aboutUs': '關於我們',
    'footer.terms': '服務條款',
    'footer.privacy': '隱私政策',
    'footer.community': '社區',

    'modal.wallet.title': '連接錢包',
    'modal.wallet.desc': '選擇您的錢包以繼續',
    'modal.wallet.integrated': '已接入',
    'modal.wallet.pending': '待接入',
    'modal.wallet.networks': '支援的網路（連接後可切換）',
    'modal.wallet.switch': '切換',

    'modal.contracts.title': '合約資訊',
    'modal.contracts.desc': 'BettingVault 合約地址（即將部署）',
    'modal.contracts.feeRecipient': '手續費收款地址',
    'modal.contracts.feeRecipientUnset': '尚未設定（請配置 FEE_RECIPIENT）',
    'modal.contracts.pending': '待公布',
    'modal.contracts.fee': '平台手續費',
    'modal.contracts.oracle': '預言機',
    'modal.contracts.audit': '審計',
    'modal.contracts.note': 'Solidity 原始碼 (BettingVault.sol) 將在 demo 階段後公開。核心流程：approve USDT → placeBet(matchId, outcome, amount) → 合約鎖倉 → owner/oracle settleMatch → 使用者呼叫 claim() 領取淨赔付（已扣除 10% 盈利手續費）。',

    'modal.docs.title': '關於 ATMNO.1',
    'modal.docs.p1': '<strong>ATMNO.1</strong> 是一個全領域的非託管鏈上預測市場，涵蓋體育賽事、時事預測、加密貨幣等多個領域。下注資金與赔付全程走智能合約，平台不會接觸使用者資金。',
    'modal.docs.p2': '<strong>運作流程：</strong>連接錢包、選擇賽果、授權 USDT、提交注單。比賽結算後，中獎者呼叫 claim() 領取。平台在 claim 時收取<strong>盈利部分的 10%</strong>（不碰本金）。',
    'modal.docs.p3': '<strong>支援網路：</strong>BNB Chain (BEP-20 USDT)、ENI Mainnet (ENI-Peg USDT)。ENI Testnet 可用於測試。',
    'modal.docs.p4': '<strong>資料源：</strong>賽程走 ESPN 公開 API，賠率走 The Odds API（bet365 feed），每 30 秒刷新一次。',

    'toast.copied': '地址已複製到剪貼簿',
    'toast.balanceRefreshed': '餘額已刷新',
    'toast.balanceLoading': '正在刷新餘額…',
    'toast.disconnected': '已斷開（如需徹底撤銷授權，請在 MetaMask 中操作）',
    'toast.walletBroken': '錢包已斷開',
    'toast.switchedTo': '已切換到 {0}',
    'toast.addedChain': '{0} 已加入錢包',
    'toast.userCancel': '用戶取消了連接',
    'toast.switchCancel': '用戶取消了網路切換',
    'toast.addChainFail': '新增網路失敗：{0}',
    'toast.switchFail': '切換失敗：{0}',
    'toast.chainSwitch': '鏈已切換：{0}',
    'toast.switchedAccount': '已切換到：{0}',
    'toast.noMetaMask': '未偵測到 MetaMask，請先安裝',
    'toast.noWallet': '未偵測到錢包',
    'toast.connectFirst': '請先連接錢包',
    'toast.enterStake': '請輸入投注金額',
    'toast.insufficient': '錢包 USDT 不足',
    'toast.selectOdd': '請先選擇賠率',
    'toast.contractPending': '非託管下注需要 BettingVault 合約部署後才能使用（下一步）',
    'toast.betChainNotEnabled': '目前僅 ENI 測試網支援真實下注，請切換網路 (當前：{0})',
    'toast.vaultUnset': '金庫地址尚未設定，請先配置 VAULT_ADDRESS',
    'toast.usdtNotFound': '當前鏈上找不到 USDT 合約',
    'toast.sendingBet': '正在簽署下注交易…',
    'toast.waitingConfirm': '交易已送出，等待確認：{0}',
    'toast.betSuccess': '下注成功：{0} USDT · TxHash {1}',
    'toast.betFail': '下注失敗：{0}',
    'toast.claiming': '正在領取 {0} USDT…',
    'toast.claimed': '{0} USDT 已到帳錢包',
    'toast.wipWallet': '{0} 即將支援（目前僅 MetaMask 已接入）',
    'toast.connected': '已連接：{0}',
    'toast.connectFail': '連接失敗：{0}',

    'chip.loading': '{0}：讀取中…',
    'chip.notSupported': '⚠ 鏈 {0} 暫不支援',
    'chip.fail': '餘額讀取失敗 · 點擊重試',

    'fixturesProgress.loading': '正在從 ESPN 拉取賽程…',
    'fixturesProgress.ok': '賽程：ESPN · 賠率：{0} · {1} 場',
    'fixturesProgress.fail': 'API 載入失敗，使用本地 mock 資料（{0}）',
    'fixturesProgress.oddsReal': 'bet365 via The Odds API',
    'fixturesProgress.oddsMock': '占位（未配置 Odds API Key）',
  },
  'en': {
    'nav.home': 'Home',
    'nav.matches': 'Matches',
    'nav.live': 'In-Play',
    'nav.myBets': 'My Bets',
    'nav.more': 'More',
    'nav.contracts': 'Contracts',
    'nav.docs': 'Docs',
    'cat.trending': 'Trending',
    'cat.football': 'Football',
    'cat.worldcup': 'World Cup',
    'cat.basketball': 'Basketball',
    'cat.snooker': 'Snooker',
    'cat.events': 'Events',
    'cat.crypto': 'Crypto',
    'cat.atm': '关于 ATM',
    'cat.esports': 'Esports',
    'cat.entertainment': 'Entertainment',
    'cat.entertainmentShort': 'Entmt',
    'trending.title': '🔥 Trending Predictions',
    'trending.volume': 'Volume',
    'trending.hot': 'Hot Right Now',
    'trending.viewAll': 'View All →',
    'football.heroTitle': 'Football · Global Leagues & Tournaments',
    'football.heroSub': 'Predict match results, champions, top scorers and more',
    'football.worldcup': 'World Cup 2026',
    'football.ucl': 'Champions League',
    'football.epl': 'Premier League',
    'football.laliga': 'La Liga',
    'football.seriea': 'Serie A',
    'football.bundesliga': 'Bundesliga',
    'coming.nba': 'NBA · NCAA · EuroLeague',
    'coming.snooker': 'World Championship · UK Championship · Masters',
    'coming.events': 'Global Elections · Economic Forecasts · Trending Events',
    'coming.crypto': 'BTC Price · ETH Merge · DeFi TVL · Token Launches',
    'coming.entertainment': 'Oscars · Grammy · Box Office · Reality TV',
    'coming.soon': 'Coming Soon — Stay Tuned',
    'coming.soonShort': 'Coming Soon',
    'coming.basketballSub': 'Predict game winners, MVP, championship outcomes and more',
    'coming.snookerSub': 'Predict match winners, tournament champions and frame scores',
    'coming.eventsSub': 'Predict outcomes of major global events and milestones',
    'coming.cryptoSub': 'Predict crypto prices, protocol milestones and market events',
    'coming.entertainmentSub': 'Predict awards, box office hits and entertainment milestones',

    'wallet.notConnected': 'Wallet: not connected',
    'wallet.connect': 'Connect Wallet',
    'wallet.connected': 'Connected',
    'wallet.copyAddr': 'Copy address',
    'wallet.refreshBalance': 'Refresh balance',
    'wallet.viewExplorer': 'View on explorer',
    'wallet.switchBnb': 'Switch to BNB Chain',
    'wallet.switchEni': 'Switch to ENI Mainnet',
    'wallet.switchEniTestnet': 'Switch to ENI Testnet',
    'wallet.disconnect': 'Disconnect',

    'hero.title': 'Web3 Prediction Market for Everything',
    'hero.subtitle': 'Non-custodial · Wallet-native betting · Contract settlement · Self-claim payouts',
    'hero.teams48': '48 Teams · 104 Matches',
    'hero.loading': 'Data sources: loading…',

    'stats.tvl': 'Vault TVL',
    'stats.volume': '24h Volume',
    'stats.wallets': 'Unique Wallets',

    'matches.title': 'FIFA World Cup 2026 · Group Stage',
    'matches.all': 'All',
    'matches.today': 'Today',
    'matches.live': 'Live',
    'matches.loading': 'Loading 2026 World Cup fixtures from ESPN API…',
    'matches.noLive': 'No matches currently live',
    'matches.noToday': 'No matches today',

    'match.upcoming': 'Upcoming',
    'match.finished': 'Finished',
    'match.betDisabled': 'Live · Betting unavailable',
    'match.finishedNoBet': 'Finished · Betting closed',

    'odd.home': 'Home',
    'odd.draw': 'Draw',
    'odd.away': 'Away',

    'slip.title': 'Bet slip',
    'slip.tapExpand': 'tap to expand',
    'slip.empty': 'Pick an odd to start betting',
    'slip.totalOdd': 'Total odds',
    'slip.stakeLabel': 'Stake (USDT)',
    'slip.payoutGross': 'Gross payout',
    'slip.fee': 'Platform fee (10% of profit)',
    'slip.payoutNet': 'You receive',
    'slip.placeBet': 'Place Bet',
    'slip.txPending': 'Transaction pending…',
    'slip.sig2note': 'One wallet signature: transfer USDT directly to the vault',
    'slip.custodyNote': 'Funds move directly from your wallet to the vault',

    'myBets.title': 'My Bets',
    'myBets.empty': 'Wallet not connected or no bets yet',
    'myBets.connectFirst': 'Please connect wallet first',
    'myBets.noBets': 'No bets yet',
    'myBets.status.pending': '⏳ Pending',
    'myBets.status.won': '✅ Won',
    'myBets.status.lost': '❌ Lost',
    'myBets.pickHomeWin': '{0} Win',
    'myBets.pickAwayWin': '{0} Win',
    'myBets.pickDraw': 'Draw',
    'myBets.stakeLine': '@ {0} · Stake {1} USDT',
    'myBets.payoutLine': 'Gross {0} USDT · Fee {1} USDT',
    'myBets.netLine': 'You get {0} USDT',
    'myBets.lostLine': 'Lost {0} USDT',
    'myBets.potential': 'Potential net {0} USDT',
    'myBets.claim': 'Claim {0} USDT',
    'myBets.claimed': '✓ Claimed',
    'myBets.waiting': 'Waiting settlement',

    'dataStatus.title': 'Data sources',
    'dataStatus.fixtures': 'Fixtures',
    'dataStatus.odds': 'Odds',
    'dataStatus.lastUpdate': 'Last update',
    'dataStatus.interval': 'Refresh interval',
    'dataStatus.oddsPending': 'key not set',
    'dataStatus.oddsReal': 'bet365 (The Odds API)',

    'profile.my': 'My',
    'profile.myProfile': 'My Profile',
    'profile.myAddr': 'My Address',
    'profile.myAssets': 'My Assets',
    'profile.myTwitter': 'My Twitter',
    'profile.myTelegram': 'My Telegram',
    'profile.language': 'Language',
    'profile.notConnected': 'Not connected',
    'social.title': 'Account Binding',
    'social.notBound': 'Not bound',
    'social.bind': 'Bind',
    'social.bindTwitter': 'Bind Twitter',
    'social.bindTelegram': 'Bind Telegram',
    'social.myTwitter': 'My Twitter: {0}',
    'social.myTelegram': 'My TG: {0}',
    'social.unbind': 'Unbind',
    'social.unbindConfirm': 'Unbind {0}?',
    'social.unbindSuccess': '{0} unbound',
    'social.bound': '✓ Bound',
    'social.alreadyBound': '{0} already bound — cannot re-bind',
    'social.enterTwitter': 'Enter your Twitter/X handle (e.g. @username)',
    'social.enterTelegram': 'Enter your Telegram handle (e.g. @username)',
    'social.invalidHandle': 'Invalid {0} handle format',
    'social.bindSuccess': '{0} bound successfully: {1}',

    'footer.disclaimer': 'Demo · Product design preview only · Not a real gambling service · Deployment requires compliance with local regulations',
    'footer.tagline': 'Web3 Prediction Market for Everything',
    'footer.platform': 'Platform',
    'footer.about': 'About',
    'footer.aboutUs': 'About Us',
    'footer.terms': 'Terms of Service',
    'footer.privacy': 'Privacy Policy',
    'footer.community': 'Community',

    'modal.wallet.title': 'Connect Wallet',
    'modal.wallet.desc': 'Choose a wallet to continue',
    'modal.wallet.integrated': 'Integrated',
    'modal.wallet.pending': 'Coming',
    'modal.wallet.networks': 'Supported networks (switch after connecting)',
    'modal.wallet.switch': 'Switch',

    'modal.contracts.title': 'Smart Contracts',
    'modal.contracts.desc': 'BettingVault addresses (deploying soon)',
    'modal.contracts.feeRecipient': 'Fee recipient',
    'modal.contracts.feeRecipientUnset': 'Not set (configure FEE_RECIPIENT)',
    'modal.contracts.pending': 'TBA',
    'modal.contracts.fee': 'Platform fee',
    'modal.contracts.oracle': 'Oracle',
    'modal.contracts.audit': 'Audit',
    'modal.contracts.note': 'Solidity source (BettingVault.sol) will be published after the demo phase. Core flow: approve USDT → placeBet(matchId, outcome, amount) → contract locks stake → owner/oracle settleMatch → user calls claim() to receive net payout minus 10% of profit.',

    'modal.docs.title': 'About ATMNO.1',
    'modal.docs.p1': '<strong>ATMNO.1</strong> is a comprehensive non-custodial on-chain prediction market covering sports, events, crypto, and more. Stakes and payouts flow through smart contracts — the platform never holds user funds.',
    'modal.docs.p2': '<strong>How it works:</strong> Connect your wallet, pick an outcome, approve USDT, and submit the bet. On settlement, winners call claim() to withdraw. The platform takes <strong>10% of net profit</strong> at claim time (not principal).',
    'modal.docs.p3': '<strong>Supported networks:</strong> BNB Chain (BEP-20 USDT), ENI Mainnet (ENI-Peg USDT). ENI Testnet available for testing.',
    'modal.docs.p4': '<strong>Data sources:</strong> Fixtures via ESPN public API, odds via The Odds API (bet365 feed). Refreshed every 30 seconds.',

    'toast.copied': 'Address copied to clipboard',
    'toast.balanceRefreshed': 'Balance refreshed',
    'toast.balanceLoading': 'Refreshing balance…',
    'toast.disconnected': 'Disconnected (revoke permissions inside MetaMask to fully detach)',
    'toast.walletBroken': 'Wallet disconnected',
    'toast.switchedTo': 'Switched to {0}',
    'toast.addedChain': '{0} added to wallet',
    'toast.userCancel': 'User cancelled the connection',
    'toast.switchCancel': 'User cancelled the network switch',
    'toast.addChainFail': 'Add network failed: {0}',
    'toast.switchFail': 'Switch failed: {0}',
    'toast.chainSwitch': 'Chain switched: {0}',
    'toast.switchedAccount': 'Switched to: {0}',
    'toast.noMetaMask': 'MetaMask not detected, please install',
    'toast.noWallet': 'No wallet detected',
    'toast.connectFirst': 'Please connect wallet first',
    'toast.enterStake': 'Please enter a stake amount',
    'toast.insufficient': 'Insufficient USDT balance',
    'toast.selectOdd': 'Please pick an odd first',
    'toast.contractPending': 'Non-custodial betting needs BettingVault deployed (next step)',
    'toast.betChainNotEnabled': 'Live betting is only enabled on ENI Testnet right now. Please switch network (current: {0})',
    'toast.vaultUnset': 'Vault address not set — configure VAULT_ADDRESS first',
    'toast.usdtNotFound': 'No USDT contract configured for the current chain',
    'toast.sendingBet': 'Signing bet transaction…',
    'toast.waitingConfirm': 'Tx sent, waiting for confirmation: {0}',
    'toast.betSuccess': 'Bet placed: {0} USDT · Tx {1}',
    'toast.betFail': 'Bet failed: {0}',
    'toast.claiming': 'Claiming {0} USDT…',
    'toast.claimed': '{0} USDT received',
    'toast.wipWallet': '{0} coming soon (MetaMask only for now)',
    'toast.connected': 'Connected: {0}',
    'toast.connectFail': 'Connect failed: {0}',

    'chip.loading': '{0}: loading…',
    'chip.notSupported': '⚠ Chain {0} not supported',
    'chip.fail': 'Balance read failed · tap to retry',

    'fixturesProgress.loading': 'Fetching fixtures from ESPN…',
    'fixturesProgress.ok': 'Fixtures: ESPN · Odds: {0} · {1} matches',
    'fixturesProgress.fail': 'API failed, using local mock ({0})',
    'fixturesProgress.oddsReal': 'bet365 via The Odds API',
    'fixturesProgress.oddsMock': 'placeholder (no API key)',
  },
  'zh-CN': {
    'nav.home': '首页',
    'nav.matches': '赛事',
    'nav.live': '进行中',
    'nav.myBets': '我的注单',
    'nav.more': '更多',
    'nav.contracts': '合约',
    'nav.docs': '文档',
    'cat.trending': '热门',
    'cat.football': '足球',
    'cat.worldcup': '世界杯',
    'cat.basketball': '篮球',
    'cat.snooker': '斯诺克',
    'cat.events': '时事预测',
    'cat.crypto': '加密货币',
    'cat.atm': '关于 ATM',
    'cat.esports': '电竞',
    'cat.entertainment': '影音',
    'trending.title': '🔥 热门预测',
    'trending.volume': '投注量',
    'trending.hot': '热门预测',
    'trending.viewAll': '查看全部 →',
    'football.heroTitle': '足球 · 全球联赛 & 杯赛',
    'football.heroSub': '预测比赛结果、冠军归属、金靴奖等',
    'football.worldcup': '2026世界杯',
    'football.ucl': '欧冠联赛',
    'football.epl': '英超',
    'football.laliga': '西甲',
    'football.seriea': '意甲',
    'football.bundesliga': '德甲',
    'coming.nba': 'NBA · NCAA · 欧洲篮球',
    'coming.snooker': '世锦赛 · 英锦赛 · 大师赛',
    'coming.events': '全球选举 · 经济预测 · 热点事件',
    'coming.crypto': 'BTC 价格 · ETH 合并 · DeFi TVL · 代币发射',
    'coming.entertainment': '奥斯卡 · 格莱美 · 票房 · 真人秀',
    'coming.soon': '即将推出 — 敬请期待',
    'coming.soonShort': '即将推出',
    'coming.basketballSub': '预测比赛胜负、MVP、冠军归属等',
    'coming.snookerSub': '预测比赛胜负、锦标赛冠军和局数比分',
    'coming.eventsSub': '预测全球重大事件和里程碑的结果',
    'coming.cryptoSub': '预测加密货币价格、协议里程碑和市场动态',
    'coming.entertainmentSub': '预测颁奖典礼、票房冠军和娱乐里程碑',

    'wallet.notConnected': '钱包：未连接',
    'wallet.connect': '连接钱包',
    'wallet.connected': '已连接',
    'wallet.copyAddr': '复制地址',
    'wallet.refreshBalance': '刷新余额',
    'wallet.viewExplorer': '在区块浏览器查看',
    'wallet.switchBnb': '切换到 BNB Chain',
    'wallet.switchEni': '切换到 ENI 主网',
    'wallet.switchEniTestnet': '切换到 ENI 测试网',
    'wallet.disconnect': '断开连接',

    'hero.title': '全领域链上预测市场',
    'hero.subtitle': '非托管 · 钱包直连下注 · 合约自动结算 · 赢家自助领取',
    'hero.teams48': '48 支球队 · 104 场比赛',
    'hero.loading': '数据源：加载中…',

    'stats.tvl': '合约锁仓 (TVL)',
    'stats.volume': '24h 投注量',
    'stats.wallets': '独立钱包',

    'matches.title': 'FIFA 世界杯 2026 · 小组赛',
    'matches.all': '全部',
    'matches.today': '今日',
    'matches.live': '进行中',
    'matches.loading': '正在从 ESPN API 加载 2026 世界杯赛程…',
    'matches.noLive': '当前没有进行中的比赛',
    'matches.noToday': '今日暂无赛事',

    'match.upcoming': '即将开始',
    'match.finished': '已结束',
    'match.betDisabled': '进行中 · 暂不支持投注',
    'match.finishedNoBet': '已结束 · 无法投注',

    'odd.home': '主胜',
    'odd.draw': '平局',
    'odd.away': '客胜',

    'slip.title': '投注单',
    'slip.tapExpand': '点击展开',
    'slip.empty': '请选择一个赔率开始投注',
    'slip.totalOdd': '合计赔率',
    'slip.stakeLabel': '下注金额 (USDT)',
    'slip.payoutGross': '毛赔付',
    'slip.fee': '平台手续费 (盈利 10%)',
    'slip.payoutNet': '到手金额',
    'slip.placeBet': '确认下注',
    'slip.txPending': '交易处理中…',
    'slip.sig2note': '需钱包签名一次：直接 transfer USDT 到金库地址',
    'slip.custodyNote': '资金直接从钱包转入金库锁仓',

    'myBets.title': '我的注单',
    'myBets.empty': '钱包未连接或暂无注单',
    'myBets.connectFirst': '请先连接钱包',
    'myBets.noBets': '暂无注单',
    'myBets.status.pending': '⏳ 待开奖',
    'myBets.status.won': '✅ 已中奖',
    'myBets.status.lost': '❌ 未中奖',
    'myBets.pickHomeWin': '主胜 ({0})',
    'myBets.pickAwayWin': '客胜 ({0})',
    'myBets.pickDraw': '平局',
    'myBets.stakeLine': '@ {0} · 下注 {1} USDT',
    'myBets.payoutLine': '毛赔付 {0} USDT · 扣 {1} USDT 手续费',
    'myBets.netLine': '到手 {0} USDT',
    'myBets.lostLine': '已损失 {0} USDT',
    'myBets.potential': '潜在到手 {0} USDT',
    'myBets.claim': '领取 {0} USDT',
    'myBets.claimed': '✓ 已领取',
    'myBets.waiting': '等待结算',

    'dataStatus.title': '数据源状态',
    'dataStatus.fixtures': '赛程',
    'dataStatus.odds': '赔率',
    'dataStatus.lastUpdate': '最近更新',
    'dataStatus.interval': '刷新间隔',
    'dataStatus.oddsPending': '占位（未配置 key）',
    'dataStatus.oddsReal': 'bet365 (The Odds API)',

    'profile.my': '我的',
    'profile.myProfile': '我的',
    'profile.myAddr': '我的地址',
    'profile.myAssets': '我的资产',
    'profile.myTwitter': '我的推特',
    'profile.myTelegram': '我的Telegram',
    'profile.language': '语言',
    'profile.notConnected': '未连接',
    'social.title': '账号绑定',
    'social.notBound': '未绑定',
    'social.bind': '绑定',
    'social.bindTwitter': '绑定推特',
    'social.bindTelegram': '绑定 Telegram',
    'social.myTwitter': '我的推特：{0}',
    'social.myTelegram': '我的 TG：{0}',
    'social.unbind': '解绑',
    'social.unbindConfirm': '确认解绑 {0}？',
    'social.unbindSuccess': '已解绑 {0}',
    'social.bound': '✓ 已绑定',
    'social.alreadyBound': '{0} 已绑定，无法重复绑定',
    'social.enterTwitter': '请输入你的 Twitter/X 用户名（例如 @username）',
    'social.enterTelegram': '请输入你的 Telegram 用户名（例如 @username）',
    'social.invalidHandle': '{0} 用户名格式不正确',
    'social.bindSuccess': '{0} 绑定成功：{1}',

    'footer.disclaimer': 'Demo · 本页面仅供产品设计演示，不提供真实博彩服务 · 实际部署需符合当地法律法规',
    'footer.tagline': 'Web3 全领域预测市场',
    'footer.platform': '平台',
    'footer.about': '关于',
    'footer.aboutUs': '关于我们',
    'footer.terms': '服务条款',
    'footer.privacy': '隐私政策',
    'footer.community': '社区',

    'modal.wallet.title': '连接钱包',
    'modal.wallet.desc': '选择您的钱包以继续',
    'modal.wallet.integrated': '已接入',
    'modal.wallet.pending': '待接入',
    'modal.wallet.networks': '支持的网络（连接后可切换）',
    'modal.wallet.switch': '切换',

    'modal.contracts.title': '合约信息',
    'modal.contracts.desc': 'BettingVault 合约地址（即将部署）',
    'modal.contracts.feeRecipient': '手续费收款地址',
    'modal.contracts.feeRecipientUnset': '尚未设定（请配置 FEE_RECIPIENT）',
    'modal.contracts.pending': '待公布',
    'modal.contracts.fee': '平台手续费',
    'modal.contracts.oracle': '预言机',
    'modal.contracts.audit': '审计',
    'modal.contracts.note': 'Solidity 源代码 (BettingVault.sol) 将在 demo 阶段后公开。核心流程：approve USDT → placeBet(matchId, outcome, amount) → 合约锁仓 → owner/oracle settleMatch → 用户调用 claim() 领取净赔付（已扣除 10% 盈利手续费）。',

    'modal.docs.title': '关于 ATMNO.1',
    'modal.docs.p1': '<strong>ATMNO.1</strong> 是一个全领域的非托管链上预测市场，涵盖体育赛事、时事预测、加密货币等多个领域。下注资金与赔付全程走智能合约，平台不会接触用户资金。',
    'modal.docs.p2': '<strong>运作流程：</strong>连接钱包、选择赛果、授权 USDT、提交注单。比赛结算后，中奖者调用 claim() 领取。平台在 claim 时收取<strong>盈利部分的 10%</strong>（不碰本金）。',
    'modal.docs.p3': '<strong>支持网络：</strong>BNB Chain (BEP-20 USDT)、ENI Mainnet (ENI-Peg USDT)。ENI Testnet 可用于测试。',
    'modal.docs.p4': '<strong>数据源：</strong>赛程走 ESPN 公开 API，赔率走 The Odds API（bet365 feed），每 30 秒刷新一次。',

    'toast.copied': '地址已复制到剪贴板',
    'toast.balanceRefreshed': '余额已刷新',
    'toast.balanceLoading': '正在刷新余额…',
    'toast.disconnected': '已断开（如需彻底撤销授权，请在 MetaMask 中操作）',
    'toast.walletBroken': '钱包已断开',
    'toast.switchedTo': '已切换到 {0}',
    'toast.addedChain': '{0} 已加入钱包',
    'toast.userCancel': '用户取消了连接',
    'toast.switchCancel': '用户取消了网络切换',
    'toast.addChainFail': '新增网络失败：{0}',
    'toast.switchFail': '切换失败：{0}',
    'toast.chainSwitch': '链已切换：{0}',
    'toast.switchedAccount': '已切换到：{0}',
    'toast.noMetaMask': '未检测到 MetaMask，请先安装',
    'toast.noWallet': '未检测到钱包',
    'toast.connectFirst': '请先连接钱包',
    'toast.enterStake': '请输入投注金额',
    'toast.insufficient': '钱包 USDT 不足',
    'toast.selectOdd': '请先选择赔率',
    'toast.contractPending': '非托管下注需要 BettingVault 合约部署后才能使用（下一步）',
    'toast.betChainNotEnabled': '目前仅 ENI 测试网支持真实下注，请切换网络 (当前：{0})',
    'toast.vaultUnset': '金库地址尚未设置，请先配置 VAULT_ADDRESS',
    'toast.usdtNotFound': '当前链上找不到 USDT 合约',
    'toast.sendingBet': '正在签署下注交易…',
    'toast.waitingConfirm': '交易已发送，等待确认：{0}',
    'toast.betSuccess': '下注成功：{0} USDT · TxHash {1}',
    'toast.betFail': '下注失败：{0}',
    'toast.claiming': '正在领取 {0} USDT…',
    'toast.claimed': '{0} USDT 已到账钱包',
    'toast.wipWallet': '{0} 即将支持（目前仅 MetaMask 已接入）',
    'toast.connected': '已连接：{0}',
    'toast.connectFail': '连接失败：{0}',

    'chip.loading': '{0}：读取中…',
    'chip.notSupported': '⚠ 链 {0} 暂不支持',
    'chip.fail': '余额读取失败 · 点击重试',

    'fixturesProgress.loading': '正在从 ESPN 拉取赛程…',
    'fixturesProgress.ok': '赛程：ESPN · 赔率：{0} · {1} 场',
    'fixturesProgress.fail': 'API 加载失败，使用本地 mock 数据（{0}）',
    'fixturesProgress.oddsReal': 'bet365 via The Odds API',
    'fixturesProgress.oddsMock': '占位（未配置 Odds API Key）',
  },
};

// ============================================================
// 國家/球隊中文譯名對照表（FIFA 成員國，繁體中文）
// 用於把 ESPN 回傳的英文球隊名轉成專業的繁體譯名
// ============================================================
const TEAM_NAMES_ZH_TW = {
  // 東道主 + 傳統強權
  'united states': '美國', 'usa': '美國', 'us': '美國',
  'mexico': '墨西哥',
  'canada': '加拿大',
  'brazil': '巴西',
  'argentina': '阿根廷',
  'france': '法國',
  'england': '英格蘭',
  'spain': '西班牙',
  'germany': '德國',
  'portugal': '葡萄牙',
  'netherlands': '荷蘭', 'holland': '荷蘭',
  'belgium': '比利時',
  'italy': '義大利',
  'croatia': '克羅埃西亞',
  'switzerland': '瑞士',
  'denmark': '丹麥',
  'austria': '奧地利',
  'poland': '波蘭',
  'serbia': '塞爾維亞',
  'czech republic': '捷克', 'czechia': '捷克',
  'slovakia': '斯洛伐克',
  'slovenia': '斯洛維尼亞',
  'hungary': '匈牙利',
  'romania': '羅馬尼亞',
  'bulgaria': '保加利亞',
  'greece': '希臘',
  'turkey': '土耳其', 'türkiye': '土耳其',
  'russia': '俄羅斯',
  'ukraine': '烏克蘭',
  'belarus': '白俄羅斯',
  'sweden': '瑞典',
  'norway': '挪威',
  'finland': '芬蘭',
  'iceland': '冰島',
  'ireland': '愛爾蘭', 'republic of ireland': '愛爾蘭',
  'northern ireland': '北愛爾蘭',
  'scotland': '蘇格蘭',
  'wales': '威爾斯',
  'albania': '阿爾巴尼亞',
  'kosovo': '科索沃',
  'bosnia and herzegovina': '波士尼亞與赫塞哥維納', 'bosnia': '波士尼亞與赫塞哥維納',
  'north macedonia': '北馬其頓', 'macedonia': '北馬其頓',
  'montenegro': '蒙特內哥羅',
  'moldova': '摩爾多瓦',
  'estonia': '愛沙尼亞',
  'latvia': '拉脫維亞',
  'lithuania': '立陶宛',
  'luxembourg': '盧森堡',
  'malta': '馬爾他',
  'cyprus': '賽普勒斯',
  'andorra': '安道爾',
  'san marino': '聖馬利諾',
  'liechtenstein': '列支敦斯登',
  'gibraltar': '直布羅陀',
  'faroe islands': '法羅群島',

  // 南美洲
  'uruguay': '烏拉圭',
  'colombia': '哥倫比亞',
  'chile': '智利',
  'peru': '秘魯',
  'ecuador': '厄瓜多',
  'paraguay': '巴拉圭',
  'bolivia': '玻利維亞',
  'venezuela': '委內瑞拉',

  // 中北美洲 + 加勒比
  'costa rica': '哥斯大黎加',
  'panama': '巴拿馬',
  'honduras': '宏都拉斯',
  'guatemala': '瓜地馬拉',
  'el salvador': '薩爾瓦多',
  'nicaragua': '尼加拉瓜',
  'belize': '貝里斯',
  'jamaica': '牙買加',
  'haiti': '海地',
  'cuba': '古巴',
  'dominican republic': '多明尼加',
  'trinidad and tobago': '千里達及托巴哥',
  'curaçao': '古拉索', 'curacao': '古拉索',
  'suriname': '蘇利南',
  'guyana': '蓋亞那',
  'bermuda': '百慕達',
  'bahamas': '巴哈馬',
  'barbados': '巴貝多',
  'grenada': '格瑞那達',
  'saint lucia': '聖露西亞',
  'saint kitts and nevis': '聖克里斯多福及尼維斯',
  'saint vincent and the grenadines': '聖文森及格瑞那丁',
  'antigua and barbuda': '安地卡及巴布達',
  'dominica': '多米尼克',
  'puerto rico': '波多黎各',
  'montserrat': '蒙哲臘',

  // 亞洲 AFC
  'japan': '日本',
  'south korea': '南韓', 'korea republic': '南韓', 'republic of korea': '南韓',
  'north korea': '北韓', 'korea dpr': '北韓', 'dpr korea': '北韓',
  'australia': '澳洲',
  'iran': '伊朗', 'ir iran': '伊朗', 'iran islamic republic': '伊朗',
  'iraq': '伊拉克',
  'saudi arabia': '沙烏地阿拉伯',
  'qatar': '卡達',
  'united arab emirates': '阿聯', 'uae': '阿聯',
  'oman': '阿曼',
  'bahrain': '巴林',
  'kuwait': '科威特',
  'jordan': '約旦',
  'lebanon': '黎巴嫩',
  'syria': '敘利亞',
  'palestine': '巴勒斯坦',
  'yemen': '葉門',
  'israel': '以色列',
  'uzbekistan': '烏茲別克',
  'kazakhstan': '哈薩克',
  'kyrgyzstan': '吉爾吉斯',
  'tajikistan': '塔吉克',
  'turkmenistan': '土庫曼',
  'afghanistan': '阿富汗',
  'china': '中國', 'china pr': '中國', 'chinese taipei': '中華台北',
  'taiwan': '台灣',
  'hong kong': '香港',
  'macau': '澳門', 'macao': '澳門',
  'mongolia': '蒙古',
  'india': '印度',
  'pakistan': '巴基斯坦',
  'bangladesh': '孟加拉',
  'sri lanka': '斯里蘭卡',
  'nepal': '尼泊爾',
  'bhutan': '不丹',
  'maldives': '馬爾地夫',
  'thailand': '泰國',
  'vietnam': '越南',
  'malaysia': '馬來西亞',
  'singapore': '新加坡',
  'indonesia': '印尼',
  'philippines': '菲律賓',
  'myanmar': '緬甸',
  'cambodia': '柬埔寨',
  'laos': '寮國',
  'brunei': '汶萊',
  'timor-leste': '東帝汶', 'east timor': '東帝汶',

  // 大洋洲 OFC
  'new zealand': '紐西蘭',
  'fiji': '斐濟',
  'tahiti': '大溪地',
  'solomon islands': '索羅門群島',
  'papua new guinea': '巴布亞紐幾內亞',
  'vanuatu': '萬那杜',
  'new caledonia': '新喀里多尼亞',
  'samoa': '薩摩亞',
  'american samoa': '美屬薩摩亞',
  'tonga': '東加',
  'cook islands': '庫克群島',

  // 非洲 CAF
  'morocco': '摩洛哥',
  'algeria': '阿爾及利亞',
  'tunisia': '突尼西亞',
  'libya': '利比亞',
  'egypt': '埃及',
  'nigeria': '奈及利亞',
  'senegal': '塞內加爾',
  'ghana': '迦納',
  'cameroon': '喀麥隆',
  'ivory coast': '象牙海岸', 'côte d\'ivoire': '象牙海岸', 'cote d\'ivoire': '象牙海岸',
  'south africa': '南非',
  'mali': '馬利',
  'burkina faso': '布吉納法索',
  'guinea': '幾內亞',
  'guinea-bissau': '幾內亞比索',
  'equatorial guinea': '赤道幾內亞',
  'cape verde': '維德角', 'cabo verde': '維德角',
  'sierra leone': '獅子山',
  'liberia': '賴比瑞亞',
  'togo': '多哥',
  'benin': '貝南',
  'niger': '尼日',
  'chad': '查德',
  'central african republic': '中非共和國',
  'gabon': '加彭',
  'congo': '剛果', 'republic of congo': '剛果',
  'dr congo': '剛果民主共和國', 'democratic republic of the congo': '剛果民主共和國', 'congo dr': '剛果民主共和國',
  'angola': '安哥拉',
  'zambia': '尚比亞',
  'zimbabwe': '辛巴威',
  'malawi': '馬拉威',
  'mozambique': '莫三比克',
  'botswana': '波札那',
  'namibia': '納米比亞',
  'lesotho': '賴索托',
  'eswatini': '史瓦帝尼', 'swaziland': '史瓦帝尼',
  'madagascar': '馬達加斯加',
  'mauritius': '模里西斯',
  'seychelles': '塞席爾',
  'comoros': '葛摩',
  'kenya': '肯亞',
  'uganda': '烏干達',
  'tanzania': '坦尚尼亞',
  'rwanda': '盧安達',
  'burundi': '蒲隆地',
  'ethiopia': '衣索比亞',
  'eritrea': '厄利垂亞',
  'djibouti': '吉布地',
  'somalia': '索馬利亞',
  'south sudan': '南蘇丹',
  'sudan': '蘇丹',
  'sao tome and principe': '聖多美普林西比',
  'mauritania': '茅利塔尼亞',
  'gambia': '甘比亞',

  // 佔位 / 其他
  'tbd': '待定',
};

// 簡體中文譯名（中國大陸慣用譯法，與繁體可能不同）
const TEAM_NAMES_ZH_CN = {
  // 东道主 + 传统强权
  'united states': '美国', 'usa': '美国', 'us': '美国',
  'mexico': '墨西哥',
  'canada': '加拿大',
  'brazil': '巴西',
  'argentina': '阿根廷',
  'france': '法国',
  'england': '英格兰',
  'spain': '西班牙',
  'germany': '德国',
  'portugal': '葡萄牙',
  'netherlands': '荷兰', 'holland': '荷兰',
  'belgium': '比利时',
  'italy': '意大利',
  'croatia': '克罗地亚',
  'switzerland': '瑞士',
  'denmark': '丹麦',
  'austria': '奥地利',
  'poland': '波兰',
  'serbia': '塞尔维亚',
  'czech republic': '捷克', 'czechia': '捷克',
  'slovakia': '斯洛伐克',
  'slovenia': '斯洛文尼亚',
  'hungary': '匈牙利',
  'romania': '罗马尼亚',
  'bulgaria': '保加利亚',
  'greece': '希腊',
  'turkey': '土耳其', 'türkiye': '土耳其',
  'russia': '俄罗斯',
  'ukraine': '乌克兰',
  'belarus': '白俄罗斯',
  'sweden': '瑞典',
  'norway': '挪威',
  'finland': '芬兰',
  'iceland': '冰岛',
  'ireland': '爱尔兰', 'republic of ireland': '爱尔兰',
  'northern ireland': '北爱尔兰',
  'scotland': '苏格兰',
  'wales': '威尔士',
  'albania': '阿尔巴尼亚',
  'kosovo': '科索沃',
  'bosnia and herzegovina': '波黑', 'bosnia': '波黑',
  'north macedonia': '北马其顿', 'macedonia': '北马其顿',
  'montenegro': '黑山',
  'moldova': '摩尔多瓦',
  'estonia': '爱沙尼亚',
  'latvia': '拉脱维亚',
  'lithuania': '立陶宛',
  'luxembourg': '卢森堡',
  'malta': '马耳他',
  'cyprus': '塞浦路斯',
  'andorra': '安道尔',
  'san marino': '圣马力诺',
  'liechtenstein': '列支敦士登',
  'gibraltar': '直布罗陀',
  'faroe islands': '法罗群岛',

  // 南美洲
  'uruguay': '乌拉圭',
  'colombia': '哥伦比亚',
  'chile': '智利',
  'peru': '秘鲁',
  'ecuador': '厄瓜多尔',
  'paraguay': '巴拉圭',
  'bolivia': '玻利维亚',
  'venezuela': '委内瑞拉',

  // 中北美洲 + 加勒比
  'costa rica': '哥斯达黎加',
  'panama': '巴拿马',
  'honduras': '洪都拉斯',
  'guatemala': '危地马拉',
  'el salvador': '萨尔瓦多',
  'nicaragua': '尼加拉瓜',
  'belize': '伯利兹',
  'jamaica': '牙买加',
  'haiti': '海地',
  'cuba': '古巴',
  'dominican republic': '多米尼加',
  'trinidad and tobago': '特立尼达和多巴哥',
  'curaçao': '库拉索', 'curacao': '库拉索',
  'suriname': '苏里南',
  'guyana': '圭亚那',
  'bermuda': '百慕大',
  'bahamas': '巴哈马',
  'barbados': '巴巴多斯',
  'grenada': '格林纳达',
  'saint lucia': '圣卢西亚',
  'saint kitts and nevis': '圣基茨和尼维斯',
  'saint vincent and the grenadines': '圣文森特和格林纳丁斯',
  'antigua and barbuda': '安提瓜和巴布达',
  'dominica': '多米尼克',
  'puerto rico': '波多黎各',
  'montserrat': '蒙特塞拉特',

  // 亚洲 AFC
  'japan': '日本',
  'south korea': '韩国', 'korea republic': '韩国', 'republic of korea': '韩国',
  'north korea': '朝鲜', 'korea dpr': '朝鲜', 'dpr korea': '朝鲜',
  'australia': '澳大利亚',
  'iran': '伊朗', 'ir iran': '伊朗', 'iran islamic republic': '伊朗',
  'iraq': '伊拉克',
  'saudi arabia': '沙特阿拉伯',
  'qatar': '卡塔尔',
  'united arab emirates': '阿联酋', 'uae': '阿联酋',
  'oman': '阿曼',
  'bahrain': '巴林',
  'kuwait': '科威特',
  'jordan': '约旦',
  'lebanon': '黎巴嫩',
  'syria': '叙利亚',
  'palestine': '巴勒斯坦',
  'yemen': '也门',
  'israel': '以色列',
  'uzbekistan': '乌兹别克斯坦',
  'kazakhstan': '哈萨克斯坦',
  'kyrgyzstan': '吉尔吉斯斯坦',
  'tajikistan': '塔吉克斯坦',
  'turkmenistan': '土库曼斯坦',
  'afghanistan': '阿富汗',
  'china': '中国', 'china pr': '中国', 'chinese taipei': '中华台北',
  'taiwan': '中国台湾',
  'hong kong': '中国香港',
  'macau': '中国澳门', 'macao': '中国澳门',
  'mongolia': '蒙古',
  'india': '印度',
  'pakistan': '巴基斯坦',
  'bangladesh': '孟加拉国',
  'sri lanka': '斯里兰卡',
  'nepal': '尼泊尔',
  'bhutan': '不丹',
  'maldives': '马尔代夫',
  'thailand': '泰国',
  'vietnam': '越南',
  'malaysia': '马来西亚',
  'singapore': '新加坡',
  'indonesia': '印度尼西亚',
  'philippines': '菲律宾',
  'myanmar': '缅甸',
  'cambodia': '柬埔寨',
  'laos': '老挝',
  'brunei': '文莱',
  'timor-leste': '东帝汶', 'east timor': '东帝汶',

  // 大洋洲 OFC
  'new zealand': '新西兰',
  'fiji': '斐济',
  'tahiti': '塔希提',
  'solomon islands': '所罗门群岛',
  'papua new guinea': '巴布亚新几内亚',
  'vanuatu': '瓦努阿图',
  'new caledonia': '新喀里多尼亚',
  'samoa': '萨摩亚',
  'american samoa': '美属萨摩亚',
  'tonga': '汤加',
  'cook islands': '库克群岛',

  // 非洲 CAF
  'morocco': '摩洛哥',
  'algeria': '阿尔及利亚',
  'tunisia': '突尼斯',
  'libya': '利比亚',
  'egypt': '埃及',
  'nigeria': '尼日利亚',
  'senegal': '塞内加尔',
  'ghana': '加纳',
  'cameroon': '喀麦隆',
  'ivory coast': '科特迪瓦', 'côte d\'ivoire': '科特迪瓦', 'cote d\'ivoire': '科特迪瓦',
  'south africa': '南非',
  'mali': '马里',
  'burkina faso': '布基纳法索',
  'guinea': '几内亚',
  'guinea-bissau': '几内亚比绍',
  'equatorial guinea': '赤道几内亚',
  'cape verde': '佛得角', 'cabo verde': '佛得角',
  'sierra leone': '塞拉利昂',
  'liberia': '利比里亚',
  'togo': '多哥',
  'benin': '贝宁',
  'niger': '尼日尔',
  'chad': '乍得',
  'central african republic': '中非共和国',
  'gabon': '加蓬',
  'congo': '刚果', 'republic of congo': '刚果共和国',
  'dr congo': '刚果民主共和国', 'democratic republic of the congo': '刚果民主共和国', 'congo dr': '刚果民主共和国',
  'angola': '安哥拉',
  'zambia': '赞比亚',
  'zimbabwe': '津巴布韦',
  'malawi': '马拉维',
  'mozambique': '莫桑比克',
  'botswana': '博茨瓦纳',
  'namibia': '纳米比亚',
  'lesotho': '莱索托',
  'eswatini': '斯威士兰', 'swaziland': '斯威士兰',
  'madagascar': '马达加斯加',
  'mauritius': '毛里求斯',
  'seychelles': '塞舌尔',
  'comoros': '科摩罗',
  'kenya': '肯尼亚',
  'uganda': '乌干达',
  'tanzania': '坦桑尼亚',
  'rwanda': '卢旺达',
  'burundi': '布隆迪',
  'ethiopia': '埃塞俄比亚',
  'eritrea': '厄立特里亚',
  'djibouti': '吉布提',
  'somalia': '索马里',
  'south sudan': '南苏丹',
  'sudan': '苏丹',
  'sao tome and principe': '圣多美和普林西比',
  'mauritania': '毛里塔尼亚',
  'gambia': '冈比亚',

  // 占位
  'tbd': '待定',
};

// 英文版（主要用於把 ESPN 簡寫正規化，例如 USA → United States）
const TEAM_NAMES_EN = {
  'usa': 'United States', 'us': 'United States',
  'uae': 'United Arab Emirates',
  'ir iran': 'Iran', 'iran islamic republic': 'Iran',
  'korea republic': 'South Korea', 'republic of korea': 'South Korea',
  'korea dpr': 'North Korea', 'dpr korea': 'North Korea',
  'china pr': 'China',
  'türkiye': 'Turkey',
  'czechia': 'Czech Republic',
  'côte d\'ivoire': 'Ivory Coast', 'cote d\'ivoire': 'Ivory Coast',
  'cabo verde': 'Cape Verde',
  'congo dr': 'DR Congo', 'democratic republic of the congo': 'DR Congo',
  'tbd': 'TBD',
};

// ============================================================
// i18n Functions
// ============================================================

// 依當前語言把 ESPN 回傳的英文隊名轉成顯示字串
function localizeTeam(name) {
  if (!name) return '';
  const key = String(name).trim().toLowerCase();
  if (currentLang === 'zh-TW') return TEAM_NAMES_ZH_TW[key] || name;
  if (currentLang === 'zh-CN') return TEAM_NAMES_ZH_CN[key] || name;
  return TEAM_NAMES_EN[key] || name;
}

let currentLang = (typeof localStorage !== 'undefined' && localStorage.getItem('atmno1_lang')) || 'zh-TW';
if (!I18N[currentLang]) currentLang = 'zh-TW';

// 核心翻譯函數：t('key', arg0, arg1...) → 支援 {0} {1} 插值
function t(key, ...args) {
  const dict = I18N[currentLang] || I18N['en'];
  let str = dict[key];
  if (str == null) {
    // fallback 到英文，否則回傳 key 本身
    str = (I18N['en'] && I18N['en'][key]) || key;
  }
  args.forEach((v, i) => { str = str.replace(new RegExp('\\{' + i + '\\}', 'g'), v); });
  return str;
}

// 套用到所有 data-i18n 的 DOM
function applyI18n() {
  document.documentElement.lang = currentLang === 'en' ? 'en'
                                : currentLang === 'zh-CN' ? 'zh-CN'
                                : 'zh-TW';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translated = t(key);
    // 某些 modal 內容包含 HTML 粗體
    if (translated.includes('<strong>')) {
      el.innerHTML = translated;
    } else {
      el.textContent = translated;
    }
  });
  // 更新語言切換按鈕高亮
  document.querySelectorAll('.lang-toggle button').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-lang') === currentLang);
  });
  document.querySelectorAll('.profile-lang-btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-lang') === currentLang);
  });
  document.querySelectorAll('.pm-lang-pill').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-lang') === currentLang);
  });
  // 更新 title
  document.title = currentLang === 'zh-TW' ? 'ATMNO.1 · Web3 預測市場' : currentLang === 'zh-CN' ? 'ATMNO.1 · Web3 预测市场' : 'ATMNO.1 · Web3 Prediction Market';
}

function setLang(lang) {
  if (!I18N[lang] || lang === currentLang) return;
  // Show full-page loading overlay
  const langNames = { 'zh-TW': '繁體中文', 'zh-CN': '简体中文', 'en': 'English' };
  const overlay = document.createElement('div');
  overlay.className = 'lang-loading-overlay';
  overlay.innerHTML = `<div class="lang-spinner"></div><div class="lang-text">切换至 ${langNames[lang] || lang}…</div>`;
  document.body.appendChild(overlay);
  // Save language then reload — guarantees 100% page translation
  try { localStorage.setItem('atmno1_lang', lang); } catch (e) {}
  setTimeout(() => { location.reload(); }, 700);
}

// ============================================================
// 主題切換（深色 / 淺色 / 自動）
// ============================================================
// themeMode stores the user choice: 'dark' | 'light' | 'auto'
// Migrate from old key if new key not set
let themeMode = (typeof localStorage !== 'undefined' && (localStorage.getItem('atmno1_themeMode') || localStorage.getItem('atmno1_theme'))) || 'light';
if (!['dark','light','auto'].includes(themeMode)) themeMode = 'light';
// currentTheme is the resolved display theme: always 'dark' or 'light'
let currentTheme = themeMode === 'auto' ? getAutoTheme() : themeMode;

// Determine theme based on time of day: 6:00–18:00 = light, else dark
function getAutoTheme() {
  const h = new Date().getHours();
  return (h >= 6 && h < 18) ? 'light' : 'dark';
}

const THEME_ICONS = { dark: '🌙', light: '☀️', auto: '🔄' };

function applyTheme() {
  currentTheme = themeMode === 'auto' ? getAutoTheme() : themeMode;
  document.documentElement.setAttribute('data-theme', currentTheme);
  const btn = document.getElementById('themeToggleBtn');
  if (btn) {
    btn.textContent = THEME_ICONS[themeMode] || '🌙';
    btn.title = themeMode === 'auto' ? 'Auto' : themeMode === 'dark' ? 'Dark' : 'Light';
  }
}

function setTheme(theme) {
  if (!['dark','light','auto'].includes(theme)) return;
  themeMode = theme;
  try { localStorage.setItem('atmno1_themeMode', theme); } catch (e) {}
  applyTheme();
  if (theme === 'auto') startAutoThemeCheck(); else stopAutoThemeCheck();
}

function toggleTheme() {
  const order = ['dark', 'light', 'auto'];
  const next = order[(order.indexOf(themeMode) + 1) % order.length];
  setTheme(next);
}

// Single-button theme toggle: dark → light → auto → dark
function toggleThemeBtn() {
  toggleTheme();
}

// Legacy compat
function setThemeMode(mode) { setTheme(mode); }

// Auto-mode: check every 60s if the resolved theme should change
let _autoThemeTimer = null;
function startAutoThemeCheck() {
  stopAutoThemeCheck();
  if (themeMode !== 'auto') return;
  _autoThemeTimer = setInterval(() => {
    if (themeMode !== 'auto') { stopAutoThemeCheck(); return; }
    const resolved = getAutoTheme();
    if (resolved !== currentTheme) applyTheme();
  }, 60000);
}
function stopAutoThemeCheck() {
  if (_autoThemeTimer) { clearInterval(_autoThemeTimer); _autoThemeTimer = null; }
}

// 在 DOM 解析完前先把 data-theme 設上，避免閃一下深色再變淺色
document.documentElement.setAttribute('data-theme', currentTheme);
// Start auto-check if mode is auto
if (themeMode === 'auto') startAutoThemeCheck();

// ============================================================
// 平台手續費：盈利部分的 10% 歸平台
// ============================================================
const PLATFORM_FEE_BPS = 1000; // 10% = 1000 basis points

// 平台手續費收款地址
const FEE_RECIPIENT = '0x4E51C9E685551514db33A3A8A0b99A7FA1b418AE';

// 金庫地址
const VAULT_ADDRESS = '0xF72cB6ceF735c83AB69782d39ce90A3dC48a9284';

// 允許真實鏈上下注的鏈 ID 白名單
const BET_ENABLED_CHAINS = new Set([174]);

function calcFee(stake, grossPayout) {
  const profit = Math.max(0, grossPayout - stake);
  const fee = +(profit * PLATFORM_FEE_BPS / 10000).toFixed(6);
  const net = +(grossPayout - fee).toFixed(6);
  return { grossPayout, profit, fee, net };
}

// ============================================================
// 钱包连接：真实 MetaMask + ethers.js v6
// ============================================================

// 各链上的 USDT 合约地址
const USDT_CONTRACTS = {
  56:    { name: 'BNB Chain',    address: '0x55d398326f99059fF775485246999027B3197955', decimals: 18 },
  173:   { name: 'ENI',          address: '0xDC1a8A35b0BaA3229b13f348ED708a2fd50b5e3a', decimals: 18 },
  174:   { name: 'ENI Testnet',  address: '0x605AfFcF6979AfddabE6A050b182bDC390fC71fF', decimals: 18 },
};

// 链元数据
const CHAIN_META = {
  56:    { name: 'BNB Chain',    rpc: 'https://bsc-dataseed.binance.org',  symbol: 'BNB',  explorer: 'https://bscscan.com'             },
  173:   { name: 'ENI',          rpc: 'https://rpc.eniac.network',         symbol: 'EGAS', explorer: 'https://scan.eniac.network'      },
  174:   { name: 'ENI Testnet',  rpc: 'https://rpc-testnet.eniac.network', symbol: 'EGAS', explorer: 'https://scan-testnet.eniac.network', testnet: true, faucet: 'https://faucet-testnet.eniac.network' },
};

const ERC20_ABI = [
  'function balanceOf(address) view returns (uint256)',
  'function decimals() view returns (uint8)',
  'function symbol() view returns (string)',
];

// ERC-20 write ABI（transfer + approve）
const ERC20_WRITE_ABI = [
  'function transfer(address to, uint256 value) returns (bool)',
  'function approve(address spender, uint256 value) returns (bool)',
  'function allowance(address owner, address spender) view returns (uint256)',
  'function balanceOf(address) view returns (uint256)',
  'function decimals() view returns (uint8)',
];

let provider = null;
let signer = null;

// 全局状态
const state = {
  connected: false,
  address: '',
  chainId: null,
  balance: 0,
  picks: [],   // { matchId, team: 'h'|'d'|'a', odd: number }
  myBets: [],  // 已提交的注单
};

// 主入口：真实连接 MetaMask
async function connectMetaMask() {
  if (!window.ethereum) {
    toast(t('toast.noMetaMask'));
    window.open('https://metamask.io/download/', '_blank');
    return;
  }
  try {
    provider = new ethers.BrowserProvider(window.ethereum);
    const accounts = await provider.send('eth_requestAccounts', []);
    if (!accounts || accounts.length === 0) throw new Error('未授权账户');

    signer = await provider.getSigner();
    state.address = accounts[0];
    state.connected = true;

    const network = await provider.getNetwork();
    state.chainId = Number(network.chainId);

    // 监听事件（只注册一次）
    if (!window._walletListenersBound) {
      window.ethereum.on('accountsChanged', handleAccountsChanged);
      window.ethereum.on('chainChanged', handleChainChanged);
      window._walletListenersBound = true;
    }

    updateWalletUI();
    toggleModal('walletModal', false);
    toast(t('toast.connected', shortAddr(state.address)));
    await refreshBalance();
    // 从 localStorage 加载该钱包的历史注单
    loadMyBets();
    renderMyBets();
  } catch (e) {
    console.error('[connectMetaMask]', e);
    if (e.code === 4001 || /reject/i.test(e.message || '')) {
      toast(t('toast.userCancel'));
    } else {
      toast(t('toast.connectFail', (e.shortMessage || e.message || 'unknown')));
    }
  }
}

// 从链上读取真实 USDT 余额
async function refreshBalance() {
  if (!provider || !state.address || !state.chainId) return;
  const usdt = USDT_CONTRACTS[state.chainId];
  const profBal = document.getElementById('profileBalance');

  if (!usdt) {
    if (profBal) profBal.textContent = t('chip.notSupported', state.chainId);
    state.balance = 0;
    return;
  }

  if (profBal) profBal.textContent = t('chip.loading', usdt.name);

  // Try 1: 走 MetaMask 注入的 provider
  let lastErr = null;
  try {
    const contract = new ethers.Contract(usdt.address, ERC20_ABI, provider);
    const raw = await contract.balanceOf(state.address);
    const formatted = Number(ethers.formatUnits(raw, usdt.decimals));
    state.balance = formatted;
    if (profBal) profBal.textContent = `${formatted.toFixed(2)} USDT (${usdt.name})`;
    return;
  } catch (e) {
    lastErr = e;
    console.warn('[refreshBalance] MetaMask provider failed, trying public RPC:', e);
  }

  // Try 2: fallback 到公开 RPC
  const meta = CHAIN_META[state.chainId];
  if (meta?.rpc) {
    try {
      const roProvider = new ethers.JsonRpcProvider(meta.rpc);
      const contract = new ethers.Contract(usdt.address, ERC20_ABI, roProvider);
      const raw = await contract.balanceOf(state.address);
      const formatted = Number(ethers.formatUnits(raw, usdt.decimals));
      state.balance = formatted;
      if (profBal) profBal.textContent = `${formatted.toFixed(2)} USDT (${usdt.name})`;
      return;
    } catch (e) {
      lastErr = e;
      console.warn('[refreshBalance] public RPC also failed:', e);
    }
  }

  if (profBal) profBal.textContent = t('chip.fail');
  state.balance = 0;
}

// 允许用户点击 chip 查看错误详情 / 重试 或 打开钱包连接
function onBalanceChipClick() {
  // Legacy — redirect to toggleMyDropdown
  toggleMyDropdown();
}

function handleAccountsChanged(accounts) {
  if (!accounts || accounts.length === 0) {
    disconnectWallet();
    toast(t('toast.walletBroken'));
  } else {
    state.address = accounts[0];
    updateWalletUI();
    refreshBalance();
    loadMyBets();
    renderMyBets();
    toast(t('toast.switchedAccount', shortAddr(state.address)));
  }
}

async function handleChainChanged(chainIdHex) {
  state.chainId = parseInt(chainIdHex, 16);
  // 切链后立即刷新 provider/signer
  try {
    provider = new ethers.BrowserProvider(window.ethereum);
    signer = await provider.getSigner();
  } catch (e) { console.warn('[handleChainChanged] refresh provider failed:', e); }
  const chainName = USDT_CONTRACTS[state.chainId]?.name || ('chainId ' + state.chainId);
  updateWalletUI();
  toast(t('toast.chainSwitch', chainName));
  refreshBalance();
}

function getChainIcon(chainId) {
  const icons = { 56: '🟡', 173: '🟣', 174: '🧪' };
  return icons[chainId] || '⛓';
}

function updateWalletUI() {
  const btn = document.getElementById('connectBtn');
  const chainName = CHAIN_META[state.chainId]?.name || ('Chain ' + state.chainId);

  // Merged wallet button: show chain icon + abbreviated address
  if (btn) {
    btn.innerHTML = getChainIcon(state.chainId) + ' ' + shortAddr(state.address);
    btn.classList.add('connected');
    btn.title = chainName + ' · ' + state.address;
  }

  const menuAddr = document.getElementById('menuAddr');
  if (menuAddr) menuAddr.textContent = state.address;
  // Update profile addr
  const profileAddr = document.getElementById('profileAddr');
  if (profileAddr) profileAddr.textContent = shortAddr(state.address);
  refreshSocialUI();
}

// ------------------------------------------------------------
// 钱包菜单操作
// ------------------------------------------------------------
function toggleWalletMenu(show) {
  const menu = document.getElementById('walletMenu');
  if (show === undefined) menu.classList.toggle('show');
  else menu.classList.toggle('show', show);
  // 互斥：打开链菜单时关闭"我的"
  if (menu.classList.contains('show')) {
    document.getElementById('profileMenu').classList.remove('show');
  }
}

function copyAddress() {
  if (!state.address) return;
  navigator.clipboard?.writeText(state.address);
  toast(t('toast.copied'));
  toggleWalletMenu(false);
}

function viewOnExplorer() {
  if (!state.address) return;
  const meta = CHAIN_META[state.chainId];
  const base = meta ? `${meta.explorer}/address/` : 'https://etherscan.io/address/';
  window.open(base + state.address, '_blank');
  toggleWalletMenu(false);
}

// 切换 / 添加网络
async function switchToChain(targetChainId) {
  if (!window.ethereum) { toast(t('toast.noWallet')); return; }
  const meta = CHAIN_META[targetChainId];
  if (!meta) { toast('Unknown chain: ' + targetChainId); return; }
  const hex = '0x' + targetChainId.toString(16);
  try {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: hex }],
    });
    toast(t('toast.switchedTo', meta.name));
  } catch (err) {
    if (err.code === 4902 || /Unrecognized chain/i.test(err.message || '')) {
      try {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [{
            chainId: hex,
            chainName: meta.name + ' Mainnet',
            nativeCurrency: { name: meta.symbol, symbol: meta.symbol, decimals: 18 },
            rpcUrls: [meta.rpc],
            blockExplorerUrls: [meta.explorer],
          }],
        });
        toast(t('toast.addedChain', meta.name));
      } catch (addErr) {
        console.error('[addChain]', addErr);
        toast(t('toast.addChainFail', (addErr.shortMessage || addErr.message || 'unknown')));
      }
    } else if (err.code === 4001) {
      toast(t('toast.switchCancel'));
    } else {
      console.error('[switchChain]', err);
      toast(t('toast.switchFail', (err.shortMessage || err.message || 'unknown')));
    }
  }
  toggleWalletMenu(false);
}

// 断开钱包
function disconnectWallet() {
  state.connected = false;
  state.address = '';
  state.chainId = null;
  state.balance = 0;
  state.myBets = [];
  provider = null;
  signer = null;
  const btn = document.getElementById('connectBtn');
  if (btn) {
    btn.textContent = t('wallet.connect');
    btn.classList.remove('connected');
  }
  const profBal = document.getElementById('profileBalance');
  if (profBal) profBal.textContent = '— USDT';
  const profAddr = document.getElementById('profileAddr');
  if (profAddr) profAddr.textContent = '—';
  // Hide wallet-connected-only profile items (profile card & social stay visible)
  ['profileAddrItem','profileBalanceItem','explorerDivider','explorerItem'].forEach(id => {
    const el = document.getElementById(id); if (el) el.style.display = 'none';
  });
  toggleWalletMenu(false);
  const pm = document.getElementById('profileMenu');
  if (pm) pm.classList.remove('show');
  const mb = document.getElementById('myBtn');
  if (mb) mb.classList.remove('open');
  renderMyBets();
  toast(t('toast.disconnected'));
}

// 其他钱包：暂未实现，给友好提示
function wipWallet(name) {
  toggleModal('walletModal', false);
  toast(t('toast.wipWallet', name));
}

// 縮短地址顯示 0x1234…abcd
function shortAddr(a) {
  if (!a || a.length < 10) return a || '';
  return a.slice(0, 6) + '…' + a.slice(-4);
}

// 页面加载时，如果之前已授权过这个 dApp，自动恢复连接状态
async function autoReconnect() {
  if (!window.ethereum) return;
  try {
    const accounts = await window.ethereum.request({ method: 'eth_accounts' });
    if (accounts && accounts.length > 0) {
      // 已经授权过，静默恢复
      provider = new ethers.BrowserProvider(window.ethereum);
      signer = await provider.getSigner();
      state.address = accounts[0];
      state.connected = true;
      const network = await provider.getNetwork();
      state.chainId = Number(network.chainId);
      if (!window._walletListenersBound) {
        window.ethereum.on('accountsChanged', handleAccountsChanged);
        window.ethereum.on('chainChanged', handleChainChanged);
        window._walletListenersBound = true;
      }
      updateWalletUI();
      await refreshBalance();
      loadMyBets();
      renderMyBets();
    }
  } catch (e) {
    console.warn('[autoReconnect]', e);
  }
}

// ============================================================
// 注单持久化：按钱包地址存入 localStorage
// ============================================================
function betsStorageKey() {
  return 'atmno1_bets_' + (state.address || '').toLowerCase();
}

function loadMyBets() {
  state.myBets = [];
  if (!state.address) return;
  try {
    const raw = localStorage.getItem(betsStorageKey());
    if (raw) state.myBets = JSON.parse(raw);
  } catch (e) {
    console.warn('[loadMyBets] parse error:', e);
  }
}

function saveMyBets() {
  if (!state.address) return;
  try {
    localStorage.setItem(betsStorageKey(), JSON.stringify(state.myBets));
  } catch (e) {
    console.warn('[saveMyBets] storage error:', e);
  }
}

// 根据当前语言获取队伍名
function teamName(team) {
  if (!team) return '—';
  if (typeof team === 'string') return localizeTeam(team);
  // 向後相容舊的 { 'zh-TW', en } 物件
  return team[currentLang] || team.en || team['zh-TW'] || '—';
}

// 根据下注类型生成 pick 字符串
function pickLabel(bet) {
  const home = teamName(bet.homeTeam);
  const away = teamName(bet.awayTeam);
  if (bet.pickType === 'h') return t('myBets.pickHomeWin', home);
  if (bet.pickType === 'a') return t('myBets.pickAwayWin', away);
  return t('myBets.pickDraw');
}

// 侧边栏版注单列表
function renderMyBets() {
  const list = document.getElementById('myBetsList');
  const count = document.getElementById('myBetsCount');
  if (!list || !count) return;
  if (!state.connected) {
    count.textContent = '0';
    list.innerHTML = `<div class="empty" style="color:var(--text-dim);font-size:13px;padding:12px 0;text-align:center;">${t('myBets.connectFirst')}</div>`;
    return;
  }
  if (!state.myBets || state.myBets.length === 0) {
    count.textContent = '0';
    list.innerHTML = `<div class="empty" style="color:var(--text-dim);font-size:13px;padding:12px 0;text-align:center;">${t('myBets.noBets')}</div>`;
    return;
  }
  count.textContent = state.myBets.length;
  list.innerHTML = state.myBets.map(b => {
    const matchLabel = `${teamName(b.homeTeam)} vs ${teamName(b.awayTeam)}`;
    const gross = +(b.stake * b.odd).toFixed(2);
    const { fee, net } = calcFee(b.stake, gross);

    const statusColor = b.status === 'won' ? 'var(--accent-2)'
                       : b.status === 'lost' ? 'var(--red)'
                       : 'var(--accent)';
    const statusText  = b.status === 'won' ? t('myBets.status.won')
                       : b.status === 'lost' ? t('myBets.status.lost')
                       : t('myBets.status.pending');

    // 收益描述行
    let payoutLine;
    if (b.status === 'won') {
      payoutLine = `${t('myBets.payoutLine', gross.toFixed(2), fee.toFixed(2))}<br/>
        <span style="color:var(--accent-2);font-weight:600;">${t('myBets.netLine', net.toFixed(2))}</span>`;
    } else if (b.status === 'lost') {
      payoutLine = `<span style="color:var(--red);">${t('myBets.lostLine', b.stake)}</span>`;
    } else {
      payoutLine = t('myBets.potential', net.toFixed(2));
    }

    let action = '';
    if (b.status === 'won' && !b.claimed) {
      action = `<button class="btn btn-small btn-green" style="padding:6px 12px;" onclick="claimPayout('${b.id}')">${t('myBets.claim', net.toFixed(2))}</button>`;
    } else if (b.claimed) {
      action = `<span style="color:var(--accent-2);font-size:11px;">${t('myBets.claimed')}</span>`;
    } else if (b.status === 'pending') {
      action = `<span style="color:var(--text-dim);font-size:11px;">${t('myBets.waiting')}</span>`;
    } else {
      action = `<span style="color:var(--text-dim);font-size:11px;">—</span>`;
    }
    return `
      <div style="background:var(--card-inner);border:1px solid var(--border);border-radius:10px;padding:10px 12px;margin-bottom:8px;font-size:12px;">
        <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
          <span style="font-weight:600;font-size:13px;color:var(--text);">${matchLabel}</span>
          <span style="color:${statusColor};font-size:11px;font-weight:600;">${statusText}</span>
        </div>
        <div style="color:var(--text-dim);margin-bottom:6px;line-height:1.5;">
          ${pickLabel(b)} ${t('myBets.stakeLine', b.odd, b.stake)}<br/>
          ${payoutLine}
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <a href="${(CHAIN_META[state.chainId]?.explorer || 'https://etherscan.io')}/tx/${b.txHash}" target="_blank" rel="noopener" title="${b.txHash}" style="color:var(--text-dim);font-size:10px;font-family:monospace;text-decoration:none;">${b.txHash.slice(0, 14)}…</a>
          ${action}
        </div>
      </div>
    `;
  }).join('');
}

// ============================================================
// 社交账号绑定（Twitter / Telegram）
// ============================================================
function socialStorageKey() {
  return 'atmno1_social_' + (state.address || '').toLowerCase();
}

function getSocial() {
  try {
    return JSON.parse(localStorage.getItem(socialStorageKey())) || {};
  } catch (e) { return {}; }
}

function saveSocial(data) {
  try { localStorage.setItem(socialStorageKey(), JSON.stringify(data)); } catch (e) {}
}

function refreshSocialUI() {
  const social = getSocial();

  // Profile card (avatar, username, uid)
  const avatarImg = document.getElementById('profileAvatarImg');
  const usernameEl = document.getElementById('profileUsername');
  const uidEl = document.getElementById('profileUid');
  if (avatarImg && social.avatar) avatarImg.textContent = social.avatar;
  if (usernameEl) usernameEl.textContent = social.username || '未设置昵称';
  if (uidEl) uidEl.textContent = 'UID: ' + getOrCreateUID();

  // Email
  const emailText = document.getElementById('profileEmailText');
  const emailStatus = document.getElementById('emailBindStatus');
  if (social.email) {
    if (emailText) emailText.textContent = social.email;
    if (emailStatus) { emailStatus.textContent = '已绑定'; emailStatus.className = 'pm-bind-tag bound'; }
  } else {
    if (emailText) emailText.textContent = '未绑定';
    if (emailStatus) { emailStatus.textContent = '去绑定'; emailStatus.className = 'pm-bind-tag unbind'; }
  }

  // Twitter
  const twText = document.getElementById('profileTwitterText');
  const twitterStatus = document.getElementById('twitterBindStatus');
  if (social.twitter) {
    if (twText) twText.textContent = social.twitter;
    if (twitterStatus) { twitterStatus.textContent = '已绑定'; twitterStatus.className = 'pm-bind-tag bound'; }
  } else {
    if (twText) twText.textContent = '未绑定';
    if (twitterStatus) { twitterStatus.textContent = '去绑定'; twitterStatus.className = 'pm-bind-tag unbind'; }
  }

  // Telegram
  const tgText = document.getElementById('profileTelegramText');
  const telegramStatus = document.getElementById('telegramBindStatus');
  if (social.telegram) {
    if (tgText) tgText.textContent = social.telegram;
    if (telegramStatus) { telegramStatus.textContent = '已绑定'; telegramStatus.className = 'pm-bind-tag bound'; }
  } else {
    if (tgText) tgText.textContent = '未绑定';
    if (telegramStatus) { telegramStatus.textContent = '去绑定'; telegramStatus.className = 'pm-bind-tag unbind'; }
  }

  // Update profile address
  const profileAddr = document.getElementById('profileAddr');
  if (profileAddr) profileAddr.textContent = state.connected ? shortAddr(state.address) : '—';
}

function toggleProfileMenu(show) {
  // Legacy compat — redirect to toggleMyDropdown
  const menu = document.getElementById('profileMenu');
  if (!menu) return;
  if (show === false) {
    menu.classList.remove('show');
    const mb = document.getElementById('myBtn');
    if (mb) mb.classList.remove('open');
  } else {
    toggleMyDropdown();
  }
}

function bindTwitter() {
  if (!state.connected) { toast(t('toast.connectFirst')); return; }
  const social = getSocial();
  if (social.twitter) { toast(t('social.alreadyBound', 'Twitter')); return; }
  const handle = prompt(t('social.enterTwitter'));
  if (!handle || !handle.trim()) return;
  let cleaned = handle.trim();
  if (!cleaned.startsWith('@')) cleaned = '@' + cleaned;
  if (!/^@[A-Za-z0-9_]{1,30}$/.test(cleaned)) {
    toast(t('social.invalidHandle', 'Twitter'));
    return;
  }
  social.twitter = cleaned;
  saveSocial(social);
  refreshSocialUI();
  toast(t('social.bindSuccess', 'Twitter', cleaned));
}

function bindTelegram() {
  if (!state.connected) { toast(t('toast.connectFirst')); return; }
  const social = getSocial();
  if (social.telegram) { toast(t('social.alreadyBound', 'Telegram')); return; }
  const handle = prompt(t('social.enterTelegram'));
  if (!handle || !handle.trim()) return;
  let cleaned = handle.trim();
  if (!cleaned.startsWith('@')) cleaned = '@' + cleaned;
  if (!/^@[A-Za-z0-9_]{1,40}$/.test(cleaned)) {
    toast(t('social.invalidHandle', 'Telegram'));
    return;
  }
  social.telegram = cleaned;
  saveSocial(social);
  refreshSocialUI();
  toast(t('social.bindSuccess', 'Telegram', cleaned));
}

function unbindTwitter() {
  const social = getSocial();
  if (!social.twitter) return;
  if (confirm(t('social.unbindConfirm', 'Twitter'))) {
    social.twitter = '';
    saveSocial(social);
    refreshSocialUI();
    toast(t('social.unbindSuccess', 'Twitter'));
  }
}

function unbindTelegram() {
  const social = getSocial();
  if (!social.telegram) return;
  if (confirm(t('social.unbindConfirm', 'Telegram'))) {
    social.telegram = '';
    saveSocial(social);
    refreshSocialUI();
    toast(t('social.unbindSuccess', 'Telegram'));
  }
}

// ============================================================
// Profile: Avatar, Username, UID, Email
// ============================================================
const AVATAR_EMOJIS = ['👤','😎','🤖','🦊','🐲','🎭','🎮','🚀','💎','🌟','🔥','🎯','👾','🧙','🦁','🐼','🎪','💰','🏆','⚡'];

function getOrCreateUID() {
  if (!state.address) return '—';
  let key = 'atmno1_uid_' + state.address.toLowerCase();
  let uid = localStorage.getItem(key);
  if (!uid) {
    uid = 'PX' + Math.random().toString(36).substring(2, 10).toUpperCase();
    localStorage.setItem(key, uid);
  }
  return uid;
}

function changeAvatar() {
  if (!state.connected) { toast(t('toast.connectFirst')); return; }
  const social = getSocial();
  const current = social.avatar || '👤';
  const idx = AVATAR_EMOJIS.indexOf(current);
  social.avatar = AVATAR_EMOJIS[(idx + 1) % AVATAR_EMOJIS.length];
  saveSocial(social);
  const el = document.getElementById('profileAvatarImg');
  if (el) el.textContent = social.avatar;
  toast('头像已更换');
}

function editUsername() {
  if (!state.connected) { toast(t('toast.connectFirst')); return; }
  const social = getSocial();
  const name = prompt('设置你的账号名：', social.username || '');
  if (name === null) return;
  const cleaned = name.trim().substring(0, 20);
  if (!cleaned) { toast('昵称不能为空'); return; }
  social.username = cleaned;
  saveSocial(social);
  const el = document.getElementById('profileUsername');
  if (el) el.textContent = cleaned;
  toast('昵称已更新');
}

function bindEmail() {
  if (!state.connected) { toast(t('toast.connectFirst')); return; }
  const social = getSocial();
  if (social.email) {
    if (confirm('当前绑定邮箱：' + social.email + '\n是否解绑？')) {
      social.email = '';
      saveSocial(social);
      refreshSocialUI();
      toast('邮箱已解绑');
    }
    return;
  }
  const email = prompt('请输入邮箱地址：');
  if (!email || !email.trim()) return;
  const cleaned = email.trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleaned)) {
    toast('邮箱格式不正确');
    return;
  }
  // In production: send verification code, verify, then bind
  social.email = cleaned;
  saveSocial(social);
  refreshSocialUI();
  toast('邮箱绑定成功：' + cleaned);
}

function showEmailAuth() {
  const email = prompt('请输入邮箱地址：');
  if (!email || !email.includes('@')) { toast('请输入有效的邮箱地址'); return; }
  const code = prompt('请输入验证码（演示模式输入任意6位数字）：');
  if (!code || code.length < 4) { toast('验证码无效'); return; }
  // Demo mode: just save
  localStorage.setItem('atmno1_email', email);
  toast('邮箱注册成功（演示模式）');
  refreshSocialUI();
}

function openSettings() {
  // Close profile menu
  const pm = document.getElementById('profileMenu');
  if (pm) pm.classList.remove('show');
  const mb = document.getElementById('myBtn');
  if (mb) mb.classList.remove('open');

  let modal = document.getElementById('settingsModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'overlay';
    modal.id = 'settingsModal';
    modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('show'); });
    const social = getSocial();
    const currentAvatar = social.avatar || '👤';
    modal.innerHTML = `
      <div class="modal" style="max-width:460px;">
        <button class="close" onclick="toggleModal('settingsModal', false)">×</button>
        <h3>⚙️ 设置</h3>
        <p class="desc">个性化你的账号</p>
        <div class="settings-grid">
          <div class="settings-item" onclick="editUsernameFromSettings()">
            <span class="si-icon">✏️</span>
            <div class="si-info">
              <div class="si-label">昵称</div>
              <div class="si-desc">设置你的显示名称</div>
            </div>
            <span class="si-value" id="settingsUsername">${social.username || '未设置'}</span>
          </div>
          <div class="settings-item" style="cursor:default;flex-direction:column;align-items:flex-start;">
            <div style="display:flex;align-items:center;gap:14px;width:100%;">
              <span class="si-icon">😎</span>
              <div class="si-info">
                <div class="si-label">头像</div>
                <div class="si-desc">选择你喜欢的头像</div>
              </div>
            </div>
            <div class="avatar-picker" id="avatarPicker">
              ${AVATAR_EMOJIS.map(e => `<div class="ap-item${e === currentAvatar ? ' active' : ''}" onclick="selectAvatar('${e}')">${e}</div>`).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  } else {
    // Update current values
    const social = getSocial();
    const un = modal.querySelector('#settingsUsername');
    if (un) un.textContent = social.username || '未设置';
    const picker = modal.querySelector('#avatarPicker');
    if (picker) {
      const currentAvatar = social.avatar || '👤';
      picker.querySelectorAll('.ap-item').forEach(el => {
        el.classList.toggle('active', el.textContent === currentAvatar);
      });
    }
  }
  modal.classList.add('show');
}

function editUsernameFromSettings() {
  const social = getSocial();
  const existing = document.getElementById('settingsNicknameInput');
  if (existing) { existing.focus(); return; }
  const container = document.querySelector('.settings-item .si-value#settingsUsername');
  if (!container) return;
  const parent = container.parentElement;
  container.style.display = 'none';
  const group = document.createElement('div');
  group.className = 'settings-input-group';
  group.id = 'settingsNicknameInputGroup';
  group.innerHTML = `<input class="settings-input" id="settingsNicknameInput" maxlength="20" value="${social.username || ''}" placeholder="输入昵称">
    <button class="settings-input-btn" onclick="saveNicknameFromSettings()">保存</button>`;
  parent.appendChild(group);
  const inp = document.getElementById('settingsNicknameInput');
  inp.focus();
  inp.addEventListener('keydown', e => { if (e.key === 'Enter') saveNicknameFromSettings(); });
}
function saveNicknameFromSettings() {
  const inp = document.getElementById('settingsNicknameInput');
  if (!inp) return;
  const cleaned = inp.value.trim().substring(0, 20);
  if (!cleaned) { toast('昵称不能为空'); return; }
  const social = getSocial();
  social.username = cleaned;
  saveSocial(social);
  const el = document.getElementById('profileUsername');
  if (el) el.textContent = cleaned;
  const sel = document.getElementById('settingsUsername');
  if (sel) { sel.textContent = cleaned; sel.style.display = ''; }
  const ha = document.getElementById('headerAvatar');
  if (ha) ha.textContent = social.avatar || '👤';
  const group = document.getElementById('settingsNicknameInputGroup');
  if (group) group.remove();
  toast('昵称已更新');
}

function selectAvatar(emoji) {
  const social = getSocial();
  social.avatar = emoji;
  saveSocial(social);
  const el = document.getElementById('profileAvatarImg');
  if (el) el.textContent = emoji;
  const ha = document.getElementById('headerAvatar');
  if (ha) ha.textContent = emoji;
  const picker = document.getElementById('avatarPicker');
  if (picker) {
    picker.querySelectorAll('.ap-item').forEach(item => {
      item.classList.toggle('active', item.textContent === emoji);
    });
  }
  toast('头像已更换');
}

// ============================================================
// Modal & Toast 工具函数
// ============================================================
function toggleModal(id, show) {
  document.getElementById(id).classList.toggle('show', show);
}
function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 2400);
}

// ============================================================
// Multi-page Navigation
// ============================================================
function navTo(target) {
  const routes = {
    'home': '/', 'trending': '/trending',
    'football': '/football', 'matches': '/football',
    'basketball': '/basketball',
    'events': '/events',
    'crypto': '/crypto',
    'myBets': '/mybets',
    'live': '/football',
    'atm': '/atm',
    'worldcup': '/worldcup',
  };
  if (target === 'contracts') { toggleModal('contractsModal', true); return; }
  if (target === 'docs') { toggleModal('docsModal', true); return; }
  const url = routes[target];
  if (url) {
    window.location.href = url;
  }
}

function switchCategory(cat) {
  navTo(cat);
}

function syncCategoryBar(cat) {
  // Sync inline header nav items
  document.querySelectorAll('.hn-item').forEach(el => {
    el.classList.toggle('active', el.getAttribute('data-cat') === cat);
  });
  // Legacy category-bar compat
  document.querySelectorAll('.category-item').forEach(el => {
    el.classList.toggle('active', el.getAttribute('data-cat') === cat);
  });
}

// ============================================================
// Dynamic Header Builder
// ============================================================
const NAV_CATS = [
  { id:'home', icon:'🏠', key:'nav.home', route:'home' },
  { id:'trending', icon:'🔥', key:'cat.trending' },
  { id:'football', icon:'⚽', key:'cat.football' },
  { id:'worldcup', icon:'🏆', key:'cat.worldcup', route:'worldcup' },
  { id:'basketball', icon:'🏀', key:'cat.basketball' },
  { id:'events', icon:'📰', key:'cat.events' },
  { id:'crypto', icon:'🪙', key:'cat.crypto' },
  { id:'atm', icon:'⚡', key:'cat.atm', route:'atm' },
];

function buildHeader(activeCat) {
  const navItems = NAV_CATS.map(c => {
    const isActive = c.id === activeCat || (c.id === 'home' && activeCat === 'trending');
    const onclick = c.route === 'home' ? "navTo('home')" : `switchCategory('${c.id}')`;
    return `<a class="hn-item${isActive ? ' active' : ''}" data-cat="${c.id}" onclick="${onclick}">${c.icon} <span data-i18n="${c.key}">${t(c.key)}</span></a>`;
  }).join('');

  const themeIcon = THEME_ICONS[themeMode] || '🌙';

  return `
    <div class="logo" onclick="navTo('home')" style="cursor:pointer;" title="ATMNO.1 · ATM Will Be No.1">
      <svg class="logo-mark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="36" height="36" aria-hidden="true">
        <defs>
          <linearGradient id="atm-lb" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#6d28d9"/>
            <stop offset="100%" stop-color="#8b5cf6"/>
          </linearGradient>
        </defs>
        <rect width="40" height="40" rx="10" fill="url(#atm-lb)"/>
        <path d="M 0 10 Q 0 0 10 0 L 30 0 Q 40 0 40 10 L 40 18 Q 20 26 0 18 Z" fill="rgba(255,255,255,0.09)"/>
        <path d="M 8,30 L 8,20 L 15,25 L 20,11 L 25,25 L 32,20 L 32,30 Z" fill="#fbbf24"/>
        <rect x="8" y="30" width="24" height="4.5" rx="2.25" fill="#f59e0b"/>
        <circle cx="8"  cy="19.5" r="2.5" fill="#fde68a"/>
        <circle cx="20" cy="10"   r="3"   fill="#fde68a"/>
        <circle cx="32" cy="19.5" r="2.5" fill="#fde68a"/>
      </svg>
      <span class="logo-wordmark">ATM<span class="logo-no1">NO.1</span></span>
    </div>
    <nav class="header-nav" id="headerNav">${navItems}</nav>
    <div class="header-right">
      <div class="hatm-ticker" id="headerATMPrice" title="Atletico Madrid Fan Token · ATM/USDT · 点击交易" onclick="window.open('https://www.binance.com/en/trade/ATM_USDT','_blank')" style="cursor:pointer;">
        <span class="hatm-sym">ATM</span><span class="hatm-price">…</span>
      </div>
      <button class="theme-toggle-btn" id="themeToggleBtn" onclick="toggleThemeBtn()" title="${themeMode === 'auto' ? 'Auto' : themeMode === 'dark' ? 'Dark' : 'Light'}">${themeIcon}</button>
      <div class="my-wrapper">
        <button class="btn-my" id="myBtn" onclick="toggleMyDropdown(event)"><span class="header-avatar" id="headerAvatar">👤</span><span data-i18n="profile.my">${t('profile.my')}</span> <span class="my-caret">▾</span></button>
        <div class="profile-menu" id="profileMenu">
          <div class="item" id="profileAddrItem" style="display:none;">
            <span class="ico">📍</span>
            <div style="flex:1;display:flex;flex-direction:column;gap:4px;">
              <div data-i18n="profile.myAddr" style="font-size:11px;color:var(--text-dim);">${t('profile.myAddr')}</div>
              <div id="profileAddr" style="font-size:13px;font-weight:600;cursor:pointer;" onclick="copyAddress(); toast(t('toast.copied'));">—</div>
            </div>
            <button class="ico-btn" onclick="copyAddress(); toast(t('toast.copied'));" title="Copy">📋</button>
          </div>
          <div class="item" id="profileBalanceItem" style="display:none;">
            <span class="ico">💰</span>
            <div style="flex:1;display:flex;flex-direction:column;gap:4px;">
              <div data-i18n="profile.myAssets" style="font-size:11px;color:var(--text-dim);">${t('profile.myAssets')}</div>
              <div id="profileBalance" style="font-size:13px;font-weight:600;">— USDT</div>
            </div>
            <button class="ico-btn" onclick="refreshBalance(); toast(t('toast.balanceRefreshed'));" title="Refresh">🔄</button>
          </div>
          <div class="divider" id="profileInfoDivider" style="display:none;"></div>
          <div class="pm-profile-card" id="profileCardSection">
            <div class="pm-avatar" id="profileAvatar" onclick="changeAvatar(); event.stopPropagation();">
              <span class="pm-avatar-img" id="profileAvatarImg">👤</span>
              <span class="pm-avatar-edit">✏️</span>
            </div>
            <div class="pm-profile-info">
              <div class="pm-username" id="profileUsername" onclick="editUsername(); event.stopPropagation();">未设置昵称</div>
              <div class="pm-uid" id="profileUid">UID: —</div>
            </div>
          </div>
          <div class="divider" id="profileSocialDivider" style="display:none;"></div>
          <div class="item pm-bind-item" id="profileEmailItem" onclick="bindEmail();" style="display:none;align-items:center;">
            <span class="ico">📧</span>
            <div style="flex:1;display:flex;flex-direction:column;gap:4px;">
              <div style="font-size:11px;color:var(--text-dim);">绑定邮箱</div>
              <div id="profileEmailText" style="font-size:13px;font-weight:600;">未绑定</div>
            </div>
            <span class="pm-bind-tag unbind" id="emailBindStatus">去绑定</span>
          </div>
          <div class="item pm-bind-item" id="profileTwitterItem" onclick="bindTwitter();" style="display:none;align-items:center;">
            <span class="ico">𝕏</span>
            <div style="flex:1;display:flex;flex-direction:column;gap:4px;">
              <div data-i18n="profile.myTwitter" style="font-size:11px;color:var(--text-dim);">${t('profile.myTwitter')}</div>
              <div id="profileTwitterText" style="font-size:13px;font-weight:600;">未绑定</div>
            </div>
            <span class="pm-bind-tag unbind" id="twitterBindStatus">去绑定</span>
          </div>
          <div class="item pm-bind-item" id="profileTelegramItem" onclick="bindTelegram();" style="display:none;align-items:center;">
            <span class="ico">✈️</span>
            <div style="flex:1;display:flex;flex-direction:column;gap:4px;">
              <div data-i18n="profile.myTelegram" style="font-size:11px;color:var(--text-dim);">${t('profile.myTelegram')}</div>
              <div id="profileTelegramText" style="font-size:13px;font-weight:600;">未绑定</div>
            </div>
            <span class="pm-bind-tag unbind" id="telegramBindStatus">去绑定</span>
          </div>
          <div class="divider"></div>
          <div class="item" onclick="navTo('myBets'); toggleMyDropdown();"><span class="ico">📋</span> <span data-i18n="nav.myBets">${t('nav.myBets')}</span></div>
          <div class="item" onclick="toast('交易记录功能即将上线'); toggleMyDropdown();"><span class="ico">📊</span> <span>交易记录</span></div>
          <div class="item" onclick="toast('邀请好友功能即将上线'); toggleMyDropdown();"><span class="ico">🎁</span> <span>邀请好友</span></div>
          <div class="item" onclick="openSettings(); toggleMyDropdown();"><span class="ico">⚙️</span> <span>设置</span></div>
          <div class="item" onclick="toast('帮助中心即将上线'); toggleMyDropdown();"><span class="ico">❓</span> <span>帮助中心</span></div>
          <div class="item admin-only-item" id="adminEntryItem" style="display:none;" onclick="location.href='/admin'; toggleMyDropdown();"><span class="ico">🔧</span> <span>管理后台</span></div>
          <div class="divider" id="explorerDivider" style="display:none;"></div>
          <div class="item" id="explorerItem" onclick="viewOnExplorer(); toggleMyDropdown();" style="display:none;"><span class="ico">🔗</span> <span data-i18n="wallet.viewExplorer">${t('wallet.viewExplorer')}</span></div>
          <div class="divider"></div>
          <div class="item pm-lang-row">
            <span class="ico">🌐</span>
            <button class="pm-lang-pill${currentLang==='zh-CN'?' active':''}" data-lang="zh-CN" onclick="setLang('zh-CN');event.stopPropagation();">简体</button>
            <button class="pm-lang-pill${currentLang==='zh-TW'?' active':''}" data-lang="zh-TW" onclick="setLang('zh-TW');event.stopPropagation();">繁體</button>
            <button class="pm-lang-pill${currentLang==='en'?' active':''}" data-lang="en" onclick="setLang('en');event.stopPropagation();">EN</button>
          </div>
        </div>
      </div>
      <div class="wallet-wrapper">
        <button class="btn btn-primary wallet-btn" id="connectBtn" onclick="handleWalletBtnClick(event)" data-i18n="wallet.connect">${t('wallet.connect')}</button>
        <div class="wallet-menu" id="walletMenu">
          <div class="head">
            <div data-i18n="wallet.connected">${t('wallet.connected')}</div>
            <div class="addr" id="menuAddr">—</div>
          </div>
          <div class="item" onclick="switchToChain(56)"><span class="ico">🟡</span> BNB Chain</div>
          <div class="item" onclick="switchToChain(173)"><span class="ico">🟣</span> ENI</div>
          <div class="item" onclick="switchToChain(174)"><span class="ico">🧪</span> ENI Testnet</div>
          <div class="divider"></div>
          <div class="item danger" onclick="disconnectWallet()"><span class="ico">⏻</span> <span data-i18n="wallet.disconnect">${t('wallet.disconnect')}</span></div>
        </div>
      </div>
    </div>
  `;
}

function buildMobileNav(activeCat) {
  const items = [
    { id:'home',     nav:'home',     icon:'🏠', key:'nav.home' },
    { id:'football', nav:'football', icon:'⚽', key:'cat.football' },
    { id:'worldcup', nav:'worldcup', icon:'🏆', key:'cat.worldcup' },
    { id:'atm',      nav:'atm',      icon:'⚡', key:'cat.atm' },
    { id:'more',     nav:'more',     icon:'☰',  key:'nav.more' },
  ];
  return items.map(item => {
    const isActive = item.id === activeCat || (item.id === 'home' && activeCat === 'trending');
    const onclick = item.id === 'more'
      ? 'toggleMobileMore(event)'
      : `navTo('${item.nav}')`;
    return `<button class="mobile-nav-item${isActive ? ' active' : ''}" onclick="${onclick}" data-nav="${item.id}">
      <span class="mobile-nav-icon">${item.icon}</span>
      <span class="mobile-nav-label" data-i18n="${item.key}">${t(item.key)}</span>
    </button>`;
  }).join('');
}

function createMobileDrawer() {
  if (document.getElementById('mobMoreSheet')) return;
  const extra = [
    { id:'basketball', icon:'🏀', label:'篮球' },
    { id:'events',     icon:'📰', label:'资讯' },
    { id:'crypto',     icon:'🪙', label:'加密' },
    { id:'myBets',     icon:'📋', label:'我的投注' },
  ];
  const cats = extra.map(c =>
    `<button class="mob-more-cat" onclick="navTo('${c.id}');closeMobileMore()">
       <span class="mob-more-cat-icon">${c.icon}</span>
       <span>${c.label}</span>
     </button>`
  ).join('');
  const wrapper = document.createElement('div');
  wrapper.id = 'mobMoreWrapper';
  wrapper.innerHTML = `
    <div class="mob-more-overlay" id="mobMoreOverlay" onclick="closeMobileMore()"></div>
    <div class="mob-more-sheet" id="mobMoreSheet">
      <div class="mob-more-handle"></div>
      <div class="mob-more-section-title">更多频道</div>
      <div class="mob-more-cats-grid">${cats}</div>
      <div class="mob-more-divider"></div>
      <div class="mob-more-actions-row">
        <button class="mob-more-action" onclick="toggleMyDropdown(event);closeMobileMore()">
          <span class="mob-more-action-icon">👤</span><span>个人资料</span>
        </button>
        <button class="mob-more-action" onclick="toggleThemeBtn();closeMobileMore()">
          <span class="mob-more-action-icon">🎨</span><span>切换主题</span>
        </button>
      </div>
      <div class="mob-more-divider"></div>
      <div class="mob-more-lang-row">
        <span class="mob-more-lang-label">🌐</span>
        <button class="mob-lang-pill${currentLang==='zh-CN'?' active':''}" onclick="setLang('zh-CN');closeMobileMore()">简体</button>
        <button class="mob-lang-pill${currentLang==='zh-TW'?' active':''}" onclick="setLang('zh-TW');closeMobileMore()">繁體</button>
        <button class="mob-lang-pill${currentLang==='en'?' active':''}" onclick="setLang('en');closeMobileMore()">EN</button>
      </div>
    </div>`;
  document.body.appendChild(wrapper);
}

function toggleMobileMore(e) {
  if (e) e.stopPropagation();
  const sheet = document.getElementById('mobMoreSheet');
  const overlay = document.getElementById('mobMoreOverlay');
  if (!sheet) return;
  const open = sheet.classList.contains('show');
  sheet.classList.toggle('show', !open);
  overlay.classList.toggle('show', !open);
}

function closeMobileMore() {
  const sheet = document.getElementById('mobMoreSheet');
  const overlay = document.getElementById('mobMoreOverlay');
  if (sheet) sheet.classList.remove('show');
  if (overlay) overlay.classList.remove('show');
}

// ============================================================
// "我的" Dropdown toggle
// ============================================================
function toggleMyDropdown(e) {
  if (e) e.stopPropagation();
  const menu = document.getElementById('profileMenu');
  const btn = document.getElementById('myBtn');
  if (!menu) return;
  const isOpen = menu.classList.toggle('show');
  if (btn) btn.classList.toggle('open', isOpen);
  // Close wallet menu if open
  if (isOpen) {
    const wm = document.getElementById('walletMenu');
    if (wm) wm.classList.remove('show');
  }
  // Always show profile card, social items
  const alwaysShow = ['profileInfoDivider','profileCardSection','profileSocialDivider','profileEmailItem','profileTwitterItem','profileTelegramItem'];
  alwaysShow.forEach(id => { const el = document.getElementById(id); if (el) el.style.display = ''; });
  // Show wallet-related items only when connected
  if (state.connected) {
    const connectedShow = ['profileAddrItem','profileBalanceItem','explorerDivider','explorerItem'];
    connectedShow.forEach(id => { const el = document.getElementById(id); if (el) el.style.display = ''; });
    const profileAddr = document.getElementById('profileAddr');
    if (profileAddr && state.address) profileAddr.textContent = shortAddr(state.address);
  }
  refreshSocialUI();
}

// ============================================================
// Merged wallet button click handler
// ============================================================
function handleWalletBtnClick(e) {
  if (e) e.stopPropagation();
  if (!state.connected) {
    toggleModal('walletModal', true);
  } else {
    toggleWalletMenu();
  }
}

// ============================================================
// Shared Initialization
// ============================================================
function initCommon(activeCategory) {
  // Inject header
  try {
    const header = document.querySelector('header');
    if (header && !header.querySelector('.logo')) {
      header.innerHTML = buildHeader(activeCategory || 'trending');
    }
  } catch (e) {
    console.error('[initCommon] buildHeader failed:', e);
  }
  // Inject mobile nav
  try {
    const mobileNav = document.getElementById('mobileNav');
    if (mobileNav && mobileNav.children.length === 0) {
      mobileNav.innerHTML = buildMobileNav(activeCategory || 'trending');
    }
    // 注入「更多」底部抽屉
    createMobileDrawer();
  } catch (e) {
    console.error('[initCommon] buildMobileNav failed:', e);
  }
  // Apply theme
  applyTheme();
  // Apply i18n
  applyI18n();
  // Load saved avatar into header
  try {
    const social = getSocial();
    const ha = document.getElementById('headerAvatar');
    if (ha && social.avatar) ha.textContent = social.avatar;
    const pu = document.getElementById('profileUsername');
    if (pu && social.username) pu.textContent = social.username;
    const pai = document.getElementById('profileAvatarImg');
    if (pai && social.avatar) pai.textContent = social.avatar;
  } catch(e) {}
  // Show admin entry for admin users (check localStorage)
  try {
    const isAdmin = localStorage.getItem('px_admin') === 'true';
    const adminEntry = document.getElementById('adminEntryItem');
    if (adminEntry && isAdmin) adminEntry.style.display = '';
  } catch(e) {}
  // Set fee recipient cell
  const cell = document.getElementById('feeRecipientCell');
  if (cell) {
    if (!FEE_RECIPIENT || /^0x0+$/.test(FEE_RECIPIENT)) {
      cell.textContent = t('modal.contracts.feeRecipientUnset');
      cell.style.color = 'var(--red)';
    } else {
      cell.textContent = FEE_RECIPIENT.slice(0, 6) + '…' + FEE_RECIPIENT.slice(-4);
      cell.title = FEE_RECIPIENT;
      cell.style.cursor = 'pointer';
      cell.onclick = () => { navigator.clipboard?.writeText(FEE_RECIPIENT); toast(t('toast.copied')); };
    }
  }
  // Sync category bar
  if (activeCategory) syncCategoryBar(activeCategory);
  // Click outside to close menus
  document.addEventListener('click', (e) => {
    const wm = document.getElementById('walletMenu');
    if (wm && wm.classList.contains('show') && !wm.contains(e.target)) {
      const wb = document.getElementById('connectBtn');
      if (wb && !wb.contains(e.target)) toggleWalletMenu(false);
    }
    const pm = document.getElementById('profileMenu');
    const mb = document.getElementById('myBtn');
    if (pm && pm.classList.contains('show') && !pm.contains(e.target)) {
      if (mb && !mb.contains(e.target)) {
        pm.classList.remove('show');
        if (mb) mb.classList.remove('open');
      }
    }
  });
  // Close modals on overlay click
  document.querySelectorAll('.overlay').forEach(el => {
    el.addEventListener('click', e => { if (e.target === el) el.classList.remove('show'); });
  });
  // Inject back-to-top button
  if (!document.querySelector('.back-to-top')) {
    const btt = document.createElement('button');
    btt.className = 'back-to-top';
    btt.id = 'backToTop';
    btt.innerHTML = '↑';
    btt.title = '回到顶部';
    btt.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.appendChild(btt);
    window.addEventListener('scroll', () => {
      btt.classList.toggle('visible', window.scrollY > 400);
      const hdr = document.querySelector('header');
      if (hdr) hdr.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
  }
  // Auto-reconnect wallet
  autoReconnect();
}
