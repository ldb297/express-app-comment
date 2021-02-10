<% if (images.length < 1) { %>
    <h4>Explore your space!</h4>
  <% } %>
  
  <% for(let i = 0; i < images.length; i++) { %>
      <h2>
        <a href="/projects/<%= images[i].id %>"> <img src="images.url" alt="images.description"></a><%= images[i].name %>
      </h2>
    </div>
  <% } %> 