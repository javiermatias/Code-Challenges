
const ctx = document.getElementById('myChart');



const DATA_COUNT = 7;
const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

const labels = ["190", "210","230","250","270", "290", "310"]; //valor 1 dolar en pesos

const data1=labels.map(x => parseInt(5000000 / parseInt(x)));



const data = {
  labels: labels,
  datasets: [
    {
      label: 'Dolar Vs pesos',
      data: data1,
      borderColor: '#FF2D00',
      backgroundColor: '#FA8072',
    }
  ]
};

 


  const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      scale: {
        ticks: {
          
          stepSize: 1,
          precision: 0,
         beginAtZero: true
        }
      },
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Valor en dolares de 5 millones de pesos'
        }
      }
    },
  };


 






const myChart = new Chart(ctx, config);