const friend2 = (friends) => {
  new_friends = [];
  for (let friend_element of friends) {
      if (friend_element.length == 4) {
          new_friends.push(friend_element);
      }
  }
  return new_friends;
}


// best practice

const friend = (friends) => friends.filter(x => x.length == 4)

console.log(friend(["Ryan", "Kieran", "Mark"]))

