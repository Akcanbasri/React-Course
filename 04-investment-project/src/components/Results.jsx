import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({ input }) {
  const result = calculateInvestmentResults(input);
  const initalInvestment =
    result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>İnvestment Value</th>
          <th>İnterest (year)</th>
          <th>Total Interests</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {result.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initalInvestment;

          const totalAmunthInvested =
            yearData.annualInvestment * yearData.year + initalInvestment;

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmunthInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
