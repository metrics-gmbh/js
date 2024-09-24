# Metrics.gmbh

**Metrics.gmbh - metrics but for devs**
- It has what devs crave.

**Goals:**
- No web GUI
- CLI control for creating new metrics and checking on metrics
- CLI account control
- Targeted at developers and those more hands on
- Move fast in the environments devs are familiar with

**Why:**
- Because I don't need another browser tab open.
- I wanted quick glance views and a data source I can do things with (like event source from)
- Most devs work with JSON and understand it

**Consists of:**
- A basic CLI tool for account management and showing metrics on a terminal dashboard
- An API service: [https://api.metrics.gmbh](https://api.metrics.gmbh)
- A sink service (for sending metrics to): [https://sink.metrics.gmbh](https://sink.metrics.gmbh)

## This repository?
Contains code used for collecting metrics. Will eventually have links for API docs and a user guide.

Currently the `/webvisit` script is the only one published, which collects data from the browser when people visit your site. Right now it's very basic, but does what I need it to do.

# You want it huh?

It's under development. Check back in 2025 or email me: [metrics.gmbh@dave.dev](mailto:metrics.gmbh@dave.dev)
