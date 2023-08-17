import { useEffect, useState } from 'react';

export default function Quote() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState('');

  useEffect(() => {
    setLoading(true);
    const fetchQuote = async () => {
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=intelligence', {
          method: 'GET',
          withCredientials: true,
          headers: {
            'X-Api-Key': 'IWrsocgunOOPSPX1lY4wpg==tgIScuaOsYNEJMj8',
            'Content-Type': 'application/json',
          },
        });
        const json = await response.json();
        setData(json[0]);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchQuote();
  }, [setData, setLoading, setError]);

  if (error) return <div className="error_message">Something went wrong! Please try again.</div>;
  if (loading) return <div className="loading_message">Loading quote, please wait....</div>;

  return (
    <div className="quote_container">
      <p className="quote">{data.quote}</p>
      <p className="author">{data.author}</p>
    </div>
  );
}
