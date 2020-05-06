<template>
  <div id="console">
    <div class="content">
      <div class="main-content">
        <h1>全区疫情情况追踪</h1>
      </div>
      <div class="info">
        <div class="addinfo">
          <div class="num" style="color:#f31c73">150</div>
          <div class="title">累计确诊</div>
        </div>
        <div class="isinfo">
          <div class="num" style="color:#ff8d1a">2700</div>
          <div class="title">累计疑似</div>
        </div>

        <div class="susinfo">
          <div class="num" style="color:#927363">2</div>
          <div class="title">累计死亡</div>
        </div>
      </div>
    </div>
    <ve-line :data="chartData" :settings="chartSettings" :colors="colors"></ve-line>
  </div>
</template>
  </div>
</template>
<script>
export default {
  name: "consoleIndex",
  data() {
    this.colors = ['#f31c73','#ff8d1a', '#927363',]
    
    this.chartSettings = {
      labelMap: {
        add: "累计确诊",
        sus: "累计疑似",
        die: "累计死亡"
      },
      xAxisType: 'time',
      yAxisType:"normal",
      
    };
    return {
      chartData: {
        columns: ["日期", "add", "sus", "die"],
        rows: [
          { 日期: "2020-01-00", add: 3, sus: 3, die: 14 },
          { 日期: "2020-01-10", add: 13, sus: 6, die: 44 },
          { 日期: "2020-01-15", add: 3, sus: 9, die: 45 },
          { 日期: "2020-01-20", add: 43, sus: 12, die: 55 },
          { 日期: "2020-01-25", add: 23, sus: 15, die: 44 },
          { 日期: "2020-01-30", add: 23, sus: 20, die: 37 }
        ]
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.echarts {
  width: 100%;
  height: 100%;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main-content {
  font-size: 30px;
  margin-bottom: 10px;
}
.info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 60%;
}
.num {
  font-size: 50px;
}
.title {
  margin-top: 20px;
  margin-bottom: 40px;
  font-size: 30px;
}
</style>