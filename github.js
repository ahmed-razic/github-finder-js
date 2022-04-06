class GitHub {
  constructor() {
    this.client_id = '6db23869cb96ecf6407a';
    this.client_secret = '4e3e2751c86dc8c1c22bbcc5fc60f1df87fbf61a';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&this.client_secret=${this.client_secret}`
    );

    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&this.client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return { profile: profile, repos: repos };
  }
}
