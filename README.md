<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Frontend Deployment with Terraform on AWS</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; margin: 20px; }
        pre { background-color: #f4f4f4; padding: 10px; border-radius: 5px; }
        h1, h2, h3 { color: #333; }
        code { background-color: #eee; padding: 2px 4px; border-radius: 3px; }
        ul { margin: 10px 0 10px 20px; }
    </style>
</head>
<body>
    <h1>React Frontend Deployment with Terraform on AWS</h1>
    <p>This project demonstrates how to deploy a React frontend application on an AWS EC2 instance using Terraform.</p>

    <h2>Prerequisites</h2>
    <ul>
        <li>AWS Account with Access Key and Secret Key</li>
        <li>Terraform installed on your local machine</li>
        <li>Node.js installed (for building the React app)</li>
        <li>React app ready to deploy</li>
    </ul>

    <h2>Steps to Deploy</h2>

    <h3>1. Configure AWS Credentials</h3>
    <p>Run the following command and provide your AWS credentials:</p>
    <pre><code>aws configure</code></pre>
    <ul>
        <li>AWS Access Key</li>
        <li>AWS Secret Key</li>
        <li>Default region (e.g., <code>us-east-1</code>)</li>
        <li>Output format (e.g., <code>json</code>)</li>
    </ul>

    <h3>2. Initialize Terraform</h3>
    <p>Navigate to the Terraform directory and initialize:</p>
    <pre><code>terraform init</code></pre>
    <p>This will download required Terraform providers and prepare the working directory.</p>

    <h3>3. Apply Terraform Configuration</h3>
    <pre><code>terraform apply</code></pre>
    <p>Review the resources Terraform plans to create and type <code>yes</code> to confirm.</p>
    <p><strong>Resources that will be created:</strong></p>
    <ul>
        <li>VPC</li>
        <li>Subnet</li>
        <li>Security Group</li>
        <li>EC2 instance</li>
    </ul>

    <h3>4. Access the Frontend</h3>
    <p>Once deployment is complete:</p>
    <ol>
        <li>Retrieve your EC2 instance public IP (from Terraform output or AWS console).</li>
        <li>Open your browser and visit:</li>
    </ol>
    <pre><code>http://&lt;EC2_PUBLIC_IP&gt;:3000</code></pre>
    <p>You should see your React app running.</p>

    <h2>Notes</h2>
    <ul>
        <li>Ensure port <code>3000</code> is open in your security group to access the frontend.</li>
        <li>You can modify the Terraform scripts to include SSL or a domain name.</li>
        <li>Terraform can also manage updates to the frontend app if the provisioner is configured correctly.</li>
    </ul>

    <h2>Project Structure</h2>
    <pre><code>terraform/
│── main.tf
│── variables.tf
│── outputs.tf
│── provisioners.tf
react-frontend/
│── package.json
│── src/
│── public/
</code></pre>

    <h2>References</h2>
    <ul>
        <li><a href="https://registry.terraform.io/providers/hashicorp/aws/latest/docs" target="_blank">Terraform AWS Provider Documentation</a></li>
        <li><a href="https://reactjs.org/docs/getting-started.html" target="_blank">React Official Documentation</a></li>
    </ul>
</body>
</html>
