---
layout: post
title:  "Whitelisting IP addresses in nginx, the easy way"
date:   2017-11-19 00:00:00 +0000
categories: tutorial linux nginx security
permalink: /whitelisting-ip-addresses-in-nginx-the-easy-way/
author: David Gracie
---
One way of securing the admin sections of your web-based applications, such as WordPress or CakePHP, is to block all connections from IP addresses that aren’t on your whitelist. This tutorial describes how to do this in nginx running on Linux and assumes you have basic terminal/command line skills.

This means that even if a hacker knows your login details, they’ll still not be able to connect to your admin login page because they’re on a different IP address.

Create new directory to hold the include files:

    sudo mkdir /etc/nginx/includes

Create new whitelist include file:

    sudo nano /etc/nginx/includes/example_whitelist

Add a line per IP address you want to whitelist:

    allow <your_ip>;

Edit nginx config to use include file:

    sudo nano /etc/nginx/conf.d/example.conf

Add a line to the location blocks you want to restrict:

    location / {
        include includes/example_whitelist;
        deny all;
    }

Restart nginx:

    sudo service nginx restart

## What if my IP address changes?

If any of the whitelisted IP addresses change, you only need to update the whitelist file and restart nginx. This can be useful when you have the same IP address in multiple places within your config files.

    sudo nano /etc/nginx/includes/example_whitelist

Make the change to the IP address that’s changed, then restart nginx:

    sudo service nginx restart

## Full example.conf file

Please update the details in this file to match your own setup.

    server {
      listen         80;
      server_name    mywebsite.co.uk www.mywebsite.co.uk;
      root           /var/www/html/mywebsite;
      index          index.php index.html index.htm;

      location / {
        include includes/example_whitelist;
        deny all;
      }
    }
