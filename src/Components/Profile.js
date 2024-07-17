import React from 'react'
import './Profile.css'
import { Button } from 'react-bootstrap'
import { useState } from 'react'
import swal from 'sweetalert';

function Profile({ listtogglebtn, cardstogglebtn }) {
    const [toggleform, settoggleform] = useState(true)
    const [formvalues, setformvalues] = useState({ firstname: '', lastname: '', address: '', country: '', email: '' })
    const [error, seterror] = useState({})

    const feedbackbtn = () => {
        settoggleform(prev => !prev)
    }

    const HandleChange = (e) => {
        const { name, value } = e.target;
        setformvalues({ ...formvalues, [name]: value })
    }
    const SubmitForm = (e) => {
        e.preventDefault()
        let Error = {}
        let value = true
        if (!formvalues.firstname) {
            Error.firstname = 'please enter firstname'
            value = false
        } else {
            Error.firstname = ''
            value = true
        }

        if (!formvalues.lastname) {
            Error.lastname = 'please enter firstname'
            value = false
        } else {
            Error.lastname = ''
            value = true
        }

        if (!formvalues.address) {
            Error.address = 'please enter firstname'
            value = false
        } else {
            Error.address = ''
            value = true
        }


        if (!formvalues.country) {
            Error.country = 'please enter country'
            value = false
        } else {
            Error.country = ''
            value = true
        }

        if (!formvalues.email) {
            Error.email = 'please enter email'
            value = false
        } else {
            Error.email = ''
            value = true
        }

        if (Error) {
            seterror(Error)
        }
        if (value) {
            setformvalues({ firstname: '', lastname: '', address: '', country: '', email: '' })
            alert('form submit sucessfully')
        }

    }

    return (
        <div className='togglebtn'>
            {toggleform ? (<div>
                <span >
                    <h2>Hi Reader,</h2>
                    <h3>Here's your News!</h3>
                </span>
                <div>
                    <h2>toggle</h2>
                    <Button onClick={cardstogglebtn}>Card</Button>
                    <Button onClick={listtogglebtn}>List</Button>
                </div>
                <div>
                    <h2>Have a feedback?</h2>
                    <Button onClick={feedbackbtn}>We're Listening!</Button>
                </div>
            </div>) :
                (<div>
                    <h2>Hi Reader,</h2>
                    <h3>Here's your News!</h3>
                    <div>
                        <h2>Have a feedback?</h2>
                        <Button onClick={feedbackbtn}>We're Listening!</Button>
                        <br></br>
                        <br></br>
                        <form>
                            <h2>Thanks you so much for taking the time!</h2>
                            <h3>Please provide the below details</h3>
                            <br></br>
                            <br></br>
                            <label>FirstName</label>
                            <input value={formvalues.firstname} name='firstname' onChange={HandleChange} />
                            <span style={{ color: 'red' }} >{error.firstname}</span>
                            <br></br>
                            <label>LastName</label>
                            <input value={formvalues.lastname} name='lastname' onChange={HandleChange} />
                            <span style={{ color: 'red' }}>{error.lastname}</span>
                            <br></br>
                            <label>Address</label>
                            <textarea value={formvalues.address} name='address' onChange={HandleChange}>Address</textarea>
                            <span style={{ color: 'red' }}>{error.address}</span>
                            <br></br>
                            <label >Country</label>
                            <input value={formvalues.country} name='country' onChange={HandleChange} />
                            <span style={{ color: 'red' }}>{error.country}</span>
                            <br></br>
                            <label >Email ID</label>
                            <input value={formvalues.email} name='email' onChange={HandleChange} />
                            <span style={{ color: 'red' }}>{error.email}</span>
                            <br></br>
                            <Button onClick={SubmitForm}>submit</Button>
                        </form>
                    </div>
                </div>)}
        </div>
    )
}

export default Profile