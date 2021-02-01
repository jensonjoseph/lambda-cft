aws cloudformation package  --template-file resources.yml --s3-bucket my-lambda-functions-jenson --s3-prefix node12lambda --output-template-file resources_packaged.yml --no-verify-ssl


aws cloudformation deploy --template-file resources_packaged.yml --stack-name lambdacft --capabilities CAPABILITY_NAMED_IAM
