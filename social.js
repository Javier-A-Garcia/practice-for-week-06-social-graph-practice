// Implement the SocialNetwork class here
class SocialNetwork {

  constructor() {
    this.users = {};
    this.follows = {};
    this.currentID = 0;
  }

  addUser(name) {
    // Your code here
    this.currentID++;

    let newUser = {
      "id": this.currentID,
      "name": name
    };

    this.users[newUser.id] = newUser;
    this.follows[newUser.id] = new Set();

    return newUser.id;
  }

  getUser(userID) {
    // Your code here

    if (!this.users[userID]) return null;

    return this.users[userID];
  }

  follow(userID1, userID2) {
    // Your code here

    if (!this.users[userID1] || !this.users[userID2]) return false;
    if (this.follows[userID1].has(userID2)) return false;

    this.follows[userID1].add(userID2);
    return true;
  }

  getFollows(userID) {
    // Your code here
    return this.follows[userID];
  }

  getFollowers(userID) {
   // Your code here
    let followers = new Set();

    for (let user in this.follows) {
      let userFollows = this.getFollows(user);

      if (userFollows.has(userID)) {
        let userID = this.getUser(user).id;
        followers.add(userID);
      }
    }

    return followers;
  }

  getRecommendedFollows(userID, degrees) {
    // Your code here
  }
}

module.exports = SocialNetwork;
