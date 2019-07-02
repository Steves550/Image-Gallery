import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 423e31fbf6fba9cd8a1bc0823ba6c1597cc8f0703eaea02175af70622628a4eb'
  }
});
