import React, { useEffect } from 'react';

import { get, post  } from '@/utils/request';

import styles from './app.less'

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const App = () => {
  const queryTestRequest = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const data = await post<{ id: number }>(url, {
      id: 1,
    });
    console.log(data, 'data -- ');
  };

  useEffect(() => {
    queryTestRequest();
  }, []);

  return <div className={styles.cool}>chencs</div>
}

export default App;