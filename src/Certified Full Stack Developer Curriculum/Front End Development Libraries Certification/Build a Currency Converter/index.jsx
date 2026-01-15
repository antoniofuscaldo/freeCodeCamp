const { useMemo, useState } = React;

const RATES = {
	USD: 1,
	EUR: 0.92,
	GBP: 0.78,
	JPY: 156.7,
};

const CURRENCIES = Object.keys(RATES);

export function CurrencyConverter() {
	const [amount, setAmount] = useState(100);
	const [fromCurrency, setFromCurrency] = useState("USD");
	const [toCurrency, setToCurrency] = useState("EUR");

	const convertedAmounts = useMemo(() => {
		const fromRate = RATES[fromCurrency];
		const baseAmount = amount / fromRate;
		return CURRENCIES.reduce((acc, currency) => {
			acc[currency] = baseAmount * RATES[currency];
			return acc;
		}, {});
	}, [amount, fromCurrency]);

	const converted = convertedAmounts[toCurrency] ?? 0;
	const display = `${converted.toFixed(2)} ${toCurrency}`;

	return (
		<div className="app">
			<div className="card">
				<header className="header">
					<div className="badge">FX</div>
					<div>
						<h1>Currency Converter</h1>
						<p>Convert instantly with clear, accurate rates.</p>
					</div>
				</header>

				<div className="field-group">
					<label htmlFor="amount">Amount</label>
					<input
						id="amount"
						type="number"
						min="0"
						step="0.01"
						value={amount}
						onChange={(event) => {
							const next = Number(event.target.value);
							setAmount(Number.isNaN(next) ? 0 : next);
						}}
					/>
				</div>

				<div className="selectors">
					<div className="field-group">
						<label htmlFor="fromCurrency">From</label>
						<select
							id="fromCurrency"
							value={fromCurrency}
							onChange={(event) => setFromCurrency(event.target.value)}
						>
							{CURRENCIES.map((currency) => (
								<option key={`from-${currency}`} value={currency}>
									{currency}
								</option>
							))}
						</select>
					</div>

					<div className="swap">→</div>

					<div className="field-group">
						<label htmlFor="toCurrency">To</label>
						<select
							id="toCurrency"
							value={toCurrency}
							onChange={(event) => setToCurrency(event.target.value)}
						>
							{CURRENCIES.map((currency) => (
								<option key={`to-${currency}`} value={currency}>
									{currency}
								</option>
							))}
						</select>
					</div>
				</div>

				<div className="result">
					<span>Converted</span>
					<strong>{display}</strong>
				</div>
			</div>
		</div>
	);
}
