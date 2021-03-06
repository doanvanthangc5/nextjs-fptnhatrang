//import Head from 'next/head';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PriceItem from '../component/priceItem';

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
    <div>
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
  );
}
