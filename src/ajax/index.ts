export function get_all(url : string) : Promise<Users>{
    return new Promise((resolve : (resp : Users) => void, reject) => {
        const request = new XMLHttpRequest()
        request.open("GET", url, true)
        request.send()
        request.onreadystatechange = () => {
            if(request.readyState == XMLHttpRequest.DONE) {
                if(request.getResponseHeader("content-type") == "application/json") 
                {
                    let resp = JSON.parse(request.responseText)
                    resolve(resp)
                }
                else 
                { 
                    reject(new Error("That's not an json"))
                }
            }
        }
    })
}

export interface Users {
    data?: (DataEntity)[] | null;
}
export interface DataEntity {
    user_info: UserInfo;
}
export interface UserInfo {
    username: string;
    mail: string;
    id: number;
}