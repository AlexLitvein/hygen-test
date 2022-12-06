---
to: app/hello.js
---
const hello = ```
Hello!
This is your first hygen template.
Learn what it can do here:
https://github.com/jondot/hygen

```
<% path %>
<%= h.getContent(path) %>

/*
 <% ['1', '2' , '3' ].forEach(function (el){ %>
    elVal=<%- el %>
 <% }) %>
 */

// console.log(hello)


<% for( let index = 0; index < 3; index++ ) { %>
<symbol id="<%- res.name %>">
<%- res.content %>
</symbol>
<% } %>











