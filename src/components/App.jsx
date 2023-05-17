import React from 'react';
import ReactDOM from 'react-dom/client';

import {Profile} from 'components/Profil/Profile';
import user from 'Json/user.json';

import { Statistics } from 'components/Statistic/Statistics';
import data from 'Json/data.json';


import {FriendList} from 'components/Friend/FriendList';
import friends from 'Json/friends.json';


import {TransactionHistory} from 'components/Transaction/TransactionHistory';
import transactions from 'Json/transactions.json';



export const App = () => {
  return (
    <>
      <div>
        <Profile user={user} />
      </div>
      <div>
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
      </div>
      <div>
        <FriendList friends={friends} />
      </div>
      <div>
        <TransactionHistory items={transactions} />
      </div>
    </>
  );
};






     

     