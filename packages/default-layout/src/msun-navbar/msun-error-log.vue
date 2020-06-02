<template>
  <div v-if="errorLogs.length > 0">
    <ms-badge :is-dot="true" class="msun-error-log_badge" @click.native="dialogTableVisible = true">
      <ms-button size="small" type="danger">
        <svg-icon name="bug"></svg-icon>
      </ms-button>
    </ms-badge>
    <ms-dialog :visible.sync="dialogTableVisible" width="80%" append-to-body>
      <div slot="title">
        <span class="msun-error-log_span_right">Error Log</span>
        <ms-button type="primary" icon="ms-icon-delete" size="mini" @click="clearAll">
          Clear All
        </ms-button>
      </div>
      <ms-table :data="errorLogs" border>
        <ms-table-column label="Message">
          <template slot-scope="{row}">
            <div>
              <span class="msun-error-log_title">Msg:</span>
              <ms-tag type="danger">
                {{ row.err.message }}
              </ms-tag>
            </div>
            <br>
            <div>
              <span class="msun-error-log_title msun-error-log_span_right">Info:</span>
              <ms-tag type="warning">
                {{ row.vm.$vnode.tag }} error in {{ row.info }}
              </ms-tag>
            </div>
            <br>
            <div>
              <span class="msun-error-log_title msun-error-log_right">Url:</span>
              <ms-tag type="success">
                {{ row.url }}
              </ms-tag>
            </div>
          </template>
        </ms-table-column>
        <ms-table-column label="Stack">
          <template slot-scope="scope">
            {{ scope.row.err.stack }}
          </template>
        </ms-table-column>
      </ms-table>
    </ms-dialog>
  </div>
</template>
<script>
import MsBadge from 'msun-lib-ui/packages/badge';
import MsButton from 'msun-lib-ui/packages/button';
import MsDialog from 'msun-lib-ui/packages/dialog';
import MsTag from 'msun-lib-ui/packages/tag';
import MsTable from 'msun-lib-ui/packages/table';
import MsTableColumn from 'msun-lib-ui/packages/table-column';

export default {
  name: 'MsunErrorLog',
  components: {
    MsBadge,
    MsButton,
    MsDialog,
    MsTag,
    MsTable,
    MsTableColumn
  },
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