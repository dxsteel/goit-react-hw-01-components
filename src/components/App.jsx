import Profile from './Profile';
import user from '../Data/user.json';
import Statistics from './Statistics';
import data from '../Data/data.json';
import FriendList from './FriendList';
import friends from '../Data/friends.json';
import TransactionHistory from './TransactionsHistory';
import transactions from '../Data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};
