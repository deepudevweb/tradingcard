import { useState } from "react"
import { useEffect } from "react"
import trade from './trade.png'

function Cardhover() {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)

    async function getData() {
        setLoading(true)
        const response = await fetch("https://randomuser.me/api/", {
            method: 'GET'
        })
        const user = await response.json()
        console.log(user.results);
        setData(user.results[0])
        setLoading(false)

    }
    useEffect(() => {
        getData()
    }, [])
    if (loading) {
        return <h1> hello </h1>
    }
    else {
        return (
            <div className="container">
                <div className="card">
                    <div className="top"><img className="image" src={data.picture.large} alt="" />
                        <img className="logo" src={trade} alt="" />
                        <h1 className="heading">Xml<span>trader</span> <br /> </h1>
                        <h4 className="contact">ph : {data.phone}</h4>
                        <div className="name"> <h2 >{data.name.title}. <span> {data.name.first} </span>  <span>{data.name.last}</span></h2> </div>

                    </div>
                    <div className="mid">
                        <div className="box"> <h5>Gender <br /><span>{data.gender}</span></h5></div>
                       <div className="line"><hr/></div> 
                        <div className="box">  <h5>Age<br /><span>{data.dob.age}</span></h5></div>
                       <div className="line2" ><hr/></div>
                        <div className="box">  <h5>Address<br /><span>{data.location.city}/{data.location.country} {data.location.state}</span></h5></div>
                    </div>
                    <div className="down">
                        <div className="box"> <h5>ID: <span>{data.id.value} </span> </h5></div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Cardhover;