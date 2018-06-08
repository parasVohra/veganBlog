const AWS = require('aws-sdk');
let awsConfig = {
    "region": "ca-central-1",
    "endpoint": "http://dynamodb.ca-central-1.amazonaws.com",
    "accessKeyId": "AKIAIIEB7M6XLRBAWB4Q", "secretAccessKey": "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"
};

AWS.config.update(awsConfig);

const docClient = new AWS.DynamoDB.DocumentClient();
const table =  'VeganBlogDB';
var commentID = 1 ;


//dynamoDb 

module.exports = {
    //get data from database
    fetchData : function(){
        var params = {
            TableName: 'VeganBlogDB',
            Key: {
                'BlogID': "1"
            }
        };

        docClient.get(params, function(err, data){
            if(err){
                console.log("error"+ JSON.stringify(err,null, 2));
            }
            else{
                console.log("Sucess"+  JSON.stringify(data,null, 2));

                var log = JSON.stringify(data) ;

                console.log(log.title);
        
            }
        })
    },



//insert data in database
    saveData : function(data){
        var params = {
            TableName: table,
            Item: {
                "BlogID": "1",
                "title": "diet",
                "blogComment": [
                    {
                        "name": data.name,
                        "content": data.content,
                        "commentID":  commentID ,
                        "commentLike": 0
                    }
                ]
                    
            }
        }
        docClient.put(params,  function(err, data){
            if(err){
                console.log("error"+ JSON.stringify(err,null, 2));
            }
            else{
                console.log("Sucess");
        
            }   
        })
    },

    updateComment : function(data){
        var input = {
            "BlogID": "1",
            "title": "diet",
            "blogComment": [
                {
                    "name": data.name,
                    "content": data.content,
                    "commentID": commentID
                }
            ]
               
                
            
        };
        var params = {
            TableName: 'VeganBlogDB',
            Key : { 
            "BlogID": "1",
            },
            UpdateExpression: "SET blogComment = list_append(#attr,:val)  ",
            ExpressionAttributeNames:{
                "#attr": "CommentID"
            },
            ExpressionAttributeValues:{
                ":val":{
                    "N": 1
                } 
            },
        }
        docClient.update(params,  function(err, data){
            if(err){
                console.log("error"+ JSON.stringify(err,null, 2));
            }
            else{
                console.log("Sucess");
        
            }   
        })
    },

    updateCommentID: function(){
        var params = {
            TableName: 'VeganBlogDB',
            Key : { 
            "BlogID": "1",
            },
            UpdateExpression: "SET commentID = CommentID + :val  ",
            // ExpressionAttributeName:{
            //     ":val": [commentID]
            // },
            ExpressionAttributeValues:{
                ":val": 1
            },
        }
        docClient.update(params,  function(err, data){
            if(err){
                console.log("error"+ JSON.stringify(err,null, 2));
            }
            else{
                console.log("Sucess");
        
            }   
        })

    },
    updateLikeCounter: function(){

    }
}







//update data in database




//delete data from database

//fetchData();
//save();

