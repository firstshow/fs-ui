(this.webpackJsonpfsui=this.webpackJsonpfsui||[]).push([[25],{148:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("fs-group",{attrs:{title:"选择单个日期"}},[s("fs-input",{attrs:{placeholder:"请选择日期",type:"search"},on:{"on-search":function(e){t.show=!0}},model:{value:t.startTime,callback:function(e){t.startTime=e},expression:"startTime"}}),s("fs-calendar",{attrs:{show:t.show},on:{"update:show":function(e){t.show=e},changeStartTime:function(e){t.startTime=e}}})],1),s("fs-group",{attrs:{title:"选择单个日期-默认日期"}},[s("fs-input",{attrs:{placeholder:"请选择日期",type:"search"},on:{"on-search":function(e){t.show1=!0}},model:{value:t.startTime1,callback:function(e){t.startTime1=e},expression:"startTime1"}}),s("fs-calendar",{attrs:{show:t.show1,start:t.startTime1},on:{"update:show":function(e){t.show1=e},changeStartTime:function(e){t.startTime=e}}})],1),s("fs-group",{attrs:{title:"选择单个日期-自动关闭"}},[s("fs-input",{attrs:{placeholder:"请选择日期",type:"search"},on:{"on-search":function(e){t.show2=!0}},model:{value:t.startTime2,callback:function(e){t.startTime2=e},expression:"startTime2"}}),s("fs-calendar",{attrs:{show:t.show2,autoclose:""},on:{"update:show":function(e){t.show2=e},changeStartTime:function(e){t.startTime2=e}}})],1),s("fs-group",{attrs:{title:"选择日期范围"}},[s("fs-input",{attrs:{placeholder:"请选择日期",type:"search"},on:{"on-search":function(e){t.show3=!0}},model:{value:t.formatTime3,callback:function(e){t.formatTime3=e},expression:"formatTime3"}}),s("fs-calendar",{attrs:{show:t.show3,isTimeRange:!0},on:{"update:show":function(e){t.show3=e},changeStartTime:function(e){t.startTime3=e},changeEndTime:function(e){t.endTime3=e}}})],1),s("fs-group",{attrs:{title:"选择日期范围-默认范围"}},[s("fs-input",{attrs:{placeholder:"请选择日期",type:"search"},on:{"on-search":function(e){t.show4=!0}},model:{value:t.formatTime4,callback:function(e){t.formatTime4=e},expression:"formatTime4"}}),s("fs-calendar",{attrs:{show:t.show4,isTimeRange:!0,start:t.startTime4,end:t.endTime4},on:{"update:show":function(e){t.show4=e},changeStartTime:function(e){t.startTime4=e},changeEndTime:function(e){t.endTime4=e}}})],1),s("fs-group",{attrs:{title:"选择日期范围-20天以内"}},[s("fs-input",{attrs:{placeholder:"请选择日期",type:"search"},on:{"on-search":function(e){t.show5=!0}},model:{value:t.formatTime5,callback:function(e){t.formatTime5=e},expression:"formatTime5"}}),s("fs-calendar",{attrs:{show:t.show5,isTimeRange:!0,numberDay:20},on:{"update:show":function(e){t.show5=e},changeStartTime:function(e){t.startTime5=e},changeEndTime:function(e){t.endTime5=e}}})],1)],1)};a._withStripped=!0;var n={data:function(){return{startTime:"",startTime1:"2018-10-12",startTime2:"",startTime3:"",startTime4:"2018-11-11",startTime5:"",endTime3:"",endTime4:"2018-12-21",endTime5:"",show:!1,show1:!1,show2:!1,show3:!1,show4:!1,show5:!1}},computed:{formatTime3:function(){return this.startTime3&&this.endTime3?"".concat(this.startTime3,"——").concat(this.endTime3):""},formatTime4:function(){return this.startTime4&&this.endTime4?"".concat(this.startTime4,"——").concat(this.endTime4):""},formatTime5:function(){return this.startTime5&&this.endTime5?"".concat(this.startTime5,"——").concat(this.endTime5):""}}},i=s(1),o=Object(i.a)(n,a,[],!1,null,null,null);o.options.__file="packages/calendar/demo/index.vue";e.default=o.exports}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mc3VpLy4vcGFja2FnZXMvY2FsZW5kYXIvZGVtby9pbmRleC52dWU/NWI1ZSIsIndlYnBhY2s6Ly9mc3VpL3BhY2thZ2VzL2NhbGVuZGFyL2RlbW8vaW5kZXgudnVlIiwid2VicGFjazovL2ZzdWkvLi9wYWNrYWdlcy9jYWxlbmRhci9kZW1vL2luZGV4LnZ1ZT9lZWIxIiwid2VicGFjazovL2ZzdWkvLi9wYWNrYWdlcy9jYWxlbmRhci9kZW1vL2luZGV4LnZ1ZSJdLCJuYW1lcyI6WyJyZW5kZXIiLCJfdm0iLCJ0aGlzIiwiX2giLCIkY3JlYXRlRWxlbWVudCIsIl9jIiwiX3NlbGYiLCJhdHRycyIsInRpdGxlIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwib24iLCJvbi1zZWFyY2giLCIkZXZlbnQiLCJzaG93IiwibW9kZWwiLCJ2YWx1ZSIsInN0YXJ0VGltZSIsImNhbGxiYWNrIiwiJCR2IiwiZXhwcmVzc2lvbiIsInVwZGF0ZTpzaG93IiwiY2hhbmdlU3RhcnRUaW1lIiwic2hvdzEiLCJzdGFydFRpbWUxIiwic3RhcnQiLCJzaG93MiIsInN0YXJ0VGltZTIiLCJhdXRvY2xvc2UiLCJzaG93MyIsImZvcm1hdFRpbWUzIiwiaXNUaW1lUmFuZ2UiLCJzdGFydFRpbWUzIiwiY2hhbmdlRW5kVGltZSIsImVuZFRpbWUzIiwic2hvdzQiLCJmb3JtYXRUaW1lNCIsInN0YXJ0VGltZTQiLCJlbmQiLCJlbmRUaW1lNCIsInNob3c1IiwiZm9ybWF0VGltZTUiLCJudW1iZXJEYXkiLCJzdGFydFRpbWU1IiwiZW5kVGltZTUiLCJfd2l0aFN0cmlwcGVkIiwiY2FsZW5kYXJfZGVtb3Z1ZV90eXBlX3NjcmlwdF9sYW5nX2pzXyIsImRhdGEiLCJjb21wdXRlZCIsImNvbmNhdCIsImNvbXBvbmVudCIsIk9iamVjdCIsImNvbXBvbmVudE5vcm1hbGl6ZXIiLCJvcHRpb25zIiwiX19maWxlIiwiX193ZWJwYWNrX2V4cG9ydHNfXyJdLCJtYXBwaW5ncyI6InNHQUFB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QixLQUFBZ0MsU0FBQSxHQUFBZSxPQUFBL0MsS0FBQThCLFdBQUEsTUFBQWlCLE9BQUEvQyxLQUFBZ0MsVUFBQSxJQUVBRSxZQUpBLFdBS0EsT0FBQWxDLEtBQUFtQyxZQUFBbkMsS0FBQXFDLFNBQUEsR0FBQVUsT0FBQS9DLEtBQUFtQyxXQUFBLE1BQUFZLE9BQUEvQyxLQUFBcUMsVUFBQSxJQUVBRSxZQVBBLFdBUUEsT0FBQXZDLEtBQUF5QyxZQUFBekMsS0FBQTBDLFNBQUEsR0FBQUssT0FBQS9DLEtBQUF5QyxXQUFBLE1BQUFNLE9BQUEvQyxLQUFBMEMsVUFBQSxhRWxEQU0sRUFBZ0JDLE9BQUFDLEVBQUEsRUFBQUQsQ0FDZEwsRUFDQTlDLEVIc05GLElHcE5BLEVBQ0EsS0FDQSxLQUNBLE1BdUJBa0QsRUFBQUcsUUFBQUMsT0FBQSxtQ0FDZUMsRUFBQSxRQUFBTCIsImZpbGUiOiJhc3luY18yNS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJmcy1ncm91cFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRpdGxlOiBcIumAieaLqeWNleS4quaXpeacn1wiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZnMtaW5wdXRcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgcGxhY2Vob2xkZXI6IFwi6K+36YCJ5oup5pel5pyfXCIsIHR5cGU6IFwic2VhcmNoXCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIFwib24tc2VhcmNoXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5zaG93ID0gdHJ1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5zdGFydFRpbWUsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uc3RhcnRUaW1lID0gJCR2XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic3RhcnRUaW1lXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcImZzLWNhbGVuZGFyXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHNob3c6IF92bS5zaG93IH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBcInVwZGF0ZTpzaG93XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5zaG93ID0gJGV2ZW50XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNoYW5nZVN0YXJ0VGltZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLnN0YXJ0VGltZSA9ICRldmVudFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcImZzLWdyb3VwXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdGl0bGU6IFwi6YCJ5oup5Y2V5Liq5pel5pyfLem7mOiupOaXpeacn1wiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZnMtaW5wdXRcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgcGxhY2Vob2xkZXI6IFwi6K+36YCJ5oup5pel5pyfXCIsIHR5cGU6IFwic2VhcmNoXCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIFwib24tc2VhcmNoXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5zaG93MSA9IHRydWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uc3RhcnRUaW1lMSxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS5zdGFydFRpbWUxID0gJCR2XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic3RhcnRUaW1lMVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJmcy1jYWxlbmRhclwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBzaG93OiBfdm0uc2hvdzEsIHN0YXJ0OiBfdm0uc3RhcnRUaW1lMSB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgXCJ1cGRhdGU6c2hvd1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uc2hvdzEgPSAkZXZlbnRcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgY2hhbmdlU3RhcnRUaW1lOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uc3RhcnRUaW1lID0gJGV2ZW50XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiZnMtZ3JvdXBcIixcbiAgICAgICAgeyBhdHRyczogeyB0aXRsZTogXCLpgInmi6nljZXkuKrml6XmnJ8t6Ieq5Yqo5YWz6ZetXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJmcy1pbnB1dFwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBwbGFjZWhvbGRlcjogXCLor7fpgInmi6nml6XmnJ9cIiwgdHlwZTogXCJzZWFyY2hcIiB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgXCJvbi1zZWFyY2hcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLnNob3cyID0gdHJ1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5zdGFydFRpbWUyLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLnN0YXJ0VGltZTIgPSAkJHZcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzdGFydFRpbWUyXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcImZzLWNhbGVuZGFyXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHNob3c6IF92bS5zaG93MiwgYXV0b2Nsb3NlOiBcIlwiIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBcInVwZGF0ZTpzaG93XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5zaG93MiA9ICRldmVudFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBjaGFuZ2VTdGFydFRpbWU6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5zdGFydFRpbWUyID0gJGV2ZW50XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiZnMtZ3JvdXBcIixcbiAgICAgICAgeyBhdHRyczogeyB0aXRsZTogXCLpgInmi6nml6XmnJ/ojIPlm7RcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImZzLWlucHV0XCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHBsYWNlaG9sZGVyOiBcIuivt+mAieaLqeaXpeacn1wiLCB0eXBlOiBcInNlYXJjaFwiIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBcIm9uLXNlYXJjaFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uc2hvdzMgPSB0cnVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm1hdFRpbWUzLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLmZvcm1hdFRpbWUzID0gJCR2XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybWF0VGltZTNcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiZnMtY2FsZW5kYXJcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgc2hvdzogX3ZtLnNob3czLCBpc1RpbWVSYW5nZTogdHJ1ZSB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgXCJ1cGRhdGU6c2hvd1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uc2hvdzMgPSAkZXZlbnRcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgY2hhbmdlU3RhcnRUaW1lOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uc3RhcnRUaW1lMyA9ICRldmVudFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBjaGFuZ2VFbmRUaW1lOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uZW5kVGltZTMgPSAkZXZlbnRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJmcy1ncm91cFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRpdGxlOiBcIumAieaLqeaXpeacn+iMg+WbtC3pu5jorqTojIPlm7RcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImZzLWlucHV0XCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHBsYWNlaG9sZGVyOiBcIuivt+mAieaLqeaXpeacn1wiLCB0eXBlOiBcInNlYXJjaFwiIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBcIm9uLXNlYXJjaFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uc2hvdzQgPSB0cnVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm1hdFRpbWU0LFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLmZvcm1hdFRpbWU0ID0gJCR2XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybWF0VGltZTRcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiZnMtY2FsZW5kYXJcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgc2hvdzogX3ZtLnNob3c0LFxuICAgICAgICAgICAgICBpc1RpbWVSYW5nZTogdHJ1ZSxcbiAgICAgICAgICAgICAgc3RhcnQ6IF92bS5zdGFydFRpbWU0LFxuICAgICAgICAgICAgICBlbmQ6IF92bS5lbmRUaW1lNFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIFwidXBkYXRlOnNob3dcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLnNob3c0ID0gJGV2ZW50XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNoYW5nZVN0YXJ0VGltZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLnN0YXJ0VGltZTQgPSAkZXZlbnRcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgY2hhbmdlRW5kVGltZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLmVuZFRpbWU0ID0gJGV2ZW50XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiZnMtZ3JvdXBcIixcbiAgICAgICAgeyBhdHRyczogeyB0aXRsZTogXCLpgInmi6nml6XmnJ/ojIPlm7QtMjDlpKnku6XlhoVcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImZzLWlucHV0XCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHBsYWNlaG9sZGVyOiBcIuivt+mAieaLqeaXpeacn1wiLCB0eXBlOiBcInNlYXJjaFwiIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBcIm9uLXNlYXJjaFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uc2hvdzUgPSB0cnVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm1hdFRpbWU1LFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLmZvcm1hdFRpbWU1ID0gJCR2XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybWF0VGltZTVcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiZnMtY2FsZW5kYXJcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgc2hvdzogX3ZtLnNob3c1LCBpc1RpbWVSYW5nZTogdHJ1ZSwgbnVtYmVyRGF5OiAyMCB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgXCJ1cGRhdGU6c2hvd1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uc2hvdzUgPSAkZXZlbnRcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgY2hhbmdlU3RhcnRUaW1lOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uc3RhcnRUaW1lNSA9ICRldmVudFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBjaGFuZ2VFbmRUaW1lOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uZW5kVGltZTUgPSAkZXZlbnRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8ZnMtZ3JvdXAgdGl0bGU9XCLpgInmi6nljZXkuKrml6XmnJ9cIj5cbiAgICAgIDxmcy1pbnB1dCBwbGFjZWhvbGRlcj1cIuivt+mAieaLqeaXpeacn1wiIHR5cGU9XCJzZWFyY2hcIiBAb24tc2VhcmNoPVwic2hvdyA9IHRydWVcIiB2LW1vZGVsPVwic3RhcnRUaW1lXCIvPlxuICAgICAgPGZzLWNhbGVuZGFyIDpzaG93LnN5bmM9XCJzaG93XCIgIEBjaGFuZ2VTdGFydFRpbWU9XCJzdGFydFRpbWUgPSAkZXZlbnRcIi8+XG4gICAgPC9mcy1ncm91cD5cbiAgICA8ZnMtZ3JvdXAgdGl0bGU9XCLpgInmi6nljZXkuKrml6XmnJ8t6buY6K6k5pel5pyfXCI+XG4gICAgICA8ZnMtaW5wdXQgcGxhY2Vob2xkZXI9XCLor7fpgInmi6nml6XmnJ9cIiB0eXBlPVwic2VhcmNoXCIgQG9uLXNlYXJjaD1cInNob3cxID0gdHJ1ZVwiIHYtbW9kZWw9XCJzdGFydFRpbWUxXCIvPlxuICAgICAgPGZzLWNhbGVuZGFyIDpzaG93LnN5bmM9XCJzaG93MVwiICBAY2hhbmdlU3RhcnRUaW1lPVwic3RhcnRUaW1lID0gJGV2ZW50XCIgOnN0YXJ0PVwic3RhcnRUaW1lMVwiLz5cbiAgICA8L2ZzLWdyb3VwPlxuICAgIDxmcy1ncm91cCB0aXRsZT1cIumAieaLqeWNleS4quaXpeacny3oh6rliqjlhbPpl61cIj5cbiAgICAgIDxmcy1pbnB1dCBwbGFjZWhvbGRlcj1cIuivt+mAieaLqeaXpeacn1wiIHR5cGU9XCJzZWFyY2hcIiBAb24tc2VhcmNoPVwic2hvdzIgPSB0cnVlXCIgdi1tb2RlbD1cInN0YXJ0VGltZTJcIi8+XG4gICAgICA8ZnMtY2FsZW5kYXIgOnNob3cuc3luYz1cInNob3cyXCIgIEBjaGFuZ2VTdGFydFRpbWU9XCJzdGFydFRpbWUyID0gJGV2ZW50XCIgYXV0b2Nsb3NlLz5cbiAgICA8L2ZzLWdyb3VwPlxuICAgIDxmcy1ncm91cCB0aXRsZT1cIumAieaLqeaXpeacn+iMg+WbtFwiPlxuICAgICAgPGZzLWlucHV0IHBsYWNlaG9sZGVyPVwi6K+36YCJ5oup5pel5pyfXCIgdHlwZT1cInNlYXJjaFwiIEBvbi1zZWFyY2g9XCJzaG93MyA9IHRydWVcIiB2LW1vZGVsPVwiZm9ybWF0VGltZTNcIi8+XG4gICAgICA8ZnMtY2FsZW5kYXIgOnNob3cuc3luYz1cInNob3czXCIgOmlzVGltZVJhbmdlPVwidHJ1ZVwiICBAY2hhbmdlU3RhcnRUaW1lPVwic3RhcnRUaW1lMyA9ICRldmVudFwiIEBjaGFuZ2VFbmRUaW1lPVwiZW5kVGltZTMgPSAkZXZlbnRcIi8+XG4gICAgPC9mcy1ncm91cD5cbiAgICA8ZnMtZ3JvdXAgdGl0bGU9XCLpgInmi6nml6XmnJ/ojIPlm7Qt6buY6K6k6IyD5Zu0XCI+XG4gICAgICA8ZnMtaW5wdXQgcGxhY2Vob2xkZXI9XCLor7fpgInmi6nml6XmnJ9cIiB0eXBlPVwic2VhcmNoXCIgQG9uLXNlYXJjaD1cInNob3c0ID0gdHJ1ZVwiIHYtbW9kZWw9XCJmb3JtYXRUaW1lNFwiLz5cbiAgICAgIDxmcy1jYWxlbmRhciA6c2hvdy5zeW5jPVwic2hvdzRcIiA6aXNUaW1lUmFuZ2U9XCJ0cnVlXCIgIDpzdGFydD1cInN0YXJ0VGltZTRcIiA6ZW5kPVwiZW5kVGltZTRcIiBAY2hhbmdlU3RhcnRUaW1lPVwic3RhcnRUaW1lNCA9ICRldmVudFwiIEBjaGFuZ2VFbmRUaW1lPVwiZW5kVGltZTQgPSAkZXZlbnRcIi8+XG4gICAgPC9mcy1ncm91cD5cbiAgICA8ZnMtZ3JvdXAgdGl0bGU9XCLpgInmi6nml6XmnJ/ojIPlm7QtMjDlpKnku6XlhoVcIj5cbiAgICAgIDxmcy1pbnB1dCBwbGFjZWhvbGRlcj1cIuivt+mAieaLqeaXpeacn1wiIHR5cGU9XCJzZWFyY2hcIiBAb24tc2VhcmNoPVwic2hvdzUgPSB0cnVlXCIgdi1tb2RlbD1cImZvcm1hdFRpbWU1XCIvPlxuICAgICAgPGZzLWNhbGVuZGFyIDpzaG93LnN5bmM9XCJzaG93NVwiIDppc1RpbWVSYW5nZT1cInRydWVcIiA6bnVtYmVyRGF5PVwiMjBcIiAgQGNoYW5nZVN0YXJ0VGltZT1cInN0YXJ0VGltZTUgPSAkZXZlbnRcIiBAY2hhbmdlRW5kVGltZT1cImVuZFRpbWU1ID0gJGV2ZW50XCIvPlxuICAgIDwvZnMtZ3JvdXA+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdGFydFRpbWU6ICcnLFxuICAgICAgc3RhcnRUaW1lMTogJzIwMTgtMTAtMTInLFxuICAgICAgc3RhcnRUaW1lMjogJycsXG4gICAgICBzdGFydFRpbWUzOiAnJyxcbiAgICAgIHN0YXJ0VGltZTQ6ICcyMDE4LTExLTExJyxcbiAgICAgIHN0YXJ0VGltZTU6ICcnLFxuICAgICAgZW5kVGltZTM6ICcnLFxuICAgICAgZW5kVGltZTQ6ICcyMDE4LTEyLTIxJyxcbiAgICAgIGVuZFRpbWU1OiAnJyxcbiAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgc2hvdzE6IGZhbHNlLFxuICAgICAgc2hvdzI6IGZhbHNlLFxuICAgICAgc2hvdzM6IGZhbHNlLFxuICAgICAgc2hvdzQ6IGZhbHNlLFxuICAgICAgc2hvdzU6IGZhbHNlXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGZvcm1hdFRpbWUzICgpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXJ0VGltZTMgJiYgdGhpcy5lbmRUaW1lMyA/IGAke3RoaXMuc3RhcnRUaW1lM33igJTigJQke3RoaXMuZW5kVGltZTN9YCA6ICcnXG4gICAgfSxcbiAgICBmb3JtYXRUaW1lNCAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGFydFRpbWU0ICYmIHRoaXMuZW5kVGltZTQgPyBgJHt0aGlzLnN0YXJ0VGltZTR94oCU4oCUJHt0aGlzLmVuZFRpbWU0fWAgOiAnJ1xuICAgIH0sXG4gICAgZm9ybWF0VGltZTUgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhcnRUaW1lNSAmJiB0aGlzLmVuZFRpbWU1ID8gYCR7dGhpcy5zdGFydFRpbWU1feKAlOKAlCR7dGhpcy5lbmRUaW1lNX1gIDogJydcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ3ODExNTAzJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvd2FuZ2d1YW53ZWkvRGVza3RvcC9wcm9qZWN0L2ZzLXVpL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0NzgxMTUwMycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0NzgxMTUwMycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ3ODExNTAzJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzQ3ODExNTAzJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWNrYWdlcy9jYWxlbmRhci9kZW1vL2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=