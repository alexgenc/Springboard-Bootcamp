import Axios from 'axios';
import { useState } from 'react';
import axios from "axios";
import uuid from "uuid";

const useAxios = (url) => {
  const [data, setData] = useState([]);

  const addData = async () => {
    res = await axios.get(url);

    setData(data => [...data, { ...res.data, id: uuid() }])
  }

  return [data, addData];
}

export default useAxios;
