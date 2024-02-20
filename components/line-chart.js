/* eslint-disable ember/no-component-lifecycle-hooks */
// app/components/line-chart.js

import Component from '@glimmer/component';
import { action } from '@ember/object';
import Chart from 'chart.js';

export default class LineChartComponent extends Component {
  @action
  generateChart() {
    const ctx = document.getElementById('line-chart').getContext('2d');
    // eslint-disable-next-line no-unused-vars
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.args.data.map((item) => item.label),
        datasets: [
          {
            label: 'Revenue',
            data: this.args.data.map((item) => item.revenue),
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false,
          },
          {
            label: 'Cost',
            data: this.args.data.map((item) => item.cost),
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }

  @action
  didInsertElement() {
    this.generateChart();
  }
}
