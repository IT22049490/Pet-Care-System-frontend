

---

## Project Overview
The **Pet Care System** is a web application designed to manage pet care operations efficiently. This repository focuses on automating the deployment of the frontend using Terraform and provisioning an AWS EC2 instance.

---

## Features
- Automates EC2 instance creation and configuration.
- Installs required software (**Node.js**, **npm**, **Nginx**) automatically.
- Uploads React frontend code to the EC2 instance.
- Starts the frontend application on the server.

---

## Technologies Used
- **Terraform** – Infrastructure as Code (IaC)
- **AWS EC2** – Cloud compute resource
- **React.js** – Frontend framework
- **Node.js & npm** – Backend runtime for frontend
- **Nginx** – Web server for serving frontend

---

## Architecture
1. **VPC and Subnet** – Isolated network for EC2 instance.
2. **Internet Gateway & Route Table** – Ensures public access to the EC2 instance.
3. **Security Group** – Configured for HTTP (port 3000) and SSH (port 22).
4. **EC2 Instance** – Ubuntu server hosting the frontend.
5. **Provisioners** – Terraform provisions the instance:
   - Uploads frontend code
   - Installs Node.js, npm, Nginx
   - Runs the frontend application

---

## Steps

### 1. Configure AWS credentials

Run the following command and enter your AWS Access Key, Secret Key, region, and output format:


aws configure
## 2. Initialize Terraform

Initialize your Terraform working directory by running:


terraform init

## 3. Apply Terraform configuration

Apply the Terraform configuration to create resources:


terraform apply

## 4. Access the Frontend

Once deployment is complete, access your React app using the EC2 public IP on port 3000:


http://<EC2_PUBLIC_IP>:3000
