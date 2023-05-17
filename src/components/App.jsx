import styled from 'styled-components';

import Profile from 'components/Profil/Profile';
import user from 'Json/user.json';

import Statistics from 'components/Statistic/Statistics';
import data from 'Json/data.json';

import FriendList from 'components/Friend/FriendList';
import friends from 'Json/friends.json';

import TransactionHistory from 'components/Transaction/TransactionHistory';
import transactions from 'Json/transactions.json';

export const App = () => {
  return (
    <>
      <div>
        <Profile profil={user} />
      </div>
      {/* <div>
        <Statistics data={data} />
      </div>
      <div>
        <FriendList friends={friends} />
      </div>
      <div>
        <TransactionHistory transactions={transactions} />
      </div> */}
    </>
  );
};
