import React, { useState, useEffect } from 'react';
import usePollution from "./hooks/pollution";
import { Chart } from "./components/chart/chart";
import style from "./App.module.scss";
import { Header } from "./components/header";
import { Filter } from "./components/filter";
import { formatDate } from "./util/dateFormat";
function App() {
  const [{ data, isLoading }, fetchPollution]: any = usePollution();
  let date = new Date();
  date.setDate(date.getDate() + 1 );
  const [filter, setFilter] = useState({
    date_to: formatDate(date),
    date_from : formatDate(new Date())
  });
  const onChange = (event: React.SyntheticEvent<HTMLInputElement | HTMLSelectElement>) => {
    var name = event.currentTarget.name , val = event.currentTarget.value ;
    var date = new Date( val ) ;
    date.setDate( date.getDate()+1 );
    setFilter({
      ...filter,
      [name]: formatDate(val),
      "date_to" : formatDate( date )
    });
  }
  useEffect(() => {
    fetchPollution(filter);
  }, [filter]);
  return (
    <div className="App">
      <Header />
      <Filter onChange={onChange} defaultValues={filter} />
      { data && data.results && <div className={style.chart_wrapper}>
        { isLoading && <div className={style.overlay}></div>}
        <Chart data={data.results} />
      </div>}
      {(!data || !data.results ) && isLoading && <div className={style.spinner}>Fetching Details...</div>}
    </div>
  );
}

export default App;
