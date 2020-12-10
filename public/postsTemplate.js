(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['posts'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"user-post\">\r\n    <div>\r\n      <span class=\"first-name\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"firstName") || (depth0 != null ? lookupProperty(depth0,"firstName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"firstName","hash":{},"data":data,"loc":{"start":{"line":3,"column":31},"end":{"line":3,"column":44}}}) : helper)))
    + "</span> <span class=\"last-name\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"lastName") || (depth0 != null ? lookupProperty(depth0,"lastName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lastName","hash":{},"data":data,"loc":{"start":{"line":3,"column":76},"end":{"line":3,"column":88}}}) : helper)))
    + "</span> <span class=\"year\"><i>"
    + alias4(((helper = (helper = lookupProperty(helpers,"year") || (depth0 != null ? lookupProperty(depth0,"year") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"year","hash":{},"data":data,"loc":{"start":{"line":3,"column":118},"end":{"line":3,"column":126}}}) : helper)))
    + "</i></span> <span class=\"last-name\"><i>"
    + alias4(((helper = (helper = lookupProperty(helpers,"major") || (depth0 != null ? lookupProperty(depth0,"major") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"major","hash":{},"data":data,"loc":{"start":{"line":3,"column":165},"end":{"line":3,"column":174}}}) : helper)))
    + "</i></span>\r\n    </div>\r\n    <div>\r\n        <p class=\"user-comment\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"comment") || (depth0 != null ? lookupProperty(depth0,"comment") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"comment","hash":{},"data":data,"loc":{"start":{"line":6,"column":32},"end":{"line":6,"column":43}}}) : helper)))
    + "</p>\r\n    </div>\r\n</div>";
},"useData":true});
})();