# Hydrating from HTML

We can treat HTML as the serialized snapshot of the (default) state. We 
deserialize the HTML once at during initialization, and then we proceed as 
usual to sync the state and HTML.

In this example, we show only the deserialization step (`hydrate()`).

To make the deserialization of the table somewhat generic, we use the 
`data-type` attribute to annotate the column type, and we use matching 
deserialization functions for each cell based on its column. This is done so 
that the server can have as much flexibility in defining the initial state 
as possible.

We also take advantage of the access to DOM nodes to assign a `$tr` property to
the array holding the hydrated data. This is useful if we are doing sorting 
and filtering on the data, for example.

The advantage of this method is that the HTML serves as the single source of 
truth. Access to DOM during hydration provides an opportunity to cache the 
DOM node references if needed.

The disadvantage of this method is the performance hit of iterating over the 
nodes and converting the data.
