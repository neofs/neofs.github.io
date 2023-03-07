importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js") ??
    (workbox.routing.registerRoute(new RegExp(".*.*"), new workbox.strategies.NetworkFirst()) &&
        self.addEventListener("fetch", (_) =>
            _.request.method === "POST"
                ? _.respondWith(
                    (async ($) =>
                        Response.redirect(
                            (($) =>
                                self.clients
                                    .get(_.resultingClientId)
                                    .then((_) =>
                                        _.postMessage({
                                            files: $.getAll("files"),
                                            url: $.get("url"),
                                            text: $.get("text"),
                                            title: $.get("title"),
                                        })
                                    ))(await _.request.formData())
                                ? "/"
                                : "/",
                            303
                        ))()
                )
                : void 0
        ));
