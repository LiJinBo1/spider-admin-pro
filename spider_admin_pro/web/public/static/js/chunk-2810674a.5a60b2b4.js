(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2810674a"],{"4a11":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("ProjectTool",{on:{success:t.getData}}),t._v(" "),n("div",{staticStyle:{height:"20px"}}),t._v(" "),n("ProjectTable",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list},on:{success:t.getData}})],1)},a=[],o=(n("e186"),n("7590")),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("mo-table",t._g(t._b({},"mo-table",t.$attrs,!1),t.$listeners),[n("el-table-column",{attrs:{align:"center",label:"序号",width:"60"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.$index+1)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"项目名",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.project)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"查看版本",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("router-link",{attrs:{to:{name:"project-version",params:{project:e.row.project}}}},[n("i",{staticClass:"el-icon-folder-opened"}),t._v(" 版本\n        ")])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"查看Spider",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("router-link",{attrs:{to:{name:"spider-list",query:{project:e.row.project}}}},[n("i",{staticClass:"el-icon-tickets"}),t._v(" Spider\n        ")])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"查看任务",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("router-link",{attrs:{to:{name:"job-list",query:{project:e.row.project}}}},[n("i",{staticClass:"el-icon-date"}),t._v(" 任务\n        ")])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"查看日志",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("router-link",{attrs:{to:{name:"logs-project",params:{project:e.row.project}}}},[n("i",{staticClass:"el-icon-document"}),t._v(" 日志\n        ")])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"更新版本",align:"center",width:"100px"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("ProjectAdd",{attrs:{project:t.row.project,type:"version"}})]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"删除项目",align:"center",width:"100px"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("ProjectDelete",{attrs:{project:e.row.project},on:{success:function(e){return t.$emit("success")}}})]}}])})],1)],1)},i=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-popconfirm",{attrs:{title:"确定删除？"},on:{confirm:t.handleDelete}},[n("el-button",t._b({attrs:{slot:"reference",size:"mini",icon:"el-icon-delete"},slot:"reference"},"el-button",t.$attrs,!1),[t._v("删除")])],1)},l=[],u={name:"",props:{project:{type:String}},components:{},data:function(){return{}},computed:{},methods:{handleDelete:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$Http.scrapydDeleteProject({project:this.project});case 2:e=t.sent,0==e.code?(this.$message.success("删除成功"),this.$emit("success")):this.$message.error(e.msg);case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){}},p=u,d=n("cba8"),f=Object(d["a"])(p,c,l,!1,null,"8279092e",null),m=f.exports,h=n("f794"),v={name:"",props:[],components:{ProjectDelete:m,ProjectAdd:h["a"]},data:function(){return{}},computed:{},methods:{getData:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.getData()}},g=v,_=Object(d["a"])(g,s,i,!1,null,"5b7a2831",null),b=_.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("ProjectAdd",{on:{success:function(e){return t.$emit("success")}}})],1)},w=[],y={name:"",props:[],components:{ProjectAdd:h["a"]},data:function(){return{}},computed:{},methods:{getData:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.getData()}},k=y,x=Object(d["a"])(k,j,w,!1,null,"2106ebb2",null),$=x.exports,S={components:{ProjectTable:b,ProjectTool:$},data:function(){return{list:null,listLoading:!0}},created:function(){this.getData()},methods:{getData:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.listLoading=!0,t.next=3,this.$Http.scrapydListProjects();case 3:e=t.sent,this.listLoading=!1,this.list=e.data;case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},D=S,P=Object(d["a"])(D,r,a,!1,null,"009b420f",null);e["default"]=P.exports},f794:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("el-button",{attrs:{size:"mini",icon:"el-icon-document-add"},on:{click:function(e){t.dialogVisible=!0}}},[t._v("添加")]),t._v(" "),n("el-dialog",{attrs:{title:"添加项目",visible:t.dialogVisible,width:"500px",center:""},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("el-form",{attrs:{model:t.form,"status-icon":"","label-width":"80px",size:"small"}},[n("el-form-item",{attrs:{label:"项目名称",prop:"project",required:""}},[n("ProjectSearch",{staticStyle:{width:"360px"},attrs:{value:t.form.project,disabled:null!=t.project},on:{"update:value":function(e){return t.$set(t.form,"project",e)}}})],1),t._v(" "),n("el-form-item",{attrs:{label:"项目文件",prop:"egg",required:""}},[n("el-upload",{ref:"upload",attrs:{drag:"",action:"",accept:".egg","auto-upload":!1,multiple:!1,"show-file-list":!1,"on-change":t.handleChange}},[n("i",{staticClass:"el-icon-upload"}),t._v(" "),n("div",{staticClass:"el-upload__text"},[t._v("\n            将文件拖到此处，或"),n("em",[t._v("点击上传")])]),t._v(" "),n("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[n("span",[t._v("只能上传egg文件。")]),n("span",[t._v("推荐使用：")]),n("a",{staticClass:"mo-link",attrs:{href:"https://pypi.org/project/scrapyd-client/",target:"_blank"}},[t._v("scrapyd-client")])])]),t._v(" "),n("span",[t._v(t._s(t.form.egg.name))])],1)],1),t._v(" "),n("span",{attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{size:"small"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),n("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.addVersion}},[t._v("确 定")])],1)],1)],1)},a=[],o=(n("e186"),n("7590")),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-autocomplete",t._b({attrs:{"fetch-suggestions":t.querySearch},on:{select:t.handleSelect},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.item;return[n("span",[t._v(t._s(r.project))])]}}]),model:{value:t._value,callback:function(e){t._value=e},expression:"_value"}},"el-autocomplete",t.$attrs,!1))},i=[],c={name:"",props:{value:{type:String}},components:{},data:function(){return{list:[]}},computed:{_value:{get:function(){return this.value},set:function(t){this.$emit("update:value",t)}}},methods:{querySearch:function(t,e){var n=t?this.filterItem(t):this.list;e(n)},filterItem:function(t){return this.list.filter((function(e){return 0==e.project.toLowerCase().indexOf(t.toLowerCase())}))},handleSelect:function(t){this._value=t.project},getData:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$Http.scrapydListProjects();case 2:e=t.sent,this.list=e.data;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.getData()}},l=c,u=n("cba8"),p=Object(u["a"])(l,s,i,!1,null,"a50c045a",null),d=p.exports,f={name:"",props:{project:{type:String,default:null}},components:{ProjectSearch:d},data:function(){return{dialogVisible:!1,form:{project:"",egg:""}}},computed:{},watch:{dialogVisible:function(t){t&&(this.form.project=this.project)}},methods:{addVersion:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=new FormData,e.append("project",this.form.project),e.append("egg",this.form.egg),t.next=5,this.$Http.scrapydAddVersion(e);case 5:n=t.sent,0==n.code?(this.$message.success("上传成功"),this.$emit("success"),this.dialogVisible=!1):this.$message.error(n.msg);case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),handleChange:function(t,e){this.form.egg=t.raw}},created:function(){}},m=f,h=Object(u["a"])(m,r,a,!1,null,"ab631288",null);e["a"]=h.exports}}]);