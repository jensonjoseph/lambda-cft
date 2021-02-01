aws cloudformation package  --template-file resources.yml --s3-bucket my-lambda-functions-jenson --s3-prefix node12lambda --output-template-file resources_packaged.yml --no-verify-ssl

aws cloudformation deploy --template-file resources_packaged.yml --stack-name lambdacft --capabilities CAPABILITY_NAMED_IAM

docker build -t jensonjoseph/node12-hello-world-lambda .
docker run -p 9000:8080 jensonjoseph/node12-hello-world-lambda:latest

curl -XPOST "http://localhost:9000/2015-03-31/functions/function/invocations" -d '{}'

docker push jensonjoseph/node12-hello-world-lambda