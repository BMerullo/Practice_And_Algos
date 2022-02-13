import axios from 'axios';
import React, { useEffect, useState } from 'react';



const DisplayOne = (props) => {

    const { url } = props
    const [person, setPerson] = ([])

    useEffect(() => {
        axios
            .get( url )
            .then ((res)=> {
                console.log("here is the data")
                console.log(res.data.results)
                setPerson(res.data.results)
            })
            .catch((err)=>console.log(err))
            },[])

            

        return (
            <div>
                {
                    person.map((info, index)=>(
                        <div>
                            <p>
                                {info.name}
                            </p>
                        </div>
                    ))
                }
            </div>
        )
    }

export default DisplayOne;