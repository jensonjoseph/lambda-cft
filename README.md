Build image: `docker build -t jensonjoseph/node12-hello-world-lambda .`

Run container locally: `docker run -p 9000:8080 jensonjoseph/node12-hello-world-lambda:latest`

Test: `curl -XPOST "http://localhost:9000/2015-03-31/functions/function/invocations" -d '{}'`

Create AWS ECR repository: `aws ecr create-repository --repository-name lambda-container --image-scanning-configuration scanOnPush=true --region us-east-1 --no-verify-ssl`

Tag image for ECR: `docker tag jensonjoseph/node12-hello-world-lambda ${aws_account_id}.dkr.ecr.us-east-1.amazonaws. com/lambda-container:latest`

Docker ECR login: `aws ecr --no-verify-ssl get-login-password --region us-east-1 | docker login --username AWS --password-stdin ${aws_account_id}.dkr.ecr.us-east-1.amazonaws.com` 

Publish image: `docker push ${aws_account_id}.dkr.ecr.us-east-1.amazonaws.com/lambda-container`

Deploy lambda as cft: `aws cloudformation deploy --template-file resources.yml --stack-name lambdacft --capabilities CAPABILITY_NAMED_IAM`