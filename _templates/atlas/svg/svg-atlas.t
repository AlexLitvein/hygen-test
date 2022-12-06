---
to: app/<%= out %>
force: true
---
<svg width="40" height="26" viewBox="0 0 40 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<% array=h.getSvgFilesContentArray(path) %>
<% array.forEach(element => { -%>
<%- element %>
<% }) -%>
