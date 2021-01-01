---
layout: post
title:  "node sass vs grunt sass vs dart sass vs ruby sass"
date:   2018-07-18 00:00:00 +0000
categories: benchmark frontend performance
permalink: /node-sass-vs-grunt-sass-vs-dart-sass-vs-ruby-sass/
author: David Gracie
---
Do you want lightning-fast SCSS/SASS compilation? I did, so I set out to find the fastest that’s currently out there.

My results are based on the average of three runs compiling 16907 lines of SCSS code on a Macbook Pro, 2.8GHz Intel Core i7, 16GB 1600 MHz DDR3 RAM with macOS High Sierra 10.13.5.

Please note, I’m not a benchmarking expert. There are other tools, such as gulp and webpack, that are not included here. However, I would expect those tools to have similar performance as grunt. Your results may vary.

![Sass compiler performance comparison](/assets/images/sass-compiler-comparison.png)

[Node Sass with Grunt](https://github.com/sindresorhus/grunt-sass) – fastest

Compressed (production ready): 0.2s (0.6s on 1st run)
Expanded (development): 0.2s (0.6s on 1st run)

The first run is the same as running node sass standalone but it seems grunt caches part of the process which speeds up subsequent builds substantially when using a watch task. The [grunt-sass repo recommends using fibers](https://github.com/sindresorhus/grunt-sass) to improve performance. However, I didn’t see any difference so I’ve not included it here.

[Node Sass with CLI](https://github.com/sass/node-sass) – fast

Compressed (production ready): 0.6s
Expanded (development): 0.6s

While not the fastest way to compile SCSS using node sass, it is still an attractive option for those that don’t use grunt. It’s easy to use in the command line so can be run as part of a continuous integration (CI/CD) process without requiring a task runner such as grunt, gulp or webpack.

[Dart Sass with CLI](https://github.com/sass/dart-sass) – fast

Compressed (production ready): 1.1s
Expanded (development): 1.0s

Dart sass seems to be the most likely option developers would choose when presented with the [ruby sass deprecation notice](https://sass-lang.com/ruby-sass). In terms of speed, it’s still a massive improvement over ruby sass.

[Ruby Sass with CLI](https://github.com/sass/ruby-sass) – slow and deprecated

Compressed (production ready): 4.7s
Expanded (development): 4.3s

I would recommend moving away from ruby sass as there are faster options available and also [it is now deprecated](https://sass-lang.com/ruby-sass).
