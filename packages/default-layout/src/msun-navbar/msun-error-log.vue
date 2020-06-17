<template>
  <div v-if="errorLogs.length > 0">
    <el-badge :is-dot="true" class="msun-error-log_badge" @click.native="dialogTableVisible = true">
      <el-button size="small" type="danger">
        <svg-icon name="bug"></svg-icon>
      </el-button>
    </el-badge>
    <el-dialog :visible.sync="dialogTableVisible" width="80%" append-to-body>
      <div slot="title">
        <span class="msun-error-log_span_right">Error Log</span>
        <el-button type="primary" icon="el-icon-delete" size="mini" @click="clearAll">
          Clear All
        </el-button>
      </div>
      <el-table :data="errorLogs" border>
        <el-table-column label="Message">
          <template slot-scope="{row}">
            <div>
              <span class="msun-error-log_title">Msg:</span>
              <el-tag type="danger">
                {{ row.err.message }}
              </el-tag>
            </div>
            <br>
            <div>
              <span class="msun-error-log_title msun-error-log_span_right">Info:</span>
              <el-tag type="warning">
                {{ row.vm.$vnode.tag }} error in {{ row.info }}
              </el-tag>
            </div>
            <br>
            <div>
              <span class="msun-error-log_title msun-error-log_right">Url:</span>
              <el-tag type="success">
                {{ row.url }}
              </el-tag>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="Stack">
          <template slot-scope="scope">
            {{ scope.row.err.stack }}
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'MsunErrorLog',
  data() {
    return {
      dialogTableVisible: false
    };
  },
  computed: {
    errorLogs() {
      return this.$mStore.state.ErrorLog.logs;
    }
  },
  methods: {
    clearAll() {
      this.dialogTableVisible = false;
      this.$mStore.dispatch('ClearErrorLog');
    }
  }
};
</script>