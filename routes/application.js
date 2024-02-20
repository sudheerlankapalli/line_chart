// app/routes/index.js

import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    // Fetch the JSON data (replace this with your actual data fetching logic)
    const response = await fetch('/data/revenueData.json');
    const data = await response.json();
    return data;
  }
}
