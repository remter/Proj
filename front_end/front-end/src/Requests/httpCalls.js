// created a default server_url 
var server_url = "http://192.168.1.210:8080/";

class httpCalls {
    // setting server url 
    constructor (URL){
        server_url = URL;
    }

    async a_get(URL_parm){
        // f_url is used inside fetch to get response
        var f_url = server_url + URL_parm;
        // ret is used as the response for the fetch
        var ret = "";

        //Get from server data
        await fetch(f_url, { 
            method: "GET",
            mode:'cors',
            headers:{
                "Content-Type": "application/json",
                "Access-Control-Allow-Headers" : '*' ,
                'Access-Control-Allow-Origin' : '*'
            }
        })
        //Then convert the data into json format and set response to the data
        .then(res => res.json()).then(data => {ret = data;})
        //Log the response to console to check if it is good.
        console.log(ret)
        //Return the data
        return ret;

    }
    async a_get_ind(URL_parm, pVar){
        // f_url is used inside fetch to get response pVar is the index var
        var f_url = server_url + URL_parm +"/"+ pVar;
        // ret is used as the response for the fetch
        var ret = "";

        //Get from server data
        await fetch(f_url, { 
            method: "GET",
            mode:'cors',
            headers:{
                "Content-Type": "application/json",
                "Access-Control-Allow-Headers" : '*' ,
                'Access-Control-Allow-Origin' : '*'
            }
        })
        //Then convert the data into json format and set response to the data
        .then(res => res.json()).then(data => {ret = data;})
        //Log the response to console to check if it is good.
        console.log(ret)
        //Return the data
        return ret;

    }


}
export default httpCalls;