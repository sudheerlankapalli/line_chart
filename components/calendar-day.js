import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import Chart from 'chart.js';

export default class CalendarDayComponent extends Component {
  @tracked chartId = `chart-${Math.random().toString(36).substr(2, 9)}`;

  @action
  createChart() {
    let ctx = document.getElementById(this.chartId).getContext('2d');
    // eslint-disable-next-line no-unused-vars
    let chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: 'Example Dataset',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
