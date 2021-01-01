---
layout: post
title:  "Magento Security Scan Tool"
date:   2018-02-16 00:00:00 +0000
categories: tutorial magento security
permalink: /magento-security-scan-tool/
author: David Gracie
---
Magento Security Scan is a free tool from Magento Commerce that can scan your Magento store for vulnerabilities on an ad-hoc, daily or weekly basis.

To get started with this tool, visit [https://account.magento.com/scanner](https://account.magento.com/scanner) and sign in to your Magento account.

![Magento Account Login](/assets/images/magento-security-scan-tool/Magento-login-768x451.png)

Once signed in, click the **Go To Security Scan** button.

![Magento My Account Page](/assets/images/magento-security-scan-tool/Magento-My-Account-768x687.png)

Click the **Add Site** button to add your first Magento site to the scanner.

![Magento Security Scan Dashboard](/assets/images/magento-security-scan-tool/Magento-Security-Scan-Dashboard-768x335.png)

Before you can scan your site, you’ll need to verify your ownership of the domain name. To do this, the tool offers two options:

* HTML comment
* META tag

There are clear instructions on that page about how to add this to your Magento site to complete the verification process.

![Magento Add Site](/assets/images/magento-security-scan-tool/Magento-Add-Site-768x991.png)

You can the set a schedule for the scans, where you have three options:

* Ad-hoc (no automatic scanning)
* Daily
* Weekly

For daily scans, you can choose the time it will run. For weekly scans, you can choose the time and day it will run.

You then set an email address that you can receive the scan reports and security notifications to.

Once you’ve completed your set up, click the **Submit** button.

You’ll be taken back to the dashboard where you should see the site you’ve just added. To run your first scan, click the **Action dropdown** and select **Run Scan**.

![Magento Security Scan Dashboard - Site Added](/assets/images/magento-security-scan-tool/Magento-Security-Scan-Dashboard-Site-Added-768x390.png)

Your scan will go into a pending state and then to in progress.

![Magento Security Scan Dashboard - Scan Pending](/assets/images/magento-security-scan-tool/Magento-Security-Scan-Dashboard-Scan-Pending-768x86.png)

Keep refreshing the page until you see it changing to complete. You can then click the **View report** button. You’ll also see the overall risk shown in the first column.

![Magento Security Scan Dashboard - Scan Complete](/assets/images/magento-security-scan-tool/Magento-Security-Scan-Dashboard-Scan-Complete-768x86.png)

## Security Report

![Magento Security Report](/assets/images/magento-security-scan-tool/Magento-Security-Report-387x1024.png)

The security report is broken down into three sections:

* Failed Scans
* Unidentified Scans
* Successful Scans

### Failed Scans

Scans that have failed need reviewed immediately to ensure your Magento site security hasn’t been compromised.

### Unidentified Scans

These scans are marked as “unidentified” because the scanner was unable to verify the result. This is usually because the scanner doesn’t have access to the areas of your site that are required for the check. For example, the check for out-of-date PHP versions may not be able to determine the PHP version used on the server as you have prevented that from being revealed.

### Successful Scans

Scans that are successful confirm that possible vulnerabilities have been mitigated, patches have been installed and compromises have not been exploited on your Magento site.

You can also download the report in PDF format for sharing with your team or hosting provider.
