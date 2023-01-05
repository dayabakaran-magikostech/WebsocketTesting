const { config } = require("./setup");
const delay = ms => new Promise(res => setTimeout(res, ms));

async function main(instrument)
{
	let instrument_token = instrument.instrument_token;
	console.log(instrument_token);
	let trading_symbol = config.instrumentObj[instrument_token].symbol;

	let ts = new Date();
	console.log(new Date(), " Got Tick: ",instrument_token, trading_symbol, ts);
	await delay(60000);
	console.log(new Date(), " Execution finished for: ",instrument_token, trading_symbol, ts);
	return;
}

function subscribe()
{
	let rn = getRandomNumber(1, 8);
	const refreshInterval = 300 * rn;
	setTimeout(subscribe, refreshInterval);
	let total_instruments = config.instruments.length-1;
	let rn2 = getRandomNumber(0, total_instruments);

	let random_instrument = config.instruments[rn2];
	main(config.tickObject[random_instrument]);
}

function getRandomNumber(min, max)
{
	return Math.floor(Math.random() * (max - min + 1) + min);
}

subscribe();