//Bu bizim ici bir sablon logger, digerleri bundan kalitim alacak
export class BaseLogger{
    log(data){
        console.log("Default logger: " + data)
    }
}


export class ElasticLogger extends BaseLogger{
    //Default aldigimizi override ettik
    log(data){
        console.log("Elastic logger: " + data)
    }
}

export class MongoLogger extends BaseLogger{
    //Default aldigimizi override ettik
    log(data){
        console.log("Mongo logger: " + data)
    }
}