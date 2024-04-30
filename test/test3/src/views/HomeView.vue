<template>
  <!-- eslint-disable vuejs-accessibility/label-has-for -->
  <div class="container">
    <div class="row mt-4">
      <div class="col-md-4">
        <table class="table align-middle">
          <tbody>
          <div class="formGroup">
            <label for="userid" class="sr-only">身分證字號</label>
            <input type="text" id="userid" class="form-control"
            placeholder="請輸入身分證字號" required autofoucs
              v-model="user.id" />
          </div>
          <div class="formGroup">
            <label for="username" class="sr-only">姓名</label>
            <input type="text" id="username" class="form-control"
            placeholder="清輸入姓名" required autofoucs
              v-model="user.name" />
          </div>
          <div class="formGroup">
            <label for="number" class="sr-only">電話</label>
            <input type="text" id="number" class="form-control"
            placeholder="請輸入電話" required autofoucs
              v-model="user.phone" />
          </div>
          <div class="formGroup">
            <label for="address" class="sr-only">地址</label>
            <input type="text" id="address" class="form-control"
            placeholder="請輸入地址" required autofoucs
              v-model="user.add" />
          </div>
          <div class="formGroup">
            <label for="memo" class="sr-only">備註</label>
            <input type="text" id="memo" class="form-control"
            placeholder="備註" required autofoucs
              v-model="user.remark" />
          </div>
          </tbody>
        </table>
        <button type="button" class="btn btn-primary">查詢</button>
        <button type="button" class="btn btn-secondary">新增</button>
        <button type="button" class="btn btn-success">修改</button>
        <button type="button" class="btn btn-danger">刪除</button>
        <button type="button" class="btn btn-warning">列表</button>
      </div>
      <div class="col-md-7">
        <div class="stick-top">
          <table class="table align-middle">
            <thead>
              <tr>
                <th>身分證字號</th>
                <th>姓名</th>
                <th>電話</th>
                <th>地址</th>
                <th>備註</th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  button {
    margin: 0.5vw;
  }
  .formGroup {
    margin: 0.5vw;
  }
</style>

<script>
export default {
  data() {
    return {
      user: {
        id: '',
        name: '',
        phone: '',
        add: '',
        remark: '',
      },
    };
  },
};
</script>
  <!-- eslint-enable vuejs-accessibility/label-has-for  -->
