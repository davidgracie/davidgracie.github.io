---
layout: post
title:  "Add custom message of the day (MOTD) on Linux"
date:   2017-11-21 00:00:00 +0000
categories: tutorial aws ec2 linux
permalink: /add-custom-message-of-the-day-motd-on-linux/
author: David Gracie
---
The “message of the day” (MOTD) is the text that outputs in the terminal as soon as you login to a linux server. Depending on the operating system, it can display version information or alerts that updates are available to install. Most servers will be configured with a disclaimer/warning about accessing systems you’re not authorised to. This tutorial steps through adding your own MOTD.

Create custom banner file (number dictates ordering)

    sudo nano /etc/update-motd.d/40-custom-banner

Add text or commands you want to output when users login to the server, for example:

    #!/bin/sh
    docker images
    echo ""
    docker ps -a
    echo ""
    df -h
    echo ""
    cat /root/README

This will output the list of docker images held on the server, list of docker containers on the server, free disk space in “human readable” format and the contents of the /root/README file.

Run **update-motd** to activate changes:

    sudo /usr/sbin/update-motd

This is an example of what you can get when you sign in to the server:

![MOTD Example](/assets/images/add-custom-message-of-the-day-motd-on-linux/motd-example.png)

Notice, if you’re using AWS, you get the standard EC2 banner but you can now see your custom banner below that.
