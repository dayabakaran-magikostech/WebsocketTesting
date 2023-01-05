const config = {};

const instruments = [
	341249, 12327426,  26667522, 26667778, 26668034,
	26668290, 26669570,  26669826, 26671618, 26671874,
	26672130, 26672386,  26672642, 26672898, 26673154,
	26673410, 26673666,  26673922, 26674178, 26674434,
	26674690, 26674946,  26675202, 26675458, 26675714,
	26675970, 26711554,  26711810, 26712066, 26712322,
	26714370, 26714626,  26714882, 26715138, 26715394,
	26715650, 26715906,  26716162, 26716418, 26716674,
	26716930, 26717186,  26717442, 26717698, 26717954,
	26718210, 26718466,  26718722, 26718978, 26719234,
	26719490, 26719746,  26720002, 26720258, 26720514,
	26720770, 26721026,  26721282, 26721538, 26721794,
	26722050, 26722306, 128046084
];

const tickObject = {
	'341249': {
	  instrument_token: '341249',
	  trading_symbol: 'HDFCBANK-NSE',
	  tag: 'HDFC-NFO',
	  ltp: 1610.05
	},
	'12327426': {
	  instrument_token: '12327426',
	  trading_symbol: 'HDFCBANK23JANFUT',
	  tag: 'HDFC-NFO',
	  ltp: 1619.45
	},
	'26667522': {
	  instrument_token: '26667522',
	  trading_symbol: 'HDFCBANK23JAN1300CE',
	  tag: 'HDFC-NFO',
	  ltp: 344.65
	},
	'26667778': {
	  instrument_token: '26667778',
	  trading_symbol: 'HDFCBANK23JAN1300PE',
	  tag: 'HDFC-NFO',
	  ltp: 0.5
	},
	'26668034': {
	  instrument_token: '26668034',
	  trading_symbol: 'HDFCBANK23JAN1320CE',
	  tag: 'HDFC-NFO',
	  ltp: 0
	},
	'26668290': {
	  instrument_token: '26668290',
	  trading_symbol: 'HDFCBANK23JAN1320PE',
	  tag: 'HDFC-NFO',
	  ltp: 0
	},
	'26669570': {
	  instrument_token: '26669570',
	  trading_symbol: 'HDFCBANK23JAN1340CE',
	  tag: 'HDFC-NFO',
	  ltp: 0
	},
	'26669826': {
	  instrument_token: '26669826',
	  trading_symbol: 'HDFCBANK23JAN1340PE',
	  tag: 'HDFC-NFO',
	  ltp: 0
	},
	'26671618': {
	  instrument_token: '26671618',
	  trading_symbol: 'HDFCBANK23JAN1360CE',
	  tag: 'HDFC-NFO',
	  ltp: 285
	},
	'26671874': {
	  instrument_token: '26671874',
	  trading_symbol: 'HDFCBANK23JAN1360PE',
	  tag: 'HDFC-NFO',
	  ltp: 0.15
	},
	'26672130': {
	  instrument_token: '26672130',
	  trading_symbol: 'HDFCBANK23JAN1380CE',
	  tag: 'HDFC-NFO',
	  ltp: 265.2
	},
	'26672386': {
	  instrument_token: '26672386',
	  trading_symbol: 'HDFCBANK23JAN1380PE',
	  tag: 'HDFC-NFO',
	  ltp: 0.5
	},
	'26672642': {
	  instrument_token: '26672642',
	  trading_symbol: 'HDFCBANK23JAN1400CE',
	  tag: 'HDFC-NFO',
	  ltp: 245.45
	},
	'26672898': {
	  instrument_token: '26672898',
	  trading_symbol: 'HDFCBANK23JAN1400PE',
	  tag: 'HDFC-NFO',
	  ltp: 0.9
	},
	'26673154': {
	  instrument_token: '26673154',
	  trading_symbol: 'HDFCBANK23JAN1420CE',
	  tag: 'HDFC-NFO',
	  ltp: 0
	},
	'26673410': {
	  instrument_token: '26673410',
	  trading_symbol: 'HDFCBANK23JAN1420PE',
	  tag: 'HDFC-NFO',
	  ltp: 1
	},
	'26673666': {
	  instrument_token: '26673666',
	  trading_symbol: 'HDFCBANK23JAN1440CE',
	  tag: 'HDFC-NFO',
	  ltp: 206.45
	},
	'26673922': {
	  instrument_token: '26673922',
	  trading_symbol: 'HDFCBANK23JAN1440PE',
	  tag: 'HDFC-NFO',
	  ltp: 1.3
	},
	'26674178': {
	  instrument_token: '26674178',
	  trading_symbol: 'HDFCBANK23JAN1460CE',
	  tag: 'HDFC-NFO',
	  ltp: 0
	},
	'26674434': {
	  instrument_token: '26674434',
	  trading_symbol: 'HDFCBANK23JAN1460PE',
	  tag: 'HDFC-NFO',
	  ltp: 1.8
	},
	'26674690': {
	  instrument_token: '26674690',
	  trading_symbol: 'HDFCBANK23JAN1480CE',
	  tag: 'HDFC-NFO',
	  ltp: 168.6
	},
	'26674946': {
	  instrument_token: '26674946',
	  trading_symbol: 'HDFCBANK23JAN1480PE',
	  tag: 'HDFC-NFO',
	  ltp: 2.5
	},
	'26675202': {
	  instrument_token: '26675202',
	  trading_symbol: 'HDFCBANK23JAN1500CE',
	  tag: 'HDFC-NFO',
	  ltp: 122.8
	},
	'26675458': {
	  instrument_token: '26675458',
	  trading_symbol: 'HDFCBANK23JAN1500PE',
	  tag: 'HDFC-NFO',
	  ltp: 3.5
	},
	'26675714': {
	  instrument_token: '26675714',
	  trading_symbol: 'HDFCBANK23JAN1520CE',
	  tag: 'HDFC-NFO',
	  ltp: 132.85
	},
	'26675970': {
	  instrument_token: '26675970',
	  trading_symbol: 'HDFCBANK23JAN1520PE',
	  tag: 'HDFC-NFO',
	  ltp: 4.7
	},
	'26711554': {
	  instrument_token: '26711554',
	  trading_symbol: 'HDFCBANK23JAN1540CE',
	  tag: 'HDFC-NFO',
	  ltp: 84.5
	},
	'26711810': {
	  instrument_token: '26711810',
	  trading_symbol: 'HDFCBANK23JAN1540PE',
	  tag: 'HDFC-NFO',
	  ltp: 6.55
	},
	'26712066': {
	  instrument_token: '26712066',
	  trading_symbol: 'HDFCBANK23JAN1560CE',
	  tag: 'HDFC-NFO',
	  ltp: 68.5
	},
	'26712322': {
	  instrument_token: '26712322',
	  trading_symbol: 'HDFCBANK23JAN1560PE',
	  tag: 'HDFC-NFO',
	  ltp: 9.7
	},
	'26714370': {
	  instrument_token: '26714370',
	  trading_symbol: 'HDFCBANK23JAN1580CE',
	  tag: 'HDFC-NFO',
	  ltp: 53.25
	},
	'26714626': {
	  instrument_token: '26714626',
	  trading_symbol: 'HDFCBANK23JAN1580PE',
	  tag: 'HDFC-NFO',
	  ltp: 14
	},
	'26714882': {
	  instrument_token: '26714882',
	  trading_symbol: 'HDFCBANK23JAN1600CE',
	  tag: 'HDFC-NFO',
	  ltp: 39.2
	},
	'26715138': {
	  instrument_token: '26715138',
	  trading_symbol: 'HDFCBANK23JAN1600PE',
	  tag: 'HDFC-NFO',
	  ltp: 21.05
	},
	'26715394': {
	  instrument_token: '26715394',
	  trading_symbol: 'HDFCBANK23JAN1620CE',
	  tag: 'HDFC-NFO',
	  ltp: 29.2
	},
	'26715650': {
	  instrument_token: '26715650',
	  trading_symbol: 'HDFCBANK23JAN1620PE',
	  tag: 'HDFC-NFO',
	  ltp: 29.05
	},
	'26715906': {
	  instrument_token: '26715906',
	  trading_symbol: 'HDFCBANK23JAN1640CE',
	  tag: 'HDFC-NFO',
	  ltp: 20.2
	},
	'26716162': {
	  instrument_token: '26716162',
	  trading_symbol: 'HDFCBANK23JAN1640PE',
	  tag: 'HDFC-NFO',
	  ltp: 41
	},
	'26716418': {
	  instrument_token: '26716418',
	  trading_symbol: 'HDFCBANK23JAN1660CE',
	  tag: 'HDFC-NFO',
	  ltp: 13.7
	},
	'26716674': {
	  instrument_token: '26716674',
	  trading_symbol: 'HDFCBANK23JAN1660PE',
	  tag: 'HDFC-NFO',
	  ltp: 53.95
	},
	'26716930': {
	  instrument_token: '26716930',
	  trading_symbol: 'HDFCBANK23JAN1680CE',
	  tag: 'HDFC-NFO',
	  ltp: 9.1
	},
	'26717186': {
	  instrument_token: '26717186',
	  trading_symbol: 'HDFCBANK23JAN1680PE',
	  tag: 'HDFC-NFO',
	  ltp: 71.8
	},
	'26717442': {
	  instrument_token: '26717442',
	  trading_symbol: 'HDFCBANK23JAN1700CE',
	  tag: 'HDFC-NFO',
	  ltp: 6.3
	},
	'26717698': {
	  instrument_token: '26717698',
	  trading_symbol: 'HDFCBANK23JAN1700PE',
	  tag: 'HDFC-NFO',
	  ltp: 88.1
	},
	'26717954': {
	  instrument_token: '26717954',
	  trading_symbol: 'HDFCBANK23JAN1720CE',
	  tag: 'HDFC-NFO',
	  ltp: 4.15
	},
	'26718210': {
	  instrument_token: '26718210',
	  trading_symbol: 'HDFCBANK23JAN1720PE',
	  tag: 'HDFC-NFO',
	  ltp: 93.1
	},
	'26718466': {
	  instrument_token: '26718466',
	  trading_symbol: 'HDFCBANK23JAN1740CE',
	  tag: 'HDFC-NFO',
	  ltp: 2.95
	},
	'26718722': {
	  instrument_token: '26718722',
	  trading_symbol: 'HDFCBANK23JAN1740PE',
	  tag: 'HDFC-NFO',
	  ltp: 108.45
	},
	'26718978': {
	  instrument_token: '26718978',
	  trading_symbol: 'HDFCBANK23JAN1760CE',
	  tag: 'HDFC-NFO',
	  ltp: 2.2
	},
	'26719234': {
	  instrument_token: '26719234',
	  trading_symbol: 'HDFCBANK23JAN1760PE',
	  tag: 'HDFC-NFO',
	  ltp: 0
	},
	'26719490': {
	  instrument_token: '26719490',
	  trading_symbol: 'HDFCBANK23JAN1780CE',
	  tag: 'HDFC-NFO',
	  ltp: 1.6
	},
	'26719746': {
	  instrument_token: '26719746',
	  trading_symbol: 'HDFCBANK23JAN1780PE',
	  tag: 'HDFC-NFO',
	  ltp: 0
	},
	'26720002': {
	  instrument_token: '26720002',
	  trading_symbol: 'HDFCBANK23JAN1800CE',
	  tag: 'HDFC-NFO',
	  ltp: 1.3
	},
	'26720258': {
	  instrument_token: '26720258',
	  trading_symbol: 'HDFCBANK23JAN1800PE',
	  tag: 'HDFC-NFO',
	  ltp: 165.2
	},
	'26720514': {
	  instrument_token: '26720514',
	  trading_symbol: 'HDFCBANK23JAN1820CE',
	  tag: 'HDFC-NFO',
	  ltp: 0.95
	},
	'26720770': {
	  instrument_token: '26720770',
	  trading_symbol: 'HDFCBANK23JAN1820PE',
	  tag: 'HDFC-NFO',
	  ltp: 0
	},
	'26721026': {
	  instrument_token: '26721026',
	  trading_symbol: 'HDFCBANK23JAN1840CE',
	  tag: 'HDFC-NFO',
	  ltp: 0.7
	},
	'26721282': {
	  instrument_token: '26721282',
	  trading_symbol: 'HDFCBANK23JAN1840PE',
	  tag: 'HDFC-NFO',
	  ltp: 0
	},
	'26721538': {
	  instrument_token: '26721538',
	  trading_symbol: 'HDFCBANK23JAN1860CE',
	  tag: 'HDFC-NFO',
	  ltp: 0.6
	},
	'26721794': {
	  instrument_token: '26721794',
	  trading_symbol: 'HDFCBANK23JAN1860PE',
	  tag: 'HDFC-NFO',
	  ltp: 0
	},
	'26722050': {
	  instrument_token: '26722050',
	  trading_symbol: 'HDFCBANK23JAN1880CE',
	  tag: 'HDFC-NFO',
	  ltp: 0.75
	},
	'26722306': {
	  instrument_token: '26722306',
	  trading_symbol: 'HDFCBANK23JAN1880PE',
	  tag: 'HDFC-NFO',
	  ltp: 0
	},
	'128046084': {
	  instrument_token: '128046084',
	  trading_symbol: 'HDFCBANK-BSE',
	  tag: 'HDFC-NFO',
	  ltp: 1610.55
	}
}

