(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['skillTable'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "            <div>\n                <img src=\""
    + alias2(alias1((depth0 != null ? depth0.imgSrc : depth0), depth0))
    + "\">\n                <figcaption>"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</figcaption>\n            </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "table>\n<thead>\n<th>Beginner</th>\n<th>Developed</th>\n<th>Experiened</th>\n</thead>\n\n<tr>\n    <td class=\"rightBorder\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.beginners : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </td>\n    <td class=\"rightBorder\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.developed : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </td>\n    <td>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.experienced : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </td>\n</tr>\n\n\n</table>";
},"useData":true});
})();