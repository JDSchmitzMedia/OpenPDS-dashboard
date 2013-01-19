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


$.getJSON('http://celldata.media.mit.edu:8040/account/dashboard', function(data) {
    var template = $('#personTpl').html();
    var html = Mustache.to_html(template, data);
    $('#sampleArea').html(html);
});
