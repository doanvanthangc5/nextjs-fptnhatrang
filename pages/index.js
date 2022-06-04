//import Head from 'next/head';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PriceItem from '../components/priceItem';

export default function Home() {
  const [error, setError] = useState();
  const [resp, setGitData] = useState({ Gd: [], Combo: [], Dn: [] });

  //const isSuccess = status === 'success'

  useEffect(() => {
    try {
      const fetchData = async () => {
        const [respGd, respCombo, respDn] = [
          await axios(`https://fptnhatrang.vn/ajax/mutilhome.php?id=1`),
          await axios(`https://fptnhatrang.vn/ajax/mutilhome.php?id=3`),
          await axios(`https://fptnhatrang.vn/ajax/mutilhome.php?id=2`),
        ];
        setGitData({ Gd: respGd.data, Combo: respCombo.data, Dn: respDn.data });
        //setStatus('success');
      };
      fetchData();
    } catch (error) {
      setError(error);
      //setStatus('error');
    }
  }, []);
  return (
    <main>
      <section className="pricing-area pt-110 pb-90">
        <div className="container">
          <div className="pricing-plan-wrap">
            <div className="row justify-content-center">
              {resp.Gd.map((item, i) => (
                <PriceItem key={i} item={item} />
              ))}
              {resp.Combo.map((item, i) => (
                <PriceItem key={i} item={item} />
              ))}
              {resp.Dn.map((item, i) => (
                <PriceItem key={i} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
