# Hydrating using JSON script tag

We can insert a `<script>` tag containing the serialized state in JSON format
and use that to hydrate the state.

In this example, the server renders a `<script type="application/json">` tag and
inserts the serialized state as its content. The client selects this element and
deserializes its `textContent`.

The advantage of this method is the relatively low overhead, similar to the
JSON-injection method. Compared to the JSON-injection method, this method does
not require the client-side script to be generated dynamically so it can be 
cached permanently.

The disadvantage of this method is that the server now has to maintain two
sources of truth for the client and ensure they are in sync. For example, if
we are dealing with sorting and filtering on the server side, we need to
make sure the serialized JSON matches the sorting and filtering applied to the
HTML. Another disadvantage is that, when JavaScript is disabled client-side, 
the serialized state is still downloaded and ends up just bloating the HTML.
