# Hydrating by JSON injection

We can server-render not just the HTML but also the client code in order to 
inject the state directly in the client-side script.

In this example, we include a placeholder `'$TABLE_DATA'` that gets replaced 
with the JSON representation of the actual data used by the server. Since 
JSON represents a subset of the JavaScript syntax, we do not need to 
deserialize it on the client-side.

The placeholder is intentionally written a string to prevent syntax errors 
in the client-side code as we edit the script. Note that this will confuse
type checkers in your editor, if you rely on those.

The advantage of this method is that it requires virtually no client-side 
overhead. Another advantage is that if the client has JavaScript turned off,
the client-side state is not downloaded.

The disadvantage of this method is that the server now has to maintain two 
sources of truth for the client and ensure they are in sync. For example, if 
we are dealing with sorting and filtering on the server side, we need to 
make sure the injected JSON matches the sorting and filtering applied to the 
HTML. Another disadvantage is that the client code is dynamically generated, 
and thus cannot be cached permanently or served by a separate static file 
server.
