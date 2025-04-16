// Solution:

const whosOnline = (friends) => {
  let statuses = {};

  const online = friends.filter(user => user.status === 'online' && user.lastActivity <= 10)
                        .map(user => user.username);

  const offline = friends.filter(user => user.status === 'offline')
                         .map(user => user.username);

  const away = friends.filter(user => user.status === 'online' && user.lastActivity > 10)
                      .map(user => user.username);

  if (online.length > 0) {statuses.online = online};
  if (offline.length > 0) {statuses.offline = offline};
  if (away.length > 0) {statuses.away = away};

  return statuses;
}

// Sample Tests:

friends = [{
  username: 'David',
  status: 'online',
  lastActivity: 10
}, {
  username: 'Lucy',
  status: 'offline',
  lastActivity: 22
},
{
  username: 'Tom',
  status: 'online',
  lastActivity: 8
}, {
  username: 'Bob',
  status: 'online',
  lastActivity: 104
}]

whosOnline(friends)

// {
//   online: ['David', 'Tom'],
//   offline: ['Lucy'],
//   away: ['Bob']
// }

friends = [{
  username: 'Lucy',
  status: 'offline',
  lastActivity: 22
}, {
  username: 'Bob',
  status: 'online',
  lastActivity: 104
}]

whosOnline(friends)

// {
//   offline: ['Lucy'],
//   away: ['Bob']
// }