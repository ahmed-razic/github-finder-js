class GitHub {
  constructor() {
    this.client_id = '6db23869cb96ecf6407a';
    this.client_secret = '4e3e2751c86dc8c1c22bbcc5fc60f1df87fbf61a';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&this.client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return { profile: profile };
  }
}
