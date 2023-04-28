import Statistics from './components/Statistics/statistics';
import Profile from './components/Profile/profile';
import user from './data/user.json';
import data from './data/data.json';
import FriendList from './components/FriendList/FriendList';
import friends from './data/friends.json'
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './data/transactions.json'
import css from './components/general.module.css'



const App = () => {
  return (
    <div>
      
      <section className={css.section}>
         <h2 className={css.sectionTitle}>1 - Social network profile</h2>
        <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      </section>
      
      <section className={css.section}>
        <h2 className={css.sectionTitle}>2 - Statistics section</h2>
        <Statistics title="Upload stats" stats={data} />
      </section>
      <section className={css.section}>
        <Statistics stats={data}/>
      </section>

      <section className={css.section}>
        <h2 className={css.sectionTitle}>3 - Friend list</h2>
        <FriendList friends={friends} />
      </section>

      <section className={css.section}>
       <h2 className={css.sectionTitle}>4 - Transaction history</h2>
        <TransactionHistory items={transactions} />
      </section>

    </div>
  );
};


export default App;
