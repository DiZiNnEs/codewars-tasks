const friend = (friends) => {
  new_friends = [];
  for (let friend_element of friends) {
      if (friend_element.length == 4) {
          new_friends.push(friend_element);
      }
  }
  return new_friends;
}


console.log(friend(["Ryan", "Kieran", "Mark"]))

