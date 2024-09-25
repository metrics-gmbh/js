# WebVisit

**Metrics.gmbh - metrics but for devs**
*- It has what devs crave*


### WebVisit

```javascript
// Check the latest releases and put the latest in the bottom. I prefer statically pinned due to caching etc.
// Then put this on your website in place of Google analytics, Plausible etc etc.
// It doesn't use cookies but might one day use local storage for tracking session usage (within the site).
// Note, no data is collected or distributed and sold to external third parties.
// This data goes to a private API end-point for your use only.

<script
    defer
    src="https://cdn.jsdelivr.net/gh/metrics-gmbh/js@0.1.7/webvisit/webvisit.js"
    data-domain="https://example.com"
></script>
```

Right now, this service is in alpha and you cannot create an account. That said, it won't be long before I'll open up test pilots for the preview.

