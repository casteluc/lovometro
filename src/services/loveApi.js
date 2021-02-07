import axios from 'axios'

const api = axios.create({
    baseURL: "https://love-calculator.p.rapidapi.com/"
})

let config = {
    headers: {
        "x-rapidapi-key": "d41ccf7d02msh65cc42348ecf3b8p1475a6jsn4f85bc874ccd",
        "x-rapidapi-host": "love-calculator.p.rapidapi.com",
        "useQueryString": true
    }
}

const get_percentage = (fname, sname, setPercentage) => {
    config["params"] = {
        fname: fname,
        sname: sname
    }

    api.get("/getPercentage", config)
        .then( res => {
            setPercentage(res.data.percentage)
            console.log(res.data)
        })
}

export { get_percentage }