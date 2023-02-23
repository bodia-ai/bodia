const axios = require('axios');

class Bodia {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://api.bodia.ai/v1';
  }

  async newFineTune(params) {
    const url = `${this.baseUrl}/finetunes`;
    const headers = {
      Authorization: `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json'
    };
    const data = JSON.stringify(params);
    const response = await axios.post(url, data, { headers });
    return response.data;
  }
}

module.exports = (apiKey) => {
  return new Bodia(apiKey);
};

