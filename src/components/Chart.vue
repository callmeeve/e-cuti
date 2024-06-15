<script setup>
import { ref } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

window.Apex.chart = {
  fontFamily: 'Montserrat, sans-serif'
}

const chartData = {
  series: [
    {
      name: 'Pengajuan Cuti Disetujui',
      data: [10, 15, 14, 20, 18, 25, 30, 35, 40, 38, 32, 28] // Example data for approved leaves
    },
    {
      name: 'Pengajuan Cuti Ditolak',
      data: [2, 5, 3, 6, 4, 7, 8, 5, 6, 5, 4, 3] // Example data for rejected leaves
    }
  ],
  labels: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
}

const chart = ref(null)

const apexOptions = {
  legend: {
    show: true, // Show legend
    position: 'bottom',
    horizontalAlign: 'center'
  },
  colors: ['#3C50E0', '#80CAEE'],
  chart: {
    fontFamily: 'Montserrat, sans-serif',
    height: 335,
    type: 'area',
    dropShadow: {
      enabled: true,
      color: '#623CEA14',
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1
    },
    toolbar: {
      show: false
    }
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 300
        }
      }
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 350
        }
      }
    }
  ],
  stroke: {
    width: [2, 2],
    curve: 'straight'
  },
  labels: {
    show: false,
    position: 'top'
  },
  grid: {
    xaxis: {
      lines: {
        show: true
      }
    },
    yaxis: {
      lines: {
        show: true
      }
    }
  },
  dataLabels: {
    enabled: false
  },
  markers: {
    size: 4,
    colors: '#fff',
    strokeColors: ['#3056D3', '#80CAEE'],
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    hover: {
      size: undefined,
      sizeOffset: 5
    }
  },
  xaxis: {
    type: 'category',
    categories: chartData.labels,
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    title: {
      style: {
        fontSize: '0px'
      }
    },
    min: 0,
    max: 50 // Adjusted to fit the example data
  }
}
</script>

<template>
  <div
    class="col-span-12 rounded-sm border bg-white p-5 shadow xl:col-span-8"
  >
    <div>
      <div id="chartOne" class="-ml-5">
        <VueApexCharts
          type="area"
          height="400"
          :options="apexOptions"
          :series="chartData.series"
          ref="chart"
        />
      </div>
    </div>
  </div>
</template>
