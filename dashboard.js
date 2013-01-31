var data = {
    employees: [
    {   firstName: "Christophe",
        lastName: "Coenraets"},
    {   firstName: "John",
        lastName: "Smith"}
    ]};

var template = "Employees:<ul>{{#employees}}" +
                            "<li>{{firstName}} {{lastName}}</li>" +
                            "{{/employees}}</ul>";

var html = Mustache.to_html(template, data);
$('#sampleArea').html(html);


$.getJSON('http://celldata.media.mit.edu:8050/account/dashboard', function(data) {
    var template = $('#dashboardTpl').html();
    var dashdata = {data: data.tokens_issued};
//	client: data.tokens_issued[0].client,
//	key: data.tokens_issued[0].scopes[0].key,
//	description: data.tokens_issued[0].scopes[0].description};
    var html = Mustache.to_html(template, dashdata);
    $('#sampleArea').html(html);
});
