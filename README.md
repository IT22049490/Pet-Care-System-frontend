# Pet Care System Deployment with Terraform on AWS

This repository contains Terraform scripts to deploy the **Pet Care System** frontend on an AWS EC2 instance with a VPC, Subnet, Security Group, and Nginx setup.



## Overview

The Pet Care System is a React-based frontend application. This Terraform setup automates:

- Creation of AWS VPC, Subnet, Internet Gateway, and Route Table
- Deployment of an EC2 instance
- Installation of Node.js, NPM, and Nginx
- Cloning and running the frontend React application

---

## Prerequisites

- Terraform installed (v1.5+ recommended)
- AWS CLI configured with Access Key and Secret Key
- SSH key pair generated (`~/.ssh/id_rsa` and `~/.ssh/id_rsa.pub`)
- Git installed locally

---


## Setup Instructions

1. **Configure AWS CLI**  

```bash
aws configure
