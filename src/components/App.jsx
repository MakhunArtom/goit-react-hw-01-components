import { Profiel } from './Profile/Profiel';
import { Statistics } from './Statistics/Statistics';
import { FriendListItem } from './FriendList/FriendListItem';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends.json';
import transactions from './TransactionHistory/transactions.json';

export const App = () => {
  return (
    <div>
      <Profiel
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} title="Upload stats" />
      <FriendListItem friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