const instrumentObj = {
	'341249': {
	  type: 'CASH',
	  symbol: 'HDFCBANK-NSE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_offer: 0 },
	  strike_price: [
		1300, 1320, 1340, 1360, 1380,
		1400, 1420, 1440, 1460, 1480,
		1500, 1520, 1540, 1560, 1580,
		1600, 1620, 1640, 1660, 1680,
		1700, 1720, 1740, 1760, 1780,
		1800, 1820, 1840, 1860, 1880,
		1900
	  ]
	},
	'16381442': {
	  type: 'FUT',
	  symbol: 'HDFCBANK23JANFUT',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)'
	},
	'26667522': {
	  type: 'CE',
	  symbol: 'HDFCBANK23JAN1300CE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_bid: 0 },
	  strike_price: '1300'
	},
	'26667778': {
	  type: 'PE',
	  symbol: 'HDFCBANK23JAN1300PE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_offer: 0 },
	  strike_price: '1300'
	},
	'26668034': {
	  type: 'CE',
	  symbol: 'HDFCBANK23JAN1320CE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_bid: 0 },
	  strike_price: '1320'
	},
	'26668290': {
	  type: 'PE',
	  symbol: 'HDFCBANK23JAN1320PE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_offer: 0 },
	  strike_price: '1320'
	},
	'26669570': {
	  type: 'CE',
	  symbol: 'HDFCBANK23JAN1340CE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_bid: 0 },
	  strike_price: '1340'
	},
	'26669826': {
	  type: 'PE',
	  symbol: 'HDFCBANK23JAN1340PE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_offer: 0 },
	  strike_price: '1340'
	},
	'26671618': {
	  type: 'CE',
	  symbol: 'HDFCBANK23JAN1360CE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_bid: 0 },
	  strike_price: '1360'
	},
	'26671874': {
	  type: 'PE',
	  symbol: 'HDFCBANK23JAN1360PE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_offer: 0 },
	  strike_price: '1360'
	},
	'26672130': {
	  type: 'CE',
	  symbol: 'HDFCBANK23JAN1380CE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_bid: 0 },
	  strike_price: '1380'
	},
	'26672386': {
	  type: 'PE',
	  symbol: 'HDFCBANK23JAN1380PE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_offer: 0 },
	  strike_price: '1380'
	},
	'26672642': {
	  type: 'CE',
	  symbol: 'HDFCBANK23JAN1400CE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_bid: 0 },
	  strike_price: '1400'
	},
	'26672898': {
	  type: 'PE',
	  symbol: 'HDFCBANK23JAN1400PE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_offer: 0 },
	  strike_price: '1400'
	},
	'26673154': {
	  type: 'CE',
	  symbol: 'HDFCBANK23JAN1420CE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_bid: 0 },
	  strike_price: '1420'
	},
	'26673410': {
	  type: 'PE',
	  symbol: 'HDFCBANK23JAN1420PE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_offer: 0 },
	  strike_price: '1420'
	},
	'26673666': {
	  type: 'CE',
	  symbol: 'HDFCBANK23JAN1440CE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_bid: 0 },
	  strike_price: '1440'
	},
	'26673922': {
	  type: 'PE',
	  symbol: 'HDFCBANK23JAN1440PE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_offer: 0 },
	  strike_price: '1440'
	},
	'26674178': {
	  type: 'CE',
	  symbol: 'HDFCBANK23JAN1460CE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_bid: 0 },
	  strike_price: '1460'
	},
	'26674434': {
	  type: 'PE',
	  symbol: 'HDFCBANK23JAN1460PE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_offer: 0 },
	  strike_price: '1460'
	},
	'26674690': {
	  type: 'CE',
	  symbol: 'HDFCBANK23JAN1480CE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_bid: 0 },
	  strike_price: '1480'
	},
	'26674946': {
	  type: 'PE',
	  symbol: 'HDFCBANK23JAN1480PE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_offer: 0 },
	  strike_price: '1480'
	},
	'26675202': {
	  type: 'CE',
	  symbol: 'HDFCBANK23JAN1500CE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_bid: 0 },
	  strike_price: '1500'
	},
	'26675458': {
	  type: 'PE',
	  symbol: 'HDFCBANK23JAN1500PE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_offer: 0 },
	  strike_price: '1500'
	},
	'26675714': {
	  type: 'CE',
	  symbol: 'HDFCBANK23JAN1520CE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_bid: 0 },
	  strike_price: '1520'
	},
	'26675970': {
	  type: 'PE',
	  symbol: 'HDFCBANK23JAN1520PE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_offer: 0 },
	  strike_price: '1520'
	},
	'26711554': {
	  type: 'CE',
	  symbol: 'HDFCBANK23JAN1540CE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_bid: 0 },
	  strike_price: '1540'
	},
	'26711810': {
	  type: 'PE',
	  symbol: 'HDFCBANK23JAN1540PE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_offer: 0 },
	  strike_price: '1540'
	},
	'26712066': {
	  type: 'CE',
	  symbol: 'HDFCBANK23JAN1560CE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_bid: 0 },
	  strike_price: '1560'
	},
	'26712322': {
	  type: 'PE',
	  symbol: 'HDFCBANK23JAN1560PE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_offer: 0 },
	  strike_price: '1560'
	},
	'26714370': {
	  type: 'CE',
	  symbol: 'HDFCBANK23JAN1580CE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_bid: 0 },
	  strike_price: '1580'
	},
	'26714626': {
	  type: 'PE',
	  symbol: 'HDFCBANK23JAN1580PE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_offer: 0 },
	  strike_price: '1580'
	},
	'26714882': {
	  type: 'CE',
	  symbol: 'HDFCBANK23JAN1600CE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_bid: 0 },
	  strike_price: '1600'
	},
	'26715138': {
	  type: 'PE',
	  symbol: 'HDFCBANK23JAN1600PE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_offer: 0 },
	  strike_price: '1600'
	},
	'26715394': {
	  type: 'CE',
	  symbol: 'HDFCBANK23JAN1620CE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_bid: 0 },
	  strike_price: '1620'
	},
	'26715650': {
	  type: 'PE',
	  symbol: 'HDFCBANK23JAN1620PE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_offer: 0 },
	  strike_price: '1620'
	},
	'26715906': {
	  type: 'CE',
	  symbol: 'HDFCBANK23JAN1640CE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_bid: 0 },
	  strike_price: '1640'
	},
	'26716162': {
	  type: 'PE',
	  symbol: 'HDFCBANK23JAN1640PE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_offer: 0 },
	  strike_price: '1640'
	},
	'26716418': {
	  type: 'CE',
	  symbol: 'HDFCBANK23JAN1660CE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_bid: 0 },
	  strike_price: '1660'
	},
	'26716674': {
	  type: 'PE',
	  symbol: 'HDFCBANK23JAN1660PE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_offer: 0 },
	  strike_price: '1660'
	},
	'26716930': {
	  type: 'CE',
	  symbol: 'HDFCBANK23JAN1680CE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_bid: 0 },
	  strike_price: '1680'
	},
	'26717186': {
	  type: 'PE',
	  symbol: 'HDFCBANK23JAN1680PE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_offer: 0 },
	  strike_price: '1680'
	},
	'26717442': {
	  type: 'CE',
	  symbol: 'HDFCBANK23JAN1700CE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_bid: 0 },
	  strike_price: '1700'
	},
	'26717698': {
	  type: 'PE',
	  symbol: 'HDFCBANK23JAN1700PE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_offer: 0 },
	  strike_price: '1700'
	},
	'26717954': {
	  type: 'CE',
	  symbol: 'HDFCBANK23JAN1720CE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_bid: 0 },
	  strike_price: '1720'
	},
	'26718210': {
	  type: 'PE',
	  symbol: 'HDFCBANK23JAN1720PE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_offer: 0 },
	  strike_price: '1720'
	},
	'26718466': {
	  type: 'CE',
	  symbol: 'HDFCBANK23JAN1740CE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_bid: 0 },
	  strike_price: '1740'
	},
	'26718722': {
	  type: 'PE',
	  symbol: 'HDFCBANK23JAN1740PE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_offer: 0 },
	  strike_price: '1740'
	},
	'26718978': {
	  type: 'CE',
	  symbol: 'HDFCBANK23JAN1760CE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_bid: 0 },
	  strike_price: '1760'
	},
	'26719234': {
	  type: 'PE',
	  symbol: 'HDFCBANK23JAN1760PE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_offer: 0 },
	  strike_price: '1760'
	},
	'26719490': {
	  type: 'CE',
	  symbol: 'HDFCBANK23JAN1780CE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_bid: 0 },
	  strike_price: '1780'
	},
	'26719746': {
	  type: 'PE',
	  symbol: 'HDFCBANK23JAN1780PE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_offer: 0 },
	  strike_price: '1780'
	},
	'26720002': {
	  type: 'CE',
	  symbol: 'HDFCBANK23JAN1800CE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_bid: 0 },
	  strike_price: '1800'
	},
	'26720258': {
	  type: 'PE',
	  symbol: 'HDFCBANK23JAN1800PE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_offer: 0 },
	  strike_price: '1800'
	},
	'26720514': {
	  type: 'CE',
	  symbol: 'HDFCBANK23JAN1820CE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_bid: 0 },
	  strike_price: '1820'
	},
	'26720770': {
	  type: 'PE',
	  symbol: 'HDFCBANK23JAN1820PE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_offer: 0 },
	  strike_price: '1820'
	},
	'26721026': {
	  type: 'CE',
	  symbol: 'HDFCBANK23JAN1840CE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_bid: 0 },
	  strike_price: '1840'
	},
	'26721282': {
	  type: 'PE',
	  symbol: 'HDFCBANK23JAN1840PE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_offer: 0 },
	  strike_price: '1840'
	},
	'26721538': {
	  type: 'CE',
	  symbol: 'HDFCBANK23JAN1860CE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_bid: 0 },
	  strike_price: '1860'
	},
	'26721794': {
	  type: 'PE',
	  symbol: 'HDFCBANK23JAN1860PE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_offer: 0 },
	  strike_price: '1860'
	},
	'26722050': {
	  type: 'CE',
	  symbol: 'HDFCBANK23JAN1880CE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_bid: 0 },
	  strike_price: '1880'
	},
	'26722306': {
	  type: 'PE',
	  symbol: 'HDFCBANK23JAN1880PE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_offer: 0 },
	  strike_price: '1880'
	},
	'26722562': {
	  type: 'CE',
	  symbol: 'HDFCBANK23JAN1900CE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_bid: 0 },
	  strike_price: '1900'
	},
	'26722818': {
	  type: 'PE',
	  symbol: 'HDFCBANK23JAN1900PE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_offer: 0 },
	  strike_price: '1900'
	},
	'128046084': {
	  type: 'CASH',
	  symbol: 'HDFCBANK-BSE',
	  ltp: 0,
	  last_updated: 'Wed Dec 28 2022 10:59:49 GMT+0530 (India Standard Time)',
	  price: { best_offer: 0 },
	  strike_price: [
		1300, 1320, 1340, 1360, 1380,
		1400, 1420, 1440, 1460, 1480,
		1500, 1520, 1540, 1560, 1580,
		1600, 1620, 1640, 1660, 1680,
		1700, 1720, 1740, 1760, 1780,
		1800, 1820, 1840, 1860, 1880,
		1900
	  ]
	}
}

config.instruments = instruments;
config.tickObject = tickObject;
config.instrumentObj = instrumentObj;

exports.config = config;