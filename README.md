

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

## Deployment Instructions
1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/pet-care-frontend.git
   cd pet-care-frontend
