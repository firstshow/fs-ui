(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{102:function(t,e,i){},121:function(t,e,i){"use strict";var a=i(102);i.n(a).a},135:function(t,e,i){"use strict";i.r(e);var a=i(126),s=i(108),n=i(125),l=i(104);function o(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var r={components:{SidebarButton:a.a,NavLinks:l.a,SearchBox:n.a,AlgoliaSearchBox:s.a},data:function(){return{linksWrapMaxWidth:null}},mounted:function(){var t=this,e=parseInt(o(this.$el,"paddingLeft"))+parseInt(o(this.$el,"paddingRight")),i=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};i(),window.addEventListener("resize",i,!1)},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},c=(i(121),i(18)),h=Object(c.a)(r,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"navbar"},[i("SidebarButton",{on:{"toggle-sidebar":function(e){t.$emit("toggle-sidebar")}}}),t._v(" "),i("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?i("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?i("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle)+" "),i("sub",{staticClass:"version"},[t._v("v"+t._s(t.$themeConfig.version))])]):t._e()]),t._v(" "),i("div",{staticClass:"links",style:{"max-width":t.linksWrapMaxWidth+"px"}},[t.isAlgoliaSearch?i("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search?i("SearchBox"):t._e(),t._v(" "),i("NavLinks",{staticClass:"can-hide"})],1)],1)},[],!1,null,null,null);h.options.__file="Navbar.vue";e.default=h.exports}}]);