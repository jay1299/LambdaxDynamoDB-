{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
                "dynamodb:GetItem",
                "dynamodb:Scan"
            ],
            "Resource": " your DynamoDB ARN"
        }
    ]
}