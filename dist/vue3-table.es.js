import { defineComponent, resolveComponent, openBlock, createBlock, mergeProps, withCtx, createElementBlock, Fragment, renderList, createSlots, renderSlot, normalizeProps, guardReactiveProps, reactive, ref, computed, resolveDirective, createElementVNode, toDisplayString, createVNode, createCommentVNode, withDirectives } from "vue";
const __default__$1 = defineComponent({
  name: "MultistageColumn"
});
const _sfc_main$2 = defineComponent({
  ...__default__$1,
  props: {
    column: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_multistage_column = resolveComponent("multistage-column", true);
      const _component_el_table_column = resolveComponent("el-table-column");
      return openBlock(), createBlock(_component_el_table_column, mergeProps({
        label: __props.column.label,
        prop: __props.column.label
      }, __props.column), {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.column.children, (item) => {
            return openBlock(), createElementBlock(Fragment, null, [
              item.children && item.children.length ? (openBlock(), createBlock(_component_multistage_column, {
                key: item.prop,
                column: item
              }, null, 8, ["column"])) : (openBlock(), createBlock(_component_el_table_column, mergeProps({
                key: item.id,
                ref_for: true
              }, item, { "show-overflow-tooltip": "" }), createSlots({ _: 2 }, [
                item.slotName ? {
                  name: "default",
                  fn: withCtx((scope) => [
                    renderSlot(_ctx.$slots, item.slotName, { data: scope })
                  ]),
                  key: "0"
                } : void 0
              ]), 1040))
            ], 64);
          }), 256))
        ]),
        _: 3
      }, 16, ["label", "prop"]);
    };
  }
});
const _sfc_main$1 = defineComponent({
  __name: "Pagination",
  props: {
    pageConfig: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_el_pagination = resolveComponent("el-pagination");
      return openBlock(), createBlock(_component_el_pagination, normalizeProps(guardReactiveProps(__props.pageConfig)), null, 16);
    };
  }
});
var main_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1 = { class: "common-table" };
const _hoisted_2 = { class: "multi-menu" };
const _hoisted_3 = { style: { "font-size": "12px" } };
const _hoisted_4 = {
  key: 1,
  class: "pagination"
};
const __default__ = {
  name: "ds-vue3-table"
};
const _sfc_main = defineComponent({
  ...__default__,
  props: {
    tableData: {
      type: Array,
      default: () => []
    },
    tableConfig: {
      type: Object,
      default: () => {
      }
    },
    columns: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: false
    },
    showPagination: {
      type: Boolean,
      default: true
    },
    paginationConfig: {
      type: Object,
      default: () => {
      }
    }
  },
  emits: [
    "pageSizeChange",
    "currentPageChange",
    "multiSelection"
  ],
  setup(__props, { expose: __expose, emit: __emit }) {
    const prop = __props;
    const emit = __emit;
    const state = reactive({
      selection: []
    });
    const commonTableRef = ref(null);
    const _tableConfig = computed(() => {
      let result = {};
      const _tableConfig2 = { label: "\u64CD\u4F5C", minWidth: 80, fixed: "right" };
      prop.tableConfig.handlerConfig && Object.assign(_tableConfig2, prop.tableConfig.handlerConfig);
      const config = {
        rowKey: "id",
        showSeletion: false,
        showIndexColumn: false,
        indexLabel: "\u5E8F\u53F7",
        isCheckMemory: false,
        showHandler: false,
        showExpand: false,
        showAppend: false,
        appendLabel: "\u81EA\u5B9A\u4E49"
      };
      result = Object.assign(config, prop.tableConfig);
      result.handlerConfig = _tableConfig2;
      return result;
    });
    const _paginationConfig = computed(() => {
      const config = {
        total: 0,
        current: 1,
        pageSize: 10,
        pageSizes: [10, 20, 30, 50],
        layout: "total, sizes, prev, pager, next, jumper"
      };
      return Object.assign(config, prop.paginationConfig);
    });
    function pageSizeChange(pageSize) {
      emit("pageSizeChange", pageSize);
    }
    function currentPageChange(pageIndex) {
      emit("currentPageChange", pageIndex);
    }
    function clearSelection() {
      state.selection = [];
      commonTableRef.value.clearSelection();
    }
    function selectionChange(selection) {
      state.selection = selection;
      emit("multiSelection", selection);
    }
    function typeIndex(index2) {
      const tabIndex = index2 + (_paginationConfig.value.current - 1) * _paginationConfig.value.pageSize + 1;
      return tabIndex;
    }
    function toggleRowSelection(row, selected) {
      commonTableRef.value.toggleRowSelection(row, selected);
    }
    function toggleAllSelection() {
      commonTableRef.value.toggleAllSelection();
    }
    function toggleRowExpansion(row, expanded) {
      commonTableRef.value.toggleRowExpansion(row, expanded);
    }
    function setCurrentRow(row) {
      commonTableRef.value.setCurrentRow(row);
    }
    function clearSort() {
      commonTableRef.value.clearSort();
    }
    function clearFilter(columnKeys) {
      commonTableRef.value.clearFilter(columnKeys);
    }
    function doLayout() {
      commonTableRef.value.doLayout();
    }
    function sort(prop2, order) {
      commonTableRef.value.sort(prop2, order);
    }
    __expose({
      clearSelection,
      toggleRowSelection,
      toggleAllSelection,
      toggleRowExpansion,
      setCurrentRow,
      clearSort,
      clearFilter,
      doLayout,
      sort
    });
    return (_ctx, _cache) => {
      const _component_el_divider = resolveComponent("el-divider");
      const _component_el_row = resolveComponent("el-row");
      const _component_el_table_column = resolveComponent("el-table-column");
      const _component_el_table = resolveComponent("el-table");
      const _directive_loading = resolveDirective("loading");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _tableConfig.value.showSeletion && state.selection.length ? (openBlock(), createBlock(_component_el_row, {
          key: 0,
          justify: "space-between",
          style: { "align-items": "center", "margin": "10px 0" }
        }, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_2, [
              createElementVNode("span", _hoisted_3, "\u5DF2\u9009\u4E2D" + toDisplayString(state.selection.length) + "\u9879", 1),
              createVNode(_component_el_divider, { direction: "vertical" }),
              renderSlot(_ctx.$slots, "multiSelectMenu", {
                selection: state.selection
              }, void 0, true)
            ]),
            createElementVNode("a", {
              class: "close",
              onClick: clearSelection
            })
          ]),
          _: 3
        })) : createCommentVNode("", true),
        withDirectives((openBlock(), createBlock(_component_el_table, mergeProps({
          ref_key: "commonTableRef",
          ref: commonTableRef,
          data: __props.tableData
        }, _ctx.$attrs, {
          rowKey: _tableConfig.value.rowKey,
          onSelectionChange: selectionChange
        }), {
          default: withCtx(() => [
            _tableConfig.value.showExpand ? (openBlock(), createBlock(_component_el_table_column, {
              key: 0,
              type: "expand"
            }, {
              default: withCtx((props) => [
                renderSlot(_ctx.$slots, "expand", { props }, void 0, true)
              ]),
              _: 3
            })) : createCommentVNode("", true),
            _tableConfig.value.showSeletion ? (openBlock(), createBlock(_component_el_table_column, {
              key: 1,
              type: "selection",
              width: "60",
              "reserve-selection": _tableConfig.value.isCheckMemory,
              align: "center"
            }, null, 8, ["reserve-selection"])) : createCommentVNode("", true),
            _tableConfig.value.showIndexColumn ? (openBlock(), createBlock(_component_el_table_column, {
              key: 2,
              type: "index",
              index: typeIndex,
              width: "60"
            }, {
              header: withCtx(() => [
                createElementVNode("span", null, toDisplayString(_tableConfig.value.indexLabel), 1)
              ]),
              _: 1
            })) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.columns, (column) => {
              return openBlock(), createElementBlock(Fragment, null, [
                column.children && column.children.length ? (openBlock(), createBlock(_sfc_main$2, {
                  key: column.prop,
                  column
                }, null, 8, ["column"])) : (openBlock(), createBlock(_component_el_table_column, mergeProps({
                  key: column.id,
                  ref_for: true
                }, column, { "show-overflow-tooltip": "" }), createSlots({ _: 2 }, [
                  column.slotName ? {
                    name: "default",
                    fn: withCtx((scope) => [
                      renderSlot(_ctx.$slots, column.slotName, { scope }, void 0, true)
                    ]),
                    key: "0"
                  } : void 0
                ]), 1040))
              ], 64);
            }), 256)),
            _tableConfig.value.showHandler ? (openBlock(), createBlock(_component_el_table_column, normalizeProps(mergeProps({ key: 3 }, _tableConfig.value.handlerConfig)), {
              default: withCtx((scope) => [
                renderSlot(_ctx.$slots, "handler", { scope }, void 0, true)
              ]),
              _: 3
            }, 16)) : createCommentVNode("", true),
            _tableConfig.value.showAppend ? (openBlock(), createBlock(_component_el_table_column, {
              key: 4,
              type: "append",
              label: _tableConfig.value.appendLabel
            }, {
              default: withCtx((props) => [
                renderSlot(_ctx.$slots, "append", { props }, void 0, true)
              ]),
              _: 3
            }, 8, ["label"])) : createCommentVNode("", true)
          ]),
          _: 3
        }, 16, ["data", "rowKey"])), [
          [_directive_loading, __props.loading]
        ]),
        __props.showPagination ? (openBlock(), createElementBlock("div", _hoisted_4, [
          createVNode(_sfc_main$1, {
            pageConfig: _paginationConfig.value,
            onSizeChange: pageSizeChange,
            onCurrentChange: currentPageChange
          }, null, 8, ["pageConfig"])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
var XmwTable = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1f26fa16"]]);
XmwTable.install = function(Vue) {
  Vue.component(XmwTable.name, XmwTable);
};
const components = [
  XmwTable
];
const install = function(Vue) {
  if (install.installed)
    return;
  install.installed = true;
  components.map((component) => {
    Vue.component(component.name, component);
  });
};
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
var index = {
  install,
  ...components
};
export { index as default };
