const csvUrl = '/csv/sharesfound/by-miner-sharesfound.csv';
const dateData = [];

const totalDweezilData = [];

Papa.parse(csvUrl, {
  download: true,
  header: true,
  delimiter: ",",
  complete: data => {
    data.data.forEach(row => {
      const dateString = row['Date'];

const dweezil = row['dweezil'];

      // Check for missing or invalid data
      //if (!dateString || isNaN(value)) {
      //  console.log('Invalid or missing data found. Skipping this row.');
      //  return;
      //}

      // Parse the date string and convert it to a timestamp
      const date = new Date(dateString).getTime();

      dateData.push(date);
      //totalData.push(Number(total));

      totalDweezilData.push({ x:date, y: dweezil});
    });
    
    const areaOptions = {
      chart: {
        id: "barChart",
        stacked: true,
        type: "bar",
        height: 275,
        foreColor: "#ccc",
        toolbar: {
          autoSelected: "pan",
          show: false
        }
      },
      /* TODO Need to paramerize the next line based on the number of active miners */
      colors: ["#23ac35", "#FF6500", "#C40C0C", "#FFC100", "#472a07", "#014510", "#3bb4e0"],
      stroke: {
	    curve: 'stepline',
        width: 3
      },
      grid: {
        borderColor: "#555",
        clipMarkers: false,
        yaxis: {
          lines: {
            show: false
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        gradient: {
          enabled: true,
          opacityFrom: 0.55,
          opacityTo: 0,
        }
      },
      markers: {
        size: 0,
        colors: ["#000524"],
        strokeColor: "#00baec",
        strokeWidth: 1
      },
      series: [
        {
          name: "Dweezil",
          data: totalDweezilData
        },
      ],
      tooltip: {
        theme: "dark"
      },
      title: {
	    text: 'Shares Found by Worker',
	    align: 'left'
      },
      xaxis: {
        type: "datetime"
      },
      yaxis: {
        min: 0
      }
    };

    var areaChart = new ApexCharts(document.querySelector("#areaChart"), areaOptions);
    areaChart.render();

  }});

