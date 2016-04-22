var i;

for (i in Handlebars.templates) {
    $('#' + i).append(Handlebars.templates[i](eval(i)));
}