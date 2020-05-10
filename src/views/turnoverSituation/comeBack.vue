<template>
  <div id="comeBack">
    <el-row :gutter="14">
      <el-col :span="8">
        <div class="label-wrap date">
          <label for="">日期：&nbsp;&nbsp;</label>
          <div class="warp-content">
            <el-date-picker
              v-model="date_value"
              type="datetime"
              placeholder="选择日期时间"
              format="yyyy 年 MM 月 dd 日"
              value-format="yyyy-MM-dd"
            >
            </el-date-picker>
          </div>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="label-wrap key-work">
          <label for="">关键字：&nbsp;&nbsp;</label>
          <div class="warp-content">
            <el-select v-model="search_key">
              <el-option
                v-for="item in search_options"
                :key="item.value"
                :value="item.value"
                :label="item.label"
              ></el-option>
            </el-select>
          </div>
        </div>
      </el-col>
      <el-col :span="5">
        <el-input
          v-model="search_keyWork"
          placeholder="请输入内容"
          style="width: 100%;"
        ></el-input>
      </el-col>
      <el-col :span="2">
        <el-button type="info" style="width:80%;">搜索</el-button>
      </el-col>

      <el-col :span="4">
        <el-button
          type="danger"
          class="pull-right"
          style="width: 100%;"
          @click="dialog_flag = true"
          >新增返乡人员</el-button
        >
      </el-col>
    </el-row>
    <!-- 表格数据-->
    <div class="table">
      <el-table
        :data="tableData.item"
        style="width: 100%"
        :row-class-name="tableRowClassName"
        border
      >
        <el-table-column
          prop="inb"
          label="身份证号码"
          width="180"
        ></el-table-column>
        <el-table-column prop="name" label="姓名" width="100"></el-table-column>
        <el-table-column prop="age" label="年龄" width="60"></el-table-column>
        <el-table-column
          prop="tnb"
          label="电话号码"
          width="130"
        ></el-table-column>
        <el-table-column
          prop="adress"
          label="家庭地址"
          width="260"
        ></el-table-column>
        <el-table-column
          prop="time"
          label="返乡时间"
          width="150"
        ></el-table-column>
        <el-table-column
          prop="status"
          label="身体状况"
          width="100"
        ></el-table-column>
        <el-table-column
          prop="town.tname"
          label="管理人"
          width="115"
        ></el-table-column>
        <el-table-column label="操作">
          <!-- 编辑和删除-->
          <template slot-scope="scope">
            <el-button size="mini" @click="edit_info(scope.row.id)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="deleteItem(scope.row.id)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 底部-->
    <div class="bottom">
      <el-row>
        <el-col :span="9">
          -
        </el-col>
        <el-col :span="15">
          <el-pagination
            class="pull-right"
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :page-sizes="[10, 20, 50, 100]"
            layout="total, sizes, prev, pager, next, jumper"
            :total="1000"
          >
          </el-pagination
        ></el-col>
      </el-row>
    </div>
    <!-- addInfo新增病例弹框 -->
    <comeInfo :flag.sync="dialog_flag" />
    <comeInfo_edit :id="infoID" :flag.sync="dialog_flag_edit" />
  </div>
</template>
<script>
import { Message } from "element-ui";
import { GetComeBackUserInfo, DeletComeBackUserInfo } from "../../api/comeBack";
import comeInfo from "../../components/dialog/comeInfo";
import comeInfo_edit from "../../components/dialog_edit/comeInfo_edit";
import { reactive, ref, watch, onMounted } from "@vue/composition-api";
import { Form } from "element-ui";
export default {
  name: "comeBack",
  components: { comeInfo, comeInfo_edit },
  setup(props, { root }) {
    const date_value = ref("");
    const search_keyWork = ref("");
    const dialog_flag = ref(false);

    const dialog_flag_edit = ref(false);
    /** 
    关键字选择器
    */
    const search_key = ref("身份证号码");
    const search_options = reactive([
      { value: "身份证号码", label: "身份证号码" },
      { value: "姓名", label: "姓名" }
    ]);

    /**
     表格染色方法
     */
    const tableRowClassName = ({ row, rowIndex }) => {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    };
    /**
     表格数据
     */
    const tableData = reactive({
      item: []
    });
    /**
      分页
     */
    const handleSizeChange = val => {
      page.pageSize = val;
    };
    const handleCurrentChange = val => {
      page.pageNumber = val;
    };
    //editinfo
   
    const infoID = ref("");
    const edit_info = id => {
      infoID.value = id + "";
      dialog_flag_edit.value = true;
    };



    //删除
    const deleteItem_id = ref("");
    const deleteItem = id => {
      deleteItem_id.value = id;
      root.confirm({
        content: "此操作将永久删除这条数据, 是否继续?",
        fn: fn_confirm
      });
    };

    //这里调用删除接口
    const fn_confirm = value => {
      DeletComeBackUserInfo({ id: deleteItem_id.value })
        .then(response => {
          let data = response.data;
          Message.success(data.massege);
          getComeBackinfo();
        })
        .catch(error => {
          console.log(error);
        });
    };
    // 获取全部user信息
    const getComeBackinfo = () => {
      let reuquestData = {
        tid: localStorage.getItem("tid")
      };
      GetComeBackUserInfo(reuquestData)
        .then(response => {
          console.log(response.data.result[0]);
          let data = response.data.result;
          tableData.item = data;
        })
        .catch(error => {});
    };
    onMounted(() => {
      getComeBackinfo();
    });

    return {
      edit_info,
      infoID,
      deleteItem_id,
      dialog_flag_edit,
      deleteItem,
      dialog_flag,
      date_value,
      search_keyWork,
      search_key,
      search_options,
      tableRowClassName,
      tableData,
      handleSizeChange,
      handleCurrentChange
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../../styles/config.scss";
.label-wrap {
  &.category {
    @include labelDom(left, 60, 40);
  }
  &.date {
    @include labelDom(right, 93, 40);
  }
  &.key-work {
    @include labelDom(right, 99, 40);
  }
}

.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
.table {
  margin-top: 40px;
}
.pull-right {
  float: right;
}
.bottom {
  margin-top: 15px;
}
</style>