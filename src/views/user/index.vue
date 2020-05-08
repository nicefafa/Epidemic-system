<template>
  <div id="user">
    <el-row :gutter="14">
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
          >新增用户</el-button
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
        <el-table-column prop="name" label="镇名" width="100"></el-table-column>
        <el-table-column
          prop="email"
          label="邮箱"
          width="260"
        ></el-table-column>
        <el-table-column
          prop="username"
          label="用户名"
          width="260"
        ></el-table-column>
        <el-table-column
          prop="password"
          label="用户密码"
          width="260"
        ></el-table-column>
        <el-table-column prop="role" label="角色"></el-table-column>
        <el-table-column label="操作">
          <!-- 编辑和删除-->
          <template slot-scope="scope">
            <el-button size="mini" @click="dialog_flag = true">编辑</el-button>
            <el-button size="mini" type="danger" @click="deleteItem"
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
    <addUser :flag.sync="dialog_flag" />
    <addUser_edit :flag.sync="dialog_flag" />
  </div>
</template>
<script>
import addUser from "../../components/dialog/addUser";
import addUser_edit from "../../components/dialog_edit/addUser_edit";
import { reactive, ref, watch, onMounted } from "@vue/composition-api";
import { GetUserInfo } from "../../api/user";
export default {
  name: "user",
  components: { addUser, addUser_edit },
  setup(props, { root }) {
    const search_keyWork = ref("");
    const dialog_flag = ref(false);
    /** 
    关键字选择器
    */
    const search_key = ref("镇名");
    const search_options = reactive([
      { value: "镇名", label: "镇名" },
      { value: "邮箱", label: "邮箱" }
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
      item:[]
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

    //删除
    const deleteItem = () => {
      root.confirm({
        content: "此操作将永久删除这条数据, 是否继续?",
        fn: fn_confirm,
        id: "13231311"
      });
    };

    //这里调用删除接口
    const fn_confirm = value => {
      console.log(value);
    };
    // 获取user信息的接口
    const getUserinfo = () => {
      GetUserInfo()
        .then(response => {
          let data = response.data
          tableData.item=data.result
        })
        .catch(error => {});
    };
    // 生命周期
    onMounted(() => {
      getUserinfo();
    });

    return {
      deleteItem,
      dialog_flag,
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