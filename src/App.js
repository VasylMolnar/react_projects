import Section from './components/Section/Section';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import user from './data/user.json';
import uploadStats from './data/uploadStats.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import FriendList from './components/FriendList/FriendList';

function App() {
  return (
    <div className="App">
      <Section title="Task-1 'Social network profile'">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>

      <Section title={"Task-2 'Statistics section'"}>
        <Statistics title="Upload stats" stats={uploadStats} />
      </Section>
      <Section>
        <Statistics stats={uploadStats} />
      </Section>

      <Section title={"Task-3 'Friend list'"}>
        <FriendList />
      </Section>

      <Section title={"Task-4 'Transaction history'"}>
        <TransactionHistory />
      </Section>
    </div>
  );
}

export default App;
