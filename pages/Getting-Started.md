---
title: Getting Started
---

# Introduction

This page will guide you through the process of setting up the *Database 4 Everything* on your system.

---

# Pre-Requisites

---

## Debian Linux

While *db4e* is certified for [Debian](https://debian.org) [12 Bookworm](https://cdimage.debian.org/debian-cd/current/amd64/iso-cd/debian-12.11.0-amd64-netinst.iso) Linux, it should work with minimal tweaks on any Linux distribution.

This guide assumes a *minimal* (NetInst) install with only:

  * SSH server
  * Standard system utilities* 

-selected.

---

## Root Access

The *db4e* application does *NOT* require root access to run. However, root access is required to:

* Install Pre-Requisite Linux packages
* Install MongoDB
* Run the XMRig miner 
* Configure sudo for XMRig control
* Configure *db4e* as a system service

---

### Dedicated db4e Account

**PRO TIP:** The *best practise* is to created a dedicated Linux *db4e* account and have that account own the *db4e* code and the *GitHub Pages* repository. This is optional.

---

## MongoDB Install

MongoDB does not ship with Debian, however the good folks at Mongo run their own repository. See [Installing MongoDB](/pages/Installing-MongoDB.html) for detailed instructions on setting up repository access and installing MongoDB.

---

# Create a GitHub Account

If you don't already have one, you can get a free GitHub account.

* Navigate to [https://github.com](https://github.com) and click on the *Sign up* button.

---

# Create a Repository

Next you'll need to create a GitHub repository. This will host the *db4e* website.

* Navigate to [https://github.com](https://github.com) and click on the *Sign in* button.
* Once you've signed in, click on your account icon in the top-right corner to access the drop down menu. 
* Click on *Your repositories* menu item
* On the *Repositories* page click on the *New* button.
* Choose a name for your repository, e.g. *xmr*.
* Add a description, e.g. *Monero XMR Mining Farm*
* Select *GNU General Public Licence v3.0* to be inline with *db4e*'s licensing.
* Click on the *Create repository* button.

---

# Setup GitHub Pages

You need to configure the repository as a *GitHub Pages* site. Once you're logged into *GitHub* and have navigated to your newly created repo:

* Click on the *Settings* gear, near the top-right corner of the repository screen.
* Under the *Code and Automation* section, select *Pages*.
* Change the *Branch* from *None* to *main* and click the *Save* button.
* Optionally put in a custom domain (e.g. *xmr.osoyalce.com*). **NOTE:** You will need to be able to create DNS records in the domain for this to work.

---

# Generate a SSH Key

SSH keys are used to authenticate to GitHub. This is so you can upload report data to your website. Login to *GitHub*. The SSH key that's needed is the one associated with the user who will be running the *db4e* application (e.g. *sally*, or *db4e*). The account's public key is in the user's home directory:

Check if you already have a SSH key:

```
ls -l ~/.ssh/id_rsa.pub 
```

If you do not already have an ssh-key you can easily generate one with the `ssh-keygen` command:

```
ssh-keygen -b 10240
```

When prompted:

```
Enter file in which to save the key (/home/sally/.ssh/id_rsa): 
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
```

-simply hit enter (default path, empty passphrase).

# Import Key into GitHub

Next you'll want to import the **public** part of your new key to GitHub. This file is `~/.ssh/id_rsa.pub`.

* Once you've logged into *GitHub*, click on your account icon in the top-right corner to access the drop down menu. 
* Click on *Settings* (not the repository settings).
* Click on *SSH and GPG keys*.
* Click on the *New SSH key* button.
* Enter a name for the key, e.g. *db4e on my_server*.
* Next you'll want to cut-and-paste the contents of the public key file (~/.ssh/id_rsa.pub) into the *Key* box in GitHub.

# Test SSH 

Test that the connection to GitHub pages you just setup works.

On your system, issue the following to test that everything is working properly:

```
ssh -T git@github.com
```

Sample output:

```
Hi SallyKolodny! You've successfully authenticated, but GitHub does not provide shell access.
sally@debian12:~$ 
```

# Clone the Repository

Because they are both git repositories, you can **NOT** not clone your git repository into the *db4e* folder. You will need your *GitHub* account name (e.g. *NadimGhaznavi*) and the name of the repo you created (e.g. *xmr*). Here's an example:

```
git clone git@github.com:SallyKolodny/xmr
```

Sample output:

```
Cloning into 'xmr'...
remote: Enumerating objects: 7, done.
remote: Counting objects: 100% (7/7), done.
remote: Compressing objects: 100% (5/5), done.
remote: Total 7 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
Receiving objects: 100% (7/7), 13.68 KiB | 13.68 MiB/s, done.
sally@debian12:~$ 
```








